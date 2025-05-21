# Utiliser l'image officielle Node.js
FROM node:20

# Créer un répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN yarn install

# Copier le code source
COPY . .

# Construire l'application NestJS
RUN yarn run build

# Exposer le port de l'application
EXPOSE 3002

# Démarrer l'application
CMD ["yarn", "run", "start:prod"]
