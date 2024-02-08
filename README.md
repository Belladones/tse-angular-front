# Bookshelf

## Thibault Bravar - Hugo Mirofle



Ce projet Angular à été developpé avec Angular version 17.0.7.
L'objectif de ce site internet est de visualiser des livres d'une biblithèque.

## Architecture de Bookshelf 

### La Home page

La Home page nous permet de découvrir l'univers graphique de Bookshelf. Nous avons une identité visuelle marquée.
Notre objectif est d'avoir un visuel moderne, simple d'utilisation et minimaliste. 
Tout au long de ce site, nous avons réalisé des animations simples qui repondent parfaitement a notre besoin. Je vous laisserai les decouvrir lors de votre visite.

### Catalog

La page Catalog nous permet d'afficher les livres disponibles sur notre site internet. 
Nous venons piocher les informations des livres dans un fichier json et nous les affichons a l'utilisateur.

Une fois de plus, les animations sont simples : 
	- Au recto du livre nous visualisons sont titre, l'auteur 
	- Au verso nous pouvons visualiser la description et la date de sortie du livre
	
La premiere particularité de notre site se trouve dans l'implémentation d'une barre de recherche. 
En effet, sur cette page nous pouvons rechercher par titre du livre. Cela de deux maniere différentes : 
	- Par recherche texte, en ecrivant le nom du titre dans la barre de recherche
	- Par la premiere lettre du livre, en cliquant sur la lettre B de la navigation, nous verrons tous les livres dont le titre commence par un B.
	  Pour retirer ce filtre, il suffit de recliquer sur la B ou alors de cliquer sur une nouvelle lettre.
	  
### Loans

La page Loans nous permet de connaitre les livres qui ont été loués et connaitre par qui.
On y voit la couverture du livre, sont identifiant, la personne qui l'a loué et depuis quand,etc.

Une fois de plus, une barre de recherche est disponible, cette fois ci, nous pouvons faire des recherches plus poussées : 
	- Par titre
	- Par nom de personne qui à loué le livre -> exemple Bedia : nous verrons tous les livres loués par Ramzy Bedia
	- Par ID book, pour connaitre toutes les informations de la location du livre 112 : => on ecrit 112 dans la barre de recherche


### Users
La page Users nous permet de connaitre les personnes qui sont client de la bibliothèque. Avec une pointe d'humour, on y découvre des informations sur nos clients.
Il suffit de survoler avec la souris l'image de la personnalité publique pour connaitre son ID, nom, prenom, date de naissance, date d'adhésion.

La partie de recherche fonctionne avec les noms de famille. 




## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
