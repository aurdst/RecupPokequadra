## Pokequadra Frontend:
> Rentrer dans le repertoire appFront puis pokequadra
> Puis executer yarn serve
## Project setup
```
> npm install
```

### Compiles pour development
```
> npm run serve // yarn serve
```

## Compiles pour production
```
> npm run build
```

## Lints
```
> npm run lint // yarn lint
```

## Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Pokequadra Backend:
> Rentrer dans le repertoire backend
> Puis executer node index
 
## Suivi du projet:

## Frontend:
Améliorer la structure en créants des composants pour les popUp de Details et de Updates
Améliorer le CSS pour avoir un beau rendu
Gérer l'update en utilisant le store pour garder les modifications

## Backend:
Gérer la pagnination des élments afin d'avoir une vue d'ensemble sur tout les pokémon
Rendre utile les méthodes du back en utilisant réellement la base de données:
    - Inserer les pokémons dans la BDD une fois récupèrer
    - Renvoyer des erreurs Backend pour le Frontend

## Optionnel:
Ajouter un carrousel sur les photo afin d'y voir un maximum d'élement
Utiliser des fichiers de traductions pour faire une version anglaise
Faire un darkMode 

## Problème rencontré :
Revoir la methode Update (voir pourquoi elle ne fonctionne plus)
Source d'aide : https://medium.com/@6unpnp/node-js-html-form-and-database-2b72728a1dc4

> Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client

## Incompréhension et lacune :

> Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
> cORRECTIF / https://dev.to/collegewap/fix-cannot-set-headers-after-they-are-sent-to-the-client-19gk

## Regex:

https://zestedesavoir.com/tutoriels/3651/les-expressions-regulieres-1/


# serialize() 
La .serialize()méthode crée une chaîne de texte dans une notation codée en URL standard. Il peut agir sur un objet jQuery qui a sélectionné des contrôles de formulaire individuels, tels que <input>, <textarea>et<select> :$( "input, textarea, select" ).serialize();

Ici j'utilise un formulaire donc avec des input pour mettre à jour les données
