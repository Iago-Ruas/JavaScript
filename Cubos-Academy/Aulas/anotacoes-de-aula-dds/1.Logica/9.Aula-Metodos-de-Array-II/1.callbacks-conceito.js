// const imprimirNome = (nome) => {
//     console.log(nome);
// }

// imprimirNome(`Iago`);
// const intervalo = setInterval(imprimirIago, 2000)

// function imprimirIago(){
//     console.log(`Iago Ruas`);
//     clearInterval(intervalo);
// }

// imprimirIago();

// setTimeout(imprimirIago, 2000);
let numero = 10;
const contador = setInterval(()=>{
    console.log(numero);
    numero--
    if (numero === 0){
        console.log(`BOOOM`);
        clearInterval(contador);
    }
}, 500);
