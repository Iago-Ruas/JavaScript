const palavra       = `araraquara`;
const letraAlvo     = `a`;
let contador        = 0;

for (let letra of palavra){
    if (letra === letraAlvo){
        contador++;
    }
}

console.log(`Foram encontradas ${contador} letras iguais à letra "${letraAlvo}".`)
