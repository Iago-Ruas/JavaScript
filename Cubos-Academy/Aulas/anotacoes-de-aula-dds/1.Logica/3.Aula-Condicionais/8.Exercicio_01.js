const   pago_A_Vista        = false;
let     valorSemDesconto    = 1_500;
let     valorComDesconto    = 0
const   unidade             = (valorComDesconto === 1 || valorSemDesconto === 1 ? `real` : `reais`);

if (pago_A_Vista){
    console.log(`Não vai parcelar.`);

    valorComDesconto = valorSemDesconto * 0.9;

    console.log(`Você ganhou 10% de desconto e pagará o valor de ${valorComDesconto} ${unidade}.`)

} else {
    console.log(`Vai parcelar?`);

    console.log(`Pode pagar em 2x de ${valorSemDesconto/2} ${unidade} sem juros.`);
    console.log(`Pode pagar em 3x de ${valorSemDesconto/3} ${unidade} sem juros.`);
    console.log(`Pode pagar em 4x de ${valorSemDesconto/4} ${unidade} sem juros.`);
    console.log(`Pode pagar em 5x de ${valorSemDesconto/5} ${unidade} sem juros.`);
    console.log(`Pode pagar em 6x de ${valorSemDesconto/6} ${unidade} sem juros.`);

}