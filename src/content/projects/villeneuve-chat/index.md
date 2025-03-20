---
title: "Villeneuve chat"
summary: "Application web de messagerie universitaire"
date: "Mar 2025"
draft: false
tags:
- Java
- JavaEE
- BUT Informatique
repoUrl: https://github.com/florinelef/but.sae4A02-1
---
## Visuel

![](/screen_villeneuvechat.png)
*Page contenant les fils suivis par l'utilisateur (responsive pc et mobile)*

## Description

Ce projet de deuxième année de BUT Informatique consiste réaliser
une application de messagerie web interne à l'université en JEE avec une architecture MVC (Modèle Vue Controleur).
Il se déroule sur une période d'un mois et en groupe de 2. 

## Spécification

### 1. Modélisation
- Élaborer un Modèle Conceptuel de Données (MCD).
- Rédiger un script SQL pour créer les tables et insérer des données représentatives.
- Concevoir et tester une dizaine de requêtes SQL pertinentes.

### 2. Réalisation
- Implémentation des DAO pour la gestion des données.
- Développement des fonctionnalités de base :
  - Création et gestion des fils de discussion.
  - Gestion des abonnements aux fils.
  - Publication et affichage des messages.
  - Mise en place d’un système d’authentification.

### 3. Extensions
- Ajout d’un style CSS responsive via Bootstrap.
- Gestion des likes/unlikes sur les messages.
- Mettre en parallèle un Service Web permettant en GET de récupérer en JSON les fils du membre identifié, les messages postés sur ces fils.


## Mon apprentissage sur ce projet

Travailler sur ce site m'a fait découvrir l'utilisation de bootstrap pour le front-end, et de l'architecture MVC en web pour le back-end :

Je me suis initiée à l'utilisation de bootstrap, permettant facilement de créer une belle interface d'application et j'ai eu le plaisir de lire toute la documentation pour faire le plus beau site possible. Je suis très fière d'avoir contribué à Villeneuve Chat et en particulier au design responsive de l'interface.

Au niveau du back-end, la mise en place de l'application était un véritable défi puisque c'était notre premier projet utilisant JavaEE et en mettant en place une architecture MVC. La création du service REST était vraiment intéressante et nous a permis d'en apprendre beaucoup sur le fonctionnement du web. 