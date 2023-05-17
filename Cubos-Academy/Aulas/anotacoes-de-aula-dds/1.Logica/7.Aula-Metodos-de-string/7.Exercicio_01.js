const numero = 54.58;
let numeroSTR;

if (typeof numero === `number`){
    numeroSTR = numero.toString().replace(`.`, `,`);
    console.log(numeroSTR);
} else {
    numeroSTR = numero.replace(`.`, `,`);
    console.log(numeroSTR);
}