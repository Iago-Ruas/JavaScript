const pessoa = {
    nome     : `Lorena`,
    idade    : 27,
    altura   : 1.72,
    temCnh   : true,
    apelidos : [`Morena`, `Santiago`, `Lorem Ipsum`]
}
// meu códiogo
if (pessoa.temCnh){
    console.log(`${pessoa.nome} tem ${pessoa.idade}, ${pessoa.altura} metros de altura, possui CNH e os seguntes apelidos:`);
    for(let nome of pessoa.apelidos){
        console.log(`- ${nome}`);
    }
} else {
    console.log(`${pessoa.nome} tem ${pessoa.idade}, ${pessoa.altura} metros de altura, não possui CNH e os seguntes apelidos:`);
    for(let nome of pessoa.apelidos){
        console.log(`- ${nome}`);
    }
}

// código da Academy
let textoCNH;

if(pessoa.temCnh){
    textoCNH = `tem CNH`
} else {
    textoCNH = `não tem CNH`
}

console.log(`${pessoa.nome} tem ${pessoa.idade}, ${pessoa.altura} metros de altura, ${textoCNH} e os seguntes apelidos:`);
for(let nome of pessoa.apelidos){
    console.log(`- ${nome}`);
}



// código da Academy usando ternário
textoCNH = temCnh ? `tem CNH` : `não tem CNH`

console.log(`${pessoa.nome} tem ${pessoa.idade}, ${pessoa.altura} metros de altura, ${textoCNH} e os seguntes apelidos:`);
for(let nome of pessoa.apelidos){
    console.log(`- ${nome}`);
}
