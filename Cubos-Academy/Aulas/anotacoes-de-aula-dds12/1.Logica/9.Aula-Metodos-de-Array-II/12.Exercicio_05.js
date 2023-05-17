const produtos = [
    {nome: `Arroz`, precoEmCentavos: 500},
    {nome: `Carne`, precoEmCentavos: 3200},
    {nome: `Biscoito`, precoEmCentavos: 450},
    {nome: `Banana`, precoEmCentavos: 320},
]

const aplicaDezPorcento = (array) =>{
    return array.map((item) => {
        return {
            nome: item.nome,
            precoEmCentavos: item.precoEmCentavos,
            precoComDescontoEmCentavos: item.precoEmCentavos * 0.9
        }
    })
}

const arrayDezPorcento = aplicaDezPorcento(produtos);

console.log(arrayDezPorcento);