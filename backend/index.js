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
let query = 'CREATE TABLE IF NOT EXISTS pokemon (name CHAR(255) UNIQUE, type CHAR(255), hability CHAR(255));'

db.run(query)

app.use(bodyParser.json())

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log(`app running on ${port}`)
})

// > Route API <<< 

// GET ALL
app.get('/get/all/pokemon', (req, res) => {
    // Recuperation des datas
    fetch('https://pokeapi.co/api/v2/pokemon', {})
        .then(res => res.json())
        .then(data => {
            res.json(data.results)
        })
        .catch(err => {
            if (err) {
                console.error(err.message);
                res.status(404).json({ message: 'Not found: Failed to get all Pokemon' });
            } else {
                res.json({ message: 'Pokemon get successfully' });
            }
        })
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
        res.json({ "message" : "Updated" });
    })
    .catch(err => {
        console.log(err)
    })
})

