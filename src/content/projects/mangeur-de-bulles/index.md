---
title: "Mangeur de bulles"
summary: "Jeu multijoueur en ligne à la Agar.io"
date: "Mar 2025"
draft: false
tags:
- HTML
- CSS
- JavaScript
- SocketIO
- BUT Informatique
repoUrl: https://github.com/florinelef/but.sae4A02-2
---
## Visuel

![](/screen_mangeurdebulles.png)
*Capture d'un moment de croisement entre deux joueurs dans le jeu.*

## Description

Ce projet est un jeu multijoueur en ligne réalisé en équipe de trois personnes. Inspiré d’agar.io, il permet aux joueurs de contrôler un avatar qui grossit en mangeant des bonus ou des adversaires plus petits. Le but est de survivre le plus longtemps possible et d’obtenir le meilleur score. Le jeu est accessible via un navigateur et fonctionne en temps réel.

## Spécification

Le jeu comprend cinq vues principales :

- une page d’accueil avec formulaire de connexion,

- la zone de jeu,

- un écran de fin de partie,

- un tableau des meilleurs scores,

- une page de crédits.

Les joueurs déplacent leur avatar à la souris ou au clavier. Ils peuvent manger les autres joueurs et bots plus petits. Plus un avatar grossit, plus il devient lent. Les bots ajoutent du défi en se déplaçant automatiquement.

La partie technique utilise le canvas en HTML pour l’affichage, un serveur Node.js avec Socket.io pour le multijoueur, et des tests unitaires. L’interface est personnalisable et pensée pour être fluide et lisible.

Un tableau des scores affiche les 10 meilleures performances. L’écran "Rejouer" montre le score final et permet de relancer une partie. La page "Crédits" présente l’équipe et la répartition du travail.

Le projet est géré avec GitLab (issues, milestones). Il est évalué sur la qualité du code, le respect du cahier des charges, l’organisation du travail, l’ergonomie et la présentation finale.


## Mon apprentissage sur ce projet

Ce projet m’a permis de consolider mes compétences techniques en développement web, notamment l’utilisation de Socket.io pour la communication en temps réel, la manipulation du canvas pour le rendu graphique, et la gestion des collisions en temps réel côté serveur. J’ai aussi approfondi ma capacité à structurer un projet en équipe, à organiser le code et à assurer la cohérence entre le frontend et le backend.

Sur le plan humain, j’ai appris à travailler efficacement en équipe, à écouter et à communiquer clairement, en particulier pour gérer les dépendances entre nos tâches et surmonter les blocages ensemble. J’ai renforcé ma capacité d’adaptation en ajustant mes méthodes de travail au rythme du groupe, et en restant autonome sur les parties que j’avais en charge.

Ce projet m’a aussi sensibilisé à l’importance de la rigueur, de la gestion du temps, et de la qualité du code, des aspects essentiels pour livrer un projet fonctionnel et maintenable dans un contexte collaboratif.