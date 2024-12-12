---
title: "Classificateur"
summary: "Logiciel de classement de données utilisant l'algorithme k-NN"
date: "Nov 2024"
draft: false
tags:
- Java
- JavaFX
- BUT Informatique
---
## Visuel

![](/screen_knn.png)
*Interface graphique principale contenant le graphe des données et toutes les fonctionnalités.*

## Description

Ce projet effectué en deuxième année de BUT Informatique nous impose de réalisé, en groupe de 4, une implémentation de l'algorithme k-NN (k plus proches voisins) pour permettre
de trouver la catégorie d'une donnée en fonction des autres. Nous avons du développer cet algorithme de classification en Java, et utiliser Java FX pour l'affichage
graphique. Cette réalisation nous a indroduit à l'utilisation de patron de conception (design patterns) comme le MVC (Modèle, Vue, Contrôleur) ou Observable Observer.

### Spécification

Le projet était composé en deux jalons, et chacun disposait d'attendus spécifiques :
- **Chargement** : Les données seront fournies sous forme de fichiers CSV (Comma Separated Values) que le programme devra pouvoir charger pour construire le modèle;
- **Modélisation** : Plusieurs jeux de données seront fournis (ex : des Iris, les Pokemons). Chaque jeu de données devra être modélisé de façon appropriée dans le projet, mais les fonctionnalités demandées (dans la présente liste) devront être aussi indépendantes que possible de ces données;
- **Affichage** : Une fois les données chargées, on doit pouvoir les visualiser sous forme de nuage de points en projetant sur deux attributs à choisir intéractivement. Le type de ces attributs peut être numérique ou énuméré (un ensemble fini de valeurs discrètes). Dans le cas de valeurs énumérées, le programme choisira un ordre quelconque des valeurs. Le programme doit permettre de visualiser sur le nuage de points la catégorie des données, par exemple avec des couleurs par catégorie. Cette catégorie fait partie des informations présentes dans le jeu de données fournies. Elle peut être choisie par l'utilisateur comme l'un des attributs booléen ou de type énuméré, une catégorie par défaut est choisie au chargement;
- **Classification** : Le programme doit permettre de construire un modèle de classification des données pour la catégorie sélectionnée à l'aide de l'algorithme kNN pour une valeur de k et une distance, que l'utilisateur peut choisir. Cette classification doit permettre de choisir la catégorie la plus probable pour un nouveau point (saisi par l'utilisateur), dont la catégorie est inconnue. Le nouveau point doit être ajouté au nuage de points, de façon à ce qu'il apparaisse clairement, ainsi que sa catégorie;
- **Distance** : Dans un deuxième temps, l'utilisateur pourra choisir en plus de la distance (euclidienne et de Manhattan au moins) les attributs à utiliser pour le calcul de la distance entre deux données, et permettre l'utilisation de pondérations pour augmenter l'importance de certains attributs.
- **Qualité** : La robustesse de votre classification doit être calculée par rapport à vos données, et accessible dans votre interface, en précisant la méthode d'évaluation. Dans un deuxième temps, le logiciel permettra à l'utilisateur de trouver le meilleur k possible étant donnés une catégorie et une distance;
- **Interaction** : Sélectionner dans le nuage un point pour afficher la donnée qu’il représente (toutes les valeurs de ses attributs et sa catégorie). Optionnellement, le passage de la souris sur un point du nuage affichera en infobulle la donnée qu'il représente.

## Mon apprentissage sur ce projet

Grâce à ce projet, j'ai pu découvrir le pair programming que j'ai beaucoup pratiqué.
Il nous a été très utile notamment pour la généricité totale (le logiciel fonctionne avec n'importe quel fichier CSV, même ceux qu'il ne connaît pas).

Avoir participé à l'implémentation l'algorithme k-NN avec mes coéquipiers m'a appris que j'avais les capacités d'accomplir ce genre de défis qu'auparavent je trouvais inatteignables pour mon niveau.