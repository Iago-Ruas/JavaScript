
function faixaEtaria(idade){
    if (idade <= 21){
        return `Jovem`;
    } else if (idade < 65){
        return `Adulto(a)`
    } else{
        return `Idoso(a)`;
    }
} 
function apresentacao(pessoa){
    console.log(`Olá! Meu nome é ${pessoa.nome}, sou um(a) ${faixaEtaria(pessoa.idade)} de ${pessoa.idade} anos, tenho ${pessoa.altura} centimetros de altura e sou ${pessoa.profissao}.`);
}

const user = {
    nome: `Iago`,
    idade: 27,
    altura: 183,
    profissao: `DEV-FullStack`
}
const user2 = {
    nome: `Lorena`,
    idade: 80,
    altura: 169,
    profissao: `UX-Design`
}
const user3 = {
    nome: `Mirtilo`,
    idade: 7,
    altura: 100,
    profissao: `Preguiçosa`
}
const pessoas = [user, user2, user3];

for (let pessoa of pessoas){
    apresentacao(pessoa);
}