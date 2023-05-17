const usuarios = [
    { nome  : `Iago`, idade : 27},
    { nome  : `Lorena`, idade : 27},
    { nome  : `Mirtilo`, idade : 15},
    { nome  : `Beatriz`, idade : 24},
    { nome  : `Felipe`, idade : 80}
];

const resultado = usuarios.find((usuario) =>  usuario.nome === `Lorena`); // retorna o obj.

console.log(resultado);