const usuarios = [
    {nome: `Iago`, sobrenome: `Ruas`, idade: 27},
    {nome: `Lorena`,sobrenome: `Santiago`,idade: 27},
    {nome: `Beatriz`,sobrenome: `Ruas`,idade: 24}
]

const corrigeNome = (array) =>{
    return array.map((usuario) =>  {
        return{
            nomeCompleto: `${usuario.nome} ${usuario.sobrenome}`, 
            idade: usuario.idade
        } 
    })
}

console.log(usuarios);
console.log(corrigeNome(usuarios));
