function faixaEtaria(idade){
    if (idade <= 21){
        return `Jovem`;
    } else if (idade < 65){
        return `Adulto(a)`
    } else{
        return `Idoso(a)`;
    }
} 

console.log(faixaEtaria(15));
console.log(faixaEtaria(45));
console.log(faixaEtaria(75));