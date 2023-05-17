const nomesDeArquivos = [`a.png`, `b.jpeg`, `c.mp3`, `d.bat`, `e.mp4`];

// Código do Gido
// const antivirus = (arrayArquivos) => {
//     const resultado = arrayArquivos.some((arquivo)=>{
//         const existeExtensao = arquivo.indexOf(`.bat`);
//         return existeExtensao !== -1
//     })
//     if (resultado){
//         console.log(`Vírus Encontrado!!`);
//     } else {
//         console.log(`Nenhum vírus encontrado.`);   
//     }  
// }
// antivirus(nomesDeArquivos);

// Meu código
if(nomesDeArquivos.some((array) => array.slice(array.lastIndexOf(`.`)) === `.bat`)){ 
    console.log(`Vírus Encontrado!!`);
} else {
    console.log(`Nenhum vírus encontrado.`)
}
