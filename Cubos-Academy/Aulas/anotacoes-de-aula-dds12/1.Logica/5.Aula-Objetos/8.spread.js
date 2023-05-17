// spread ...

const pessoa = {
    nome: `Iago`,
    idade: 27,
    cidade: `Salvador`,
    profissao: `DEV`
}

const endereco = {
    rua: `Aqui`,
    numero: 42,
    bairro: `Madureira`
}

const objFundido = {
    ... pessoa,
    ... endereco
}

console.log(objFundido);