# Introduktion Testing Vue og Vue Core Concepts
At teste er at tjekke at en applikation opføres sig rigtigt.  

Regression testing - Test af ældre features.  
Automated testing - Brug programmer til at teste.  
### End to end tests
I en frontend er end to end test en test, hvor en browser automatisk
tester om en frontend virker ud fra en brugers oplevelse.  

En test, der åbner en browser, hvor testen kan trykke på forskellige funktionaliteter i browseren.  
10% af dine tests.  

´´´
function testCalculator(browser) {
    browser     
        .url('http://localhost:8080')          // 1     
        .click('#button-1')                    // 2     
        .click('#button-plus')     
        .click('#button-1')     
        .click('#button-equal')     
        .assert.containsText('#result', '2')   // 3     
        .end(); 
}
´´´
1. Naviger browseren til siden.  
2. Trykker på lommeregneren.  
3. Tjekker at resultatet er rigtigt med assert.  

End to end test er langsomme.  
Debugging er svært. Skal manuelt gå igennem for at reproducere fejlen. Fejler den på din ci server og ikke på din dev server er det svært at finde fejlen.  
Kan give falske fejl, hvis koden er for lang tid om at blive udført eller et api er midlertidt nede.  

End to end test er gode til at automatisere manuelle test.  
De kan køres mod en live applikation eller når ny kode merges ind i master branchen.  

Det kan være godt at køre end to end test i en docker container for at undgå fejl pga forskellige maskiner.  

### Unit Tests
Unit tests er, når du tester de mindste dele(units) af en applikation typisk funktioner og i Vue komponenter.  

Unit test er funktioner, der kalder funktioner i din kode, og tjekker(asert) at din kode opfører sig rigtigt.  
60% af dine tests.  

´´´
// sum.js 
export default function sum(a, b) {              // 1   
    return a + b 
} 

// sum.spec.js 
import sum  from '../sum'                        // 2 
function testSum() {   
    if (sum(1,1) !== 2) {                        // 3     
    throw new Error('sum(1,1) did not return 2')   
    } 
} 

testSum()                                       // 4
´´´
1. Funktionen, der skal testes.  
2. Importer sum funktionen ind i test filen.  
3. Kaster en error, hvis summen ikke er 2.  
4. Kalder test funktionen.  

Unit tests gør det lettere at finde ud af, hvor der er fejl i kode.  
De er hurtige så du kan køre dem, hver gang du ændrer din kode.  
De er dokumenterende da de viser, hvordan en funktion virker.  

Unit tests gør det svært at refakturer din kode.  
Unit test tester kun små dele af koden, og ikke om koden virker når den sættes sammen i størrer dele. Derfor er det godt at kombinere med end to end tests.  

### Snapshot testing
Tager et billede af din kørende applikation og sammenligner det med et billede af en tidligere version.
Er billederne forskellige så kommer der en fejl.  

Sikre at en applikation render korrekt efter ændringer i koden.  

Vi kommer til at se på Jest testing frameworket, der kan sammenligne DOM output fra komponenter.  
30% af dine tests.  







