// CONSTROI O USUARIO (NOME, IDADE E O TIPO)
class tipoUsuario{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
   guerreiro(){
    this.tipo === "guerreiro";
    console.log(`o ${this.tipo} atacou usando espada`)
   }

   mago(){
    this.tipo === "mago";
    console.log(`o ${this.tipo} atacou usando magia`)
   }

   monge(){
    this.tipo === "monge";
    console.log(`o ${this.tipo} atacou usando artes maciais`)
   }

   ninja(){
    this.tipo === "ninja";
    console.log(`o ${this.tipo} atacou usando shuriken`)
   }

   obterClasse(){
    return this.tipo;
   }
}

// DEFINE O NOME, IDADE E O TIPO
const tipoGuerreiro = new tipoUsuario("Bruno", 26, "Guerreiro");
const tipoNinja = new tipoUsuario("jonas", 21, "Ninja");
const tipoMago = new tipoUsuario("Romeu", 32, "Mago");
const tipoMonge = new tipoUsuario("Maria", 18, "Monge");

// RECEBE A CLASSE DO USUAIO
const minhaClasse = tipoGuerreiro.obterClasse();


// CRIA UMA REPETIÇÃO PARA CADA TIPO DO USUARIO E DA A SAIDA DE SUA ESPECIALIDADE
switch(minhaClasse){
    case "Guerreiro":
        tipoGuerreiro.guerreiro();
        console.log('-------------------------------------------')
    
    case "Ninja":
        tipoNinja.ninja();
        console.log('-------------------------------------------')

    case "Mago":
        tipoMago.mago();
        console.log('-------------------------------------------')

    case "Monge":
        tipoMonge.monge();
        console.log('-------------------------------------------')
}   

