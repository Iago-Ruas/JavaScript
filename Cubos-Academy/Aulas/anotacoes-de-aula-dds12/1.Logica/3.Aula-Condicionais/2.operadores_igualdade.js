const ehIgual       = 18 == 18;     // >true
console.log(ehIgual);  

const ehDiferente   = 18 != 18;     // >false
console.log(ehDiferente);

let ehIdentico      = 18 === 18     // >true
console.log(ehIdentico);

ehIdentico          = 18 === `18`   // >false
console.log(ehIdentico)

let naoIdentico     = 19 !== 19     // >false
console.log(naoIdentico);

naoIdentico         = 19 !== `19`   // >true
console.log(naoIdentico);