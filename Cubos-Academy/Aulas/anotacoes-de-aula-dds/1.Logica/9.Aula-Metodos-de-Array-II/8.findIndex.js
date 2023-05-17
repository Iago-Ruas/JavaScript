const carros = [
    {nome: `Hilux` ,ano: `2022` ,marca: `Toyota` ,cor: `Prata`}, 
    {nome: `Yaris Sedan`,ano: `2023` ,marca: `Toyota`,cor: `Preto` }, 
    {nome: `Cruze`,ano: `2021`,marca: `Chevrolet`,cor: `Branco`}, 
    {nome: `Trail Blazer`,ano: `2023`,marca: `Chevrolet`,cor: `Azul`},
    {nome: `F-150 Lariat`,ano: `2023`,marca: `Ford`,cor: `Preto Fosco`},
    {nome: `Ranger CLS 4x4`,ano: `2023`,marca: `Ford`,cor: `Vermelho`},
]

const encontraIndex = (array, nome) =>{
    return array.findIndex((carro) => carro.nome === nome);
}

console.log(encontraIndex(carros, `Chevy`));