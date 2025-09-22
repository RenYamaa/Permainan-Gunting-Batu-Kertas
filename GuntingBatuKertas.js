const prompts = require("prompts");
const readlineSync = require("readline-sync");

let randomizeVal = Math.floor(Math.random() * 3) + 1;
console.log(randomizeVal);
let tebakRPS;
const objek = {
    "🪨" : "✂️", //Batu menang lawan gunting
    "📃" : "🪨", //Kertas Menang lawan batu
    "✂️" : "📃"  //Gunting Menang lawan kertas
};

if (randomizeVal === 1) {
    tebakRPS = "🪨";
} else if (randomizeVal === 2){
    tebakRPS = "📃";
} else if (randomizeVal === 3) {
    tebakRPS = "✂️";
}

(async() => {
    const guesser = await prompts({
        type: 'select',
        name: 'tebakan',
        message: 'Tebak pilihan anda dibawah ini (pakai arrow ya)',
        choices: [
            {title: '🪨', value: '🪨'},
            {title: '📃', value: '📃'},
            {title: '✂️', value: '✂️'}
        ]
    });

    if(guesser.tebakan === tebakRPS){
        console.log("Tebakan anda sama! Seri!");
    } else if (objek[guesser.tebakan] === tebakRPS){
        console.log("Anda Menang! Computer menggunakan " + tebakRPS + "  !");
    } else {
        console.log("Anda Kalah! Computer menggunakan " + tebakRPS + '  !');
    }
})();



