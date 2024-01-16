// Estrura feita em if

var NomeDoHeroi = "SenhorBruno";
var XpDoHeroi = 5000

if (XpDoHeroi <= 1000){
    console.log(`O Herói de nome ${NomeDoHeroi} está no nível de Ferro`)
}else if (XpDoHeroi >= 1001 && XpDoHeroi <= 2000){
    console.log(`O Herói de nome ${NomeDoHeroi} está no nível de Bronze`)
}else if (XpDoHeroi >= 2001 && XpDoHeroi <= 5000){
    console.log(`O Herói de nome ${NomeDoHeroi} está no nível de Prata`)
}else if (XpDoHeroi >= 5001 && XpDoHeroi <= 7000){
    console.log(`O Herói de nome ${NomeDoHeroi} está no nível de Ouro`)
}else if (XpDoHeroi >= 7001 && XpDoHeroi <= 8000){
    console.log(`O Herói de nome ${NomeDoHeroi} está no nível de Platina`)
}else if (XpDoHeroi >= 8001 && XpDoHeroi <= 9000){
    console.log(`O Herói de nome ${NomeDoHeroi} está no nível de Ascendente`)
}else if (XpDoHeroi >= 9001 && XpDoHeroi <= 10000){
    console.log(`O Herói de nome ${NomeDoHeroi} está no nível de Imortal`)
}else if (XpDoHeroi >= 10001){
    console.log(`O Herói de nome ${NomeDoHeroi} está no nível de Radiante`)
}
else{
    console.log("nenhum Herói em batalha")
}


