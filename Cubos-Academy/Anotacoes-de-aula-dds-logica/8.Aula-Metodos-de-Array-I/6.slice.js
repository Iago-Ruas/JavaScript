const dados = [1,2,3,4,5,6,7,8,9,10.4583,6844,8516,81,687764,87546,8797,17,6546,7546,9];

function filtrar80Centrais(dados){
    const startIndex = Math.round(dados.length*0.11);
    const endIndex   = Math.round(dados.length*0.91);
    return dados.slice(startIndex, endIndex);
}

console.log(filtrar80Centrais(dados));