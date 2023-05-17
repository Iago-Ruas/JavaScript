// Desestruturação de objetos - Desructuring

const pessoa = {
    nome     : `Iago`,
    idade    : 27,
    altura   : 1.83,
    temCnh   : true,
}

const {nome, idade, ... outros} = pessoa;

console.log(nome, idade);
console.log(outros);
