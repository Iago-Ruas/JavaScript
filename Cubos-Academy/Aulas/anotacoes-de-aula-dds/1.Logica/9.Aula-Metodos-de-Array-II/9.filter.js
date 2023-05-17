const carros = [
    {nome: `Hilux` ,ano: `2022` ,marca: `Toyota` ,cor: `Prata`}, 
    {nome: `Yaris Sedan`,ano: `2023` ,marca: `Toyota`,cor: `Preto` }, 
    {nome: `Cruze`,ano: `2021`,marca: `Chevrolet`,cor: `Branco`}, 
    {nome: `Trail Blazer`,ano: `2023`,marca: `Chevrolet`,cor: `Azul`},
    {nome: `F-150 Lariat`,ano: `2023`,marca: `Ford`,cor: `Preto Fosco`},
    {nome: `Ranger CLS 4x4`,ano: `2023`,marca: `Ford`,cor: `Vermelho`},
]


const separaItemPorMarca = (array, marca) =>{
    return array.filter((item) => item.marca === marca);
}

const carrosMarcaToyota = separaItemPorMarca(carros, `Toyota`);
const carrosMarcaChevrolet = separaItemPorMarca(carros, `Chevrolet`);
const carrosMarcaFord = separaItemPorMarca(carros, `Ford`);


console.log(`Os carros da marca Toyota, no Array dado, são: `, carrosMarcaToyota);
console.log(`-------------------------------------------`);
console.log(`Os carros da marca Chevrolet, no Array dado, são: `, carrosMarcaChevrolet);
console.log(`-------------------------------------------`);
console.log(`Os carros da marca Ford, no Array dado, são: `, carrosMarcaFord);
console.log(`-------------------------------------------`);
console.log(carros);