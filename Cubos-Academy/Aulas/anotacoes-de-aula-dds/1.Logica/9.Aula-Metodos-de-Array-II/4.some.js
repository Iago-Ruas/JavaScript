const nomes = ['José', 'Pedro', 'Maria', 'João', 'Ana', 'Bárbara', 'Joana'];

const resultado = nomes.some((nome) =>{
    return nome === `João`
})

console.log(resultado);