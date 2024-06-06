const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const sqlite3 = require('sqlite3').verbose()
const cors = require('cors');

// Autorisation CORS headers
app.use(cors());


// Connexcion BDD
let db = new sqlite3.Database('./db/pokeqd.db', (err) => {
    if (err) {
        return console.error(err.message)
    }
    console.log('Database connected')
})

// >> CREATE TABLLE <<
let query = 'CREATE TABLE IF NOT EXISTS pokemon (id PRIMARY KEY, name CHAR(255) UNIQUE, type CHAR(255), hability CHAR(255));'

db.run(query)

app.use(bodyParser.json())

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`app running on ${port}`)
})

// > Route API <<< 
// Extraire l'id 
function extractPokemonId(url) {
    const regex = /\/pokemon\/(\d+)\//;
    const match = url.match(regex);
    return match && match[1] ? match[1] : null;
}

// GET ALL
app.get('/get/all/pokemon', async (req, res) => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?offset=100&limit=100')
        const data = await response.json()
        console.log(data.results)

        for (const pokemon of data.results) {
            const id = extractPokemonId(pokemon.url);
            if (id) {
                const getPokemonWithId = await fetch('https://pokeapi.co/api/v2/pokemon/${id}')
                const pokemonData = await getPokemonWithId.json()

                db.run('INSERT OR IGNORE INTO pokemon (id, name, type, hability) VALUES(?, ?, ?, ?)', [id, pokemonData.name, pokemonData.types[0].type.name, pokemonData.abilities[0].ability.name]);
            }
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ message : 'Erreur de chargement'})
    }
})


// GET BY ID
app.get('/get/pokemon/:id', (req, res) => {
    const { id } = req.params
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {})
    .then(res => res.json())
    .then(data => {
        res.json(data)
        db.run('INSERT OR IGNORE INTO pokemon (id, name, type, hability) VALUES(?, ?, ?, ?)', [id, data.name, data.types[0].type.name, data.abilities[0].ability.name]);
    })
    .catch(err => {
        if (err) {
            console.error(err.message);
            res.status(404).json({ message: 'Not found: Failed to get Pokemon, check Id: `${id}` if exists' });
        } else {
            res.json({ message: 'Pokemon get successfully' });
        }
    })
})
// UDPDATE

app.put('/update/pokemon/:id', (req, res) => {
    const { id } = req.params; // Recup id via parama

    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`, {})
    .then(res => res.json())
    .then(data => {
        // update here
        db.run('INSERT OR IGNORE INTO pokemon (id, name, type, hability) VALUES(?, ?, ?, ?)', [id, data.name, data.types[0].type.name, data.abilities[0].ability.name]);
        // utilisation de serialize pour mettre a jour les données
        db.serialize(() => {
            const query = `UPDATE pokemon SET name = ?, type = ?, hability = ? WHERE id = ?`
            // Une fois la query preparer, on passe les params de mise a jour
            db.run(query, [data.name, data.type, data.hability, id], (err) => {
                if (err) {
                    console.error(err.message);
                    res.status(500).json({ message: 'Failed to update Pokemon' });
                } else {
                    res.json({ message: 'Pokemon updated successfully' });
                }
            })
        })
    })
    .catch(err => {
        console.log(err)
    })
})

