// Creare un array di oggetti di squadre di calcio.
//  Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.


// genero l'array con proprietà punti e falli settati a 0 
let teams=[
    {
        name:"Juventus",
        point: 0,
        foul: 0,
    },
    {
        name:"Roma",
        point: 0,
        foul: 0,
    },
    {
        name:"Inter",
        point: 0,
        foul: 0,
    }
]

//creo la funzione per generare numeri random da sostituire alle proprietà

function randomNumber(){
    teams.forEach(teams =>{
    teams.point= Math.floor(Math.random() * 51);
    teams.foul=Math.floor(Math.random() * 51)
    })
}

randomNumber();

console.log(teams)

//funzione per creare nuova array con solo proprietà nome e falli subiti

let teamsNameFoul = teams.map(teams => {
    return{
        name: teams.name,
        foul: teams.foul,
    }
})

console.log(teamsNameFoul)

