function rankDoJogador(vitorias, derotas){
    rank = vitorias - derotas

    return  rank;
}

let VitoriasDoJogador = rankDoJogador(54,2);

if (VitoriasDoJogador <= 10){
   console.log(`O Herói tem de saldo de ${VitoriasDoJogador} e está no nível de Ferro`) 
}else if (VitoriasDoJogador >= 11 && VitoriasDoJogador <= 20){
    console.log(`O Herói tem de saldo de ${VitoriasDoJogador} e está no nível de Bronze`) 
}else if (VitoriasDoJogador >= 21 && VitoriasDoJogador <= 50){
    console.log(`O Herói tem de saldo de ${VitoriasDoJogador} e está no nível de Prata`) 
}else if (VitoriasDoJogador >= 51 && VitoriasDoJogador <= 80){
    console.log(`O Herói tem de saldo de ${VitoriasDoJogador} e está no nível de Ouro`) 
}else if (VitoriasDoJogador >= 81 && VitoriasDoJogador <= 90){
    console.log(`O Herói tem de saldo de ${VitoriasDoJogador} e está no nível de Diamante`) 
}else if (VitoriasDoJogador >= 91 && VitoriasDoJogador <= 100){
    console.log(`O Herói tem de saldo de ${VitoriasDoJogador} e está no nível de Lendário`) 
}else if (VitoriasDoJogador >= 101){
    console.log(`O Herói tem de saldo de ${VitoriasDoJogador} e está no nível de Imortal`) 
}else {
    console.log(`O Herói sem rank`) 
 }
 
 
 
 
 
