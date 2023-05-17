let     valorSemDesconto    = 1_00;
let     valorComDesconto;
let     valorComJuros;
let     fatorDeJuros;
const   qntDeParcelas       = 11;
const   taxaDeJuros         = 1;
const   unidade             = (valorComDesconto === 1 || valorSemDesconto === 1 ? `real` : `reais`);

if (qntDeParcelas == 1){
    console.log(`Não vai parcelar.`);

    valorComDesconto = valorSemDesconto * 0.9;

    console.log(`Você ganhou 10% de desconto e pagará o valor de ${valorComDesconto.toFixed(2)} ${unidade}.`)

} else if (qntDeParcelas <= 6){
    console.log(`Vai parcelar?`);

    console.log(`Pode pagar em ${qntDeParcelas}x de ${(valorSemDesconto/qntDeParcelas).toFixed(2)} ${unidade} sem juros.`);
    console.log(`Pagará um valor final de ${valorSemDesconto.toFixed(2)}.`);

} else if( qntDeParcelas >= 7 && qntDeParcelas <=12){

    fatorDeJuros = 1 + (taxaDeJuros / 100);
    valorComJuros = valorSemDesconto * (Math.pow(fatorDeJuros,qntDeParcelas));
    
    console.log(`Pode pagar em ${qntDeParcelas}x de ${(valorComJuros/qntDeParcelas).toFixed(2)} ${unidade} com juros.`);
    console.log(`Pagará um valor final de ${valorComJuros.toFixed(2)}.`);

} else {
    
    console.log(`Quantidade de parcelas não aprovada.`);

}