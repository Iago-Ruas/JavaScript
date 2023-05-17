const frase = `Eu moro em Salvador.`

function inverterString(texto){
    let arrayDoTexto = texto.split(``);
    arrayDoTexto.reverse();
    let textoModificado = ``;
    for (let letra of arrayDoTexto){
        textoModificado += letra;
    }
    console.log(textoModificado);
}

inverterString(frase);