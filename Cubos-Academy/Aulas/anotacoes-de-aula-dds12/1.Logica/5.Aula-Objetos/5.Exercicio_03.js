const aguaMineral = {
    nome            : `Água Mineral`,
    precoUnitEmCentavos : 200,
    quantidade      : 1
 }

const cerveja = {
    nome            : `Heiniken Logneck     `,
    precoUnitEmCentavos : 1400,
    quantidade      : 2
 }

 const espetinhoSimples = {
    nome            : `Espetinho Simples    `,
    precoUnitEmCentavos : 800,
    quantidade      : 1
 }

 const cartaoConsumo = {
    nome                : `Iago Ruas`,
    idade               : 27,
    produtosConsumidos  : [aguaMineral, cerveja, espetinhoSimples]
 }
 console.log(`Nome do Cliente: ${cartaoConsumo.nome}`);
 console.log(`Idade do Cliente: ${cartaoConsumo.idade}`);
 cartaoConsumo.idade = `27 anos 5 meses e 4 dias`
 console.log(`Idade completa do Cliente: ${cartaoConsumo.idade}`);
 console.log(`Primeiro item consumido: ${cartaoConsumo.produtosConsumidos[0].nome}`);
 console.log(`Preço unitário do último item consumido: R$ ${cartaoConsumo.produtosConsumidos[cartaoConsumo.produtosConsumidos.length - 1].precoUnitEmCentavos / 100}`);