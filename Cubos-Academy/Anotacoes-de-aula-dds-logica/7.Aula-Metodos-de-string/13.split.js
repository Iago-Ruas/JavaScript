const nomeCompleto = `Iago de Oliveira Ruas`;
const array = nomeCompleto.split(` `);
let nomeDoMeio = array[1];

if (array[1] === `de`){
    nomeDoMeio = array[2];
}


console.log(nomeDoMeio);