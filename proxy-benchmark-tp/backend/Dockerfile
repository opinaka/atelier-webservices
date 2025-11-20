# Utiliser Node.js version 20 Alpine (légère)
FROM node:20-alpine

# Définir le répertoire de travail
WORKDIR /app

# Copier le fichier server.js dans le conteneur
COPY server.js .

# Exposer le port 3000
EXPOSE 3000

# Commande par défaut pour démarrer le serveur
CMD ["node", "server.js"]