const palavra   = `Alemana`;
const letraAlvo = `h`
let encontrado  = false;

for (let letra of palavra){
    if (letra === letraAlvo){
        console.log(`Tem a letra ${letra}.`)
        encontrado = true;
        break;
    }
}

if (!encontrado){
    console.log(`Náo tem a letra ${letraAlvo}.`)
}