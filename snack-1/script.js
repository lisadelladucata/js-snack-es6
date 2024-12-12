// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.


//creo l'array con proprietà nome e peso
let bike = [
    {
        name:"Specialized Allez E5",
        weight: 700,
    },
    {
        name:"Megamo Jakar 20",
        weight: 600
    },
    {
        name:"Scott Addict 30",
        weight: 550
    }
]

let lightBike = bike[0];
//creo funzione
for( let i = 0; i < bike.length; i++){
    if(bike[i].weight < lightBike.weight){
        lightBike=bike[i]
    } 
}
console.log(lightBike)

