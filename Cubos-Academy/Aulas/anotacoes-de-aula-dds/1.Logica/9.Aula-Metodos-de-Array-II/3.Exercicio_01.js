const usuarios = [
    { nome  : `Iago`, idade : 27},
    { nome  : `Lorena`, idade : 27},
    { nome  : `Mirtilo`, idade : 15},
    { nome  : `Beatriz`, idade : 24},
    { nome  : `Felipe`, idade : 80}
];

const validaIdade = (arrayObj) =>{
    const todosMaioresDeIdade = arrayObj.every((objeto)=>{
        return objeto.idade > 17;
    })
     if (todosMaioresDeIdade){
        console.log(`Festa liberada!`);
    } else {
        console.log(`Possui menor de idade.`);
    }

}

validaIdade(usuarios);