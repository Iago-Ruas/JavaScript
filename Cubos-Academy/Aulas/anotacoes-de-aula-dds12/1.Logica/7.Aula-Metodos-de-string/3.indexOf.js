// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf

const email = `email@valido.com`;

if (email.includes(`@`)){
    if (email.includes(`.`, email.indexOf(`@`))){
        console.log(`Email atende requisição.`);
    } else {
    console.log(`Email não atende requisição.`);
    }
} else {
    console.log(`Email não atende requisição.`);
}