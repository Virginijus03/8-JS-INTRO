/*

INICIAVIMO BUDAS (kintamuju, keiciamumas ir scope):

1)const - nekeiciama reiksme
2)let - keiciama reiksme
3)var - keiciama reiksme


KINTAMUJU TIPAI:

1)number - skaiciai
2)string - tekstas
3)boolean - logine reiksme
4)array - sarasa, masyvas, matrica
5)object - objektas
6)nul - reiksme kuri neegzistuoja, bet yra(savotiskas pleaceholderis)
7)undefined - neapibrezta

map
set

*/

//pavyzdziai
const metai = 2021;
console.log(metai);

const vardas = "vardenis";
console.log(vardas);

const arSninga = false;
console.log("Ar sninga:", arSninga);

const arTeigiama = true;
console.log("Ar teigiama", arTeigiama);

const pazymiai = [10, 5, 8, 9, 15];
console.log(pazymiai);

const zodynas = ["labas", "rytas","sakau","tau"]
console.log(zodynas);


// objetas: programavimas:
const petras = {
    vardas: "Petras",
    amzius: 99,
    gyvenamojiVieta: "Gatve g. 1-3, Miestas",
    vaikai: [
        {
            vardas: "Onute",
            amzius: 67
        }
    ]

}; 
console.log(petras); 

