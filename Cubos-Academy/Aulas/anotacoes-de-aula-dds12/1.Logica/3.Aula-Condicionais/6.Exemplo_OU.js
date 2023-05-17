const temIngresso   = true;
const censura       = 16;
const idade         = 14;
const estaComOsPais = false

// ter ingresso
// ter idade maior ou igual a censura OU estar com os pais

if (temIngresso){
    if ( idade >= censura || estaComOsPais){
        console.log(`Pode entrar.`);
    }else{
        console.log(`Esta barrada.`);
    }
} else {
    console.log(`Está barrada.`);
}