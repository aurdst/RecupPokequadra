## Pokequadra Backend:
> Rentrer dans le repertoire backend
> Puis executer node index
 
## Suivi du projet:

## Frontend:

> FAIT
- Faire le component PopUpDetails 
> EN COURS
- Faire le component PopUpUpdate 
> A FAIRE
- Pagnination des pokemon par tranches de 20 - 50 - 100
- Améliorer le CSS pour avoir un beau rendu
- Faire des bouton de fermuture sur les PopUps
- Gérer l'update en utilisant le store pour garder les modifications

## Backend:
> FAIT

> EN COURS
- Rendre utile les méthodes du back en utilisant réellement la base de données:
    - Inserer les pokémons dans la BDD une fois récupèrer
    - Renvoyer des erreurs Backend pour le Frontend
> A FAIRE
- Gérer la pagnination des élments afin d'avoir une vue d'ensemble sur tout les pokémon
- Erreur babel


## Optionnel:
> A FAIRE
- Ajouter un carrousel sur les photo afin d'y voir un maximum d'élement
- Utiliser des fichiers de traductions pour faire une version anglaise
- Faire un darkMode 

## Problème rencontré :
Revoir la methode Update (voir pourquoi elle ne fonctionne plus)
Source d'aide : https://medium.com/@6unpnp/node-js-html-form-and-database-2b72728a1dc4

> Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
> SyntaxError: Unexpected token N in JSON at position 0
> Correctif : 


## Incompréhension et lacune :

> Error [ERR_HTTP_HEADERS_SENT]: Cannot set headers after they are sent to the client
> Correctif:  / https://dev.to/collegewap/fix-cannot-set-headers-after-they-are-sent-to-the-client-19gk

Créer une pagination : 
> https://www.geeksforgeeks.org/how-to-paginate-results-in-sqlite/
> https://docs.data.world/documentation/sql/concepts/basic/OFFSET.html#:~:text=OFFSET%20dictates%20the%20number%20of,up%20and%20page%20down%20mechanisms.
## Regex:

https://zestedesavoir.com/tutoriels/3651/les-expressions-regulieres-1/


# serialize() 
La .serialize()méthode crée une chaîne de texte dans une notation codée en URL standard. Il peut agir sur un objet jQuery qui a sélectionné des contrôles de formulaire individuels, tels que <input>, <textarea>et<select> :$( "input, textarea, select" ).serialize();

