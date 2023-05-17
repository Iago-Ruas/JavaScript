const input = `cugbgbyos
cubos`;

const linhas = input.trim().split(`\n`);

const senhaDigitada = linhas.splice(0,1).toString();
const senha = linhas.splice(0,1).toString();
const senhaParaMatch = new RegExp(`[${senha}]`, `g`);
const arrayMatch = senhaDigitada.match(senhaParaMatch);

console.log(senhaDigitada);
console.log(senha);
console.log(senha.length);
console.log(senhaParaMatch);
console.log(arrayMatch);
console.log(arrayMatch.length);