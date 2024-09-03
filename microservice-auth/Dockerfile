FROM node:18

WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

#Construire l'appliccation 
RUN npm run build 

# Copier le reste des fichiers du projet
COPY . .

# Lancer l'application
CMD ["node", "index.js"]
