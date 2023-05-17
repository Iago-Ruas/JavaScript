const professores = [
    {nome:`Guido` , stack: `Backend`},
    {nome: `Vidal`, stack: `Backend`},
    {nome: `Dani`, stack: `Frontend`},
    {nome: `Diego`, stack: `Frontend`},
    {nome: `Léo`, stack: `Backend`},
    {nome: `Ruli`, stack: `Frontend`}]

const separaProf = (array) =>{
    const profsFront = array.filter((professor) => professor.stack === `Frontend`);
    const profsBack  =  array.filter((professor) => professor.stack === `Backend`);
    console.log(`Os professores de Front são:`);
    console.log(profsFront);  
    console.log(`e os de Back são:`);
    console.log(profsBack);
}

separaProf(professores);