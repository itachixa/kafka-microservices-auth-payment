# Communication entre deux micro service en utilisant docker compose
<br/>

<div style="display: flex; justify-content: space-between;">
  <img src="img/img.png" alt="Image 1" width="100%" />
<div/>
<br/>

- **Description**:<br/> Projet de liaison de deux mucroservice en utilisant docker 
ici les micros services sont representés par les dosiers :
-microservice-auth: pour un service d'authentificattion 
-microservice-payement :pour un microservce de payement 
ainsi j'ai fait la liason de ces 2 microservice en utilisant les brockeur et les group de dockeur 

- **Pres requis**:<br/>
-dockerur ou kafka apache de ubuntu<br/>
-composer<br/>
-npm<br/>

- **commande pour lancer le projet**:<br/>
```
docker compose up -d
cd microservice-auth
node index.js
cd ..
cd microservice-payement
node index.js
```