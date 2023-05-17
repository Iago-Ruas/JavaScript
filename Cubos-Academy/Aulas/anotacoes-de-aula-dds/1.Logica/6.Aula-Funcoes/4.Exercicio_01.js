const user = {
    nome: `Iago`,
    idade: 27,
    altura: 183,
    profissao: `DEV-FullStack`
}

const user2 = {
    nome: `Lorena`,
    idade: 27,
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

function apresentacao(pessoa){
    if (typeof pessoa === `Object`){
        if (pessoa.idade < 25){
            console.log(`Olá! Meu nome é ${pessoa.nome}, sou um(a) jovem de ${pessoa.idade} anos, tenho ${pessoa.altura} centimetros de altura e sou ${pessoa.profissao}.`);
        } else if (pessoa.idade < 65){
            console.log(`Olá! Meu nome é ${pessoa.nome}, sou um(a) adulto de ${pessoa.idade} anos, tenho ${pessoa.altura} centimetros de altura e sou ${pessoa.profissao}.`);
        } else{
            console.log(`Olá! Meu nome é ${pessoa.nome}, sou um(a) idoso(a) de ${pessoa.idade} anos, tenho ${pessoa.altura} centimetros de altura e sou ${pessoa.profissao}.`);
        }
    } else {
        console.log(`O parametro precisa ser um objeto do tipo:`)
        console.log(`const user = {
        nome: 
        idade: 
        altura:
        profissao:
        }`); 
    }
        
}


// apresentacao(1);


for (let pessoa of pessoas){
    apresentacao(pessoa);
}