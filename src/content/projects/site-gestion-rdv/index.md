---
title: "Application de prise de rendez-vous"
summary: "Application web Springboot MVC + Spring Security"
date: "Jan 2026"
draft: false
tags:
- Java
- Springboot
- HTML
- CSS
- BUT Informatique
repoUrl: https://github.com/florinelef/but.sae5A01
---
## Visuel

![](/screen_site-gestion-rdv.png)
*Capture d'écran de la page d'accueil, avec le calendrier. Plus de visuels disponibles sur le <a href="https://github.com/florinelef/but.sae5A01">README</a> du dépot.*

## Description

Le projet est une application web Spring MVC de gestion d'un calendrier de prise de rendez-vous, avec distinction de role user/admin, panel admin,
envoi de mail, gestion d'upload de photo de profil & documents, internationalisation...
Ce projet était à réaliser en équipe de deux, et a duré tout le semestre.

Je vous invite à lancer le projet de votre côté, en suivant la documentation fournie sur le repository.


## Fonctionnalités

### Planning

En se connectant, l'utilisateur a accès au planning général sous forme de calendrier du mois courant. Les jours grisés sont soit déjà passés, soit fermés. En cliquant sur un jour, l'application affiche alors les créneaux disponibles de la journée.


### Comptes

L'utilisateur a accès à une page **Compte**, où il trouvera ses informations personnelles et sa photo de profil (modifiables), la liste des créneaux passés et futurs, avec l'option d'accéder aux documents liés (ex. documents médicaux pour le thème médecin). Il peut aussi annuler ses futurs créneaux.


### Panel Admin

Les utilisateurs qui ont le rôle Administrateur ont accès au **Panel Admin**, qui leur permet de :

- annuler tous les créneaux d'une journée (par exemple en cas d'absence ou d'incident)
- annuler un créneau avec ses réservations liées
- de consulter pour chaque créneau la liste des utilisateurs inscrits ainsi que leur documents
- la possibilité de supprimer la réservation d'un utilisateur

L'annulation d'un créneau envoie automatiquement un mail aux utilisateurs ayant réservé ce dernier.


### Modifier le thème du site

Le thème du site est personnalisable, en suivant cette démarche :

1. Dans **src/main/resources/static**, ajoutez un dossier **nom-de-votre-site** avec :
    - un logo-s.png (petit logo pour la favicon et le header)
    - un logo.png (grand logo utilisé à la page de connexion)

2. Dans **src/main/resources/application.properties**, modifiez :

```
app.title=Nom de votre site
app.favicon.path=/nom-de-votre-site/logo-s.png
app.logo.path=/nom-de-votre-site/logo.png
```


### Modifier les détails des créneaux (horaires, durée...)

Le détail des créneaux est personnalisable, en suivant cette démarche :

Dans **src/main/resources/application.properties**, vous pouvez modifier :

| Modification | Ligne dans le fichier |
| - | - |
| Les jours d'ouverture | **app.open_days=MONDAY,TUESDAY,WEDNESDAY,THURSDAY,FRIDAY,SATURDAY** |
| La capacité (le nombre de personne par créneau) | **app.slot.capacity=4** |
| La durée d'un créneau (en minutes) | **app.slot.duration=60** |
| L'heure du début de journée | **app.day.start_time=08:00** |
| L'heure de fin de journée | **app.day.end_time=17:00** |

## Conclusion

Ce projet avait pour objectif de réaliser une application se rapprochant le plus possible d'une plateforme professionnelle, de comprendre les principes et les fonctionnements de Spring pour ensuite les implémenter dans un projet répondant à un besoin concret. 

Les difficultés rencontrées ont été relatives à la modélisation, l'implémentation de certains éléments plus abstraits (créneaux "virtuels") ou de Spring Security, à la manière de configurer l'application (nom, logo, jours ouverts, durée des créneaux...). Parfois il a simplement s'agit de formatage de date à l'affichage, qui s'est avéré plus compliqué que prévu. 

Nous avons beaucoup appris, sur le fonctionnement de Spring, sur ses avantages, ses limites, sur Maven, sur l'intégration de différentes langues dans une même application, sur l'importance d'un projet correctement structuré pour qu'il soit adapté à l'arborescence Spring. Nous avons acquit énormément de connaissances en web, en back-end, qui nous serviront sans aucun doute dans le futur.

L'application est terminée, mais nous pourrions éventuellement envisager d'ajouter certaines fonctionnalités : plus de langues disponibles, messagerie privée entre administrateur et client, envoi des mails dans la langue choisie par l'utilisateur, et faire en sorte que les jours/créneaux annulés soient persistants.

Ce projet était pour moi très important car il nous a fait faire, from scratch, un site entièrement fonctionnel et professionel dont on peut être fiers, charlie et moi.
Le travail en équipe n'a jamais été aussi important que pour ce projet, où nous avons consacré une semaine sur deux, de septembre à janvier, pour arriver à ce résultat.

> Par Florine Lefebvre et Charlie Darques dans le cadre de la *SAE S5.A.01 - Frameworks Web* (BUT3 Informatique, 2025-2026).
