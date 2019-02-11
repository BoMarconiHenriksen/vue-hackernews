# Getting Started

I package.json i scripts feldtet tilføj: "test": "npm run lint"  

### Run tests
npm t  
npm it  

Build for production
npm run build  

### Jest - Write a sanity test - To test that its set up corectly
En test, der altid passer medmindre test suiten er sat forkert op.  

#### Install Jest
´´´
npm install --save-dev jest  
´´´
#### Adskil de forskellige typer af tests
Tilføj følgende kode til scripts i package.json.  
´´´
"test:unit": "jest --no-cache"" //  --no-cache" tilføjes hvis du kører i windows.  
´´´
I scripts i package.json opdater test til både at køre linting og unit tests.  
´´´
"test": "npm run lint && npm run test:unit"
´´´
##### Kør unit tests
´´´
npm run test:unit
´´´
##### Globs
Jest bruger Globs(er et pattern) til at matche filer.  
##### .spec.js
spec står for specification, da unit tests er specification for, hvordan din kode skal køre.  
Testfilen for Item.vue bliver Item.spec.js.  
##### Lav et directory der hedder __tests__ i den folder med de komponenter du vil teste.  
Tilføj testfilen: Item.spec.js i __tests__ folderen.  



