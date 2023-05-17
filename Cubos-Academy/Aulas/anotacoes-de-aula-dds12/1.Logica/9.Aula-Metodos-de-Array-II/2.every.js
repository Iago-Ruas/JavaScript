const frutas = [`Abacaxi`, `Manga`, `Melancia`]

const resultado = frutas.every((elementoAtual)=>{
    return elementoAtual !== `Banana`;
}) 

console.log(resultado);