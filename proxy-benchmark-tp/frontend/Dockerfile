
# Utiliser l'image officielle Nginx
FROM nginx:alpine

# Copier notre fichier HTML et CSS dans le conteneur
COPY attack.html /usr/share/nginx/html/index.html
COPY style.css /usr/share/nginx/html/style.css

# Exposer le port 80
EXPOSE 80

# Démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]