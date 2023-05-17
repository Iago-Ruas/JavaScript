function verificarMaiorIdade(idade){
    if (idade >= 18){
        return true;
    } else{
        return false;
    }
}

const valorDeRetorno = verificarMaiorIdade(155);

console.log(valorDeRetorno);