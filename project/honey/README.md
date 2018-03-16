Projet ReactJs permettant de suivre des commandes de pots de miel

## Architecture

- 1 Serveur NodeJS permettant 
  - de mettre à disposition les données au front-end
  - de rerouter tous les appels au front à l'application React 
  - de logguer tous les évènements http en console
- 1 application React 16

## Exécution en tant que dev

- Exécution du serveur Node : npm run start:server
- Exécution de l'application React : npm start

## TODO List

- Bouchonner l'exécution des boutons
- Créer une fiche de saisie
- Envoi d'une commande au serveurNode
- Actualisation de la liste après la saisie d'une commande
- Gestion des états de la commandes
 - Affichage de pictos dans la liste
- Gérer une suppression logique de la commande
- Faire une V2 de l'expérience utilisateur avec DnD switchable
