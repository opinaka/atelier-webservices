// Importer le module HTTP de Node.js
const http = require('http');

// Créer le serveur
const server = http.createServer((req, res) => {
  // Autoriser les requêtes depuis n'importe quel domaine (CORS)
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  // Envoyer la réponse
  res.end('OK');
});

// Démarrer le serveur sur le port 3000
server.listen(3000, () => {
  console.log('✅ Serveur démarré sur le port 3000');
});