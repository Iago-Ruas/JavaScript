let lista          = [2, 3, 4, 2, 5, 6, 2, 5];
let alvo           = 10;
for (let i = 0; i < lista.length; i++){
    let numeroA = lista[i];

    for (let j = i + 1; j < lista.length; j++){
        let numeroB = lista[j];

        if ((numeroA + numeroB) == alvo){
            console.log(`[${numeroA},${numeroB}]`);
        }
    }
}