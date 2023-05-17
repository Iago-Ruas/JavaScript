const lista = [15,24,687,18,167,3547,186,354,1,68,21,6987]
let min = Infinity;
let max = -Infinity;

for (let numero of lista){
    if (numero < min){
        min = numero;
    }
}
for (let numero of lista){
    if (numero > min){
        max = numero;
    }
}

console.log(min);
console.log(max);

const pontoA = [0,0], pontoB = [9,12]

function calculaDist(pontoA, pontoB){
    const distX = pontoA[0] - pontoB[0];
    const distY = pontoA[1] - pontoB[1];
    const somaDosQuadrados = Math.pow(distX,2) + Math.pow(distY,2)
    const distancia = Math.sqrt(somaDosQuadrados);
    return distancia;
}

const distancia = calculaDist(pontoA,pontoB);

console.log(distancia);