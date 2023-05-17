let numero = `54,458,105,271`;

function replaceAll (original, text, newText){   
    while ( original !== original.replace(text,newText)){
        original = original.replace(text,newText);
    }
    return original;
}

console.log(replaceAll(numero, `,`, `.`));