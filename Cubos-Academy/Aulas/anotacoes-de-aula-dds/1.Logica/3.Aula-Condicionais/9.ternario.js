const saldo     = 10;

const unidade   = (saldo === 1 ? `real` : `reais`); // x = (teste ? if true : if false);

console.log(`Você te ${saldo} ${unidade}.`);