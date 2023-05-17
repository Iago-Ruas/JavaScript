function ifNumToStr (a){
    if (typeof a === `number`){
        a = String(a);
        return a;
    } else if(typeof a === `string`){
        return a;
    } else {
        return `ERRO`;
    }
}

function imprimirData(dia, mes, ano){
    let data;
    data = `${ifNumToStr(dia).padStart(2,`0`)}/${ifNumToStr(mes).padStart(2,`0`)}/${ifNumToStr(ano).padStart(4,`19`)}`;
    return data;
}

console.log(imprimirData(1, 1, 1995));