const aguaMineral = {
    nome            : `Água Mineral`,
    precoUnitEmCentavos : 736,
    quantidade      : 1
 }

const cerveja = {
    nome            : `Heiniken Logneck     `,
    precoUnitEmCentavos : 1499,
    quantidade      : 4
 }

 const espetinhoSimples = {
    nome            : `Espetinho Simples    `,
    precoUnitEmCentavos : 859,
    quantidade      : 3
 }

 const produtosConsumidos = [aguaMineral, cerveja, espetinhoSimples];
 let precoTotal = 0;

 const cartaoConsumo = {
    nome                : `Iago Ruas`,
    idade               : 27,
    produtosConsumidos,
    precoTotal
 }

for (let item of produtosConsumidos){
    precoTotal += (item.quantidade * item.precoUnitEmCentavos);
}


console.log(`Olá ${cartaoConsumo.nome}, você deve pagar um total de R$ ${(1.1*(precoTotal/100)).toFixed(2)} com os 10%.`);