const strNomeCompleto = `lorena santiago de oliveira bispo`;

function primeiraLetraMaiuscula(string){
    let strNomeCompletoCorrigido = ``;
    let arrayNomesCorrigidos = [];                                
    let arrayNomes = string.split(` `);                    
    
    for (let nome of arrayNomes){   	                            
        arrayNomes = nome.replace(nome[0], nome[0].toUpperCase());  
        arrayNomesCorrigidos.push(arrayNomes);                      
    }
    
    for (let i = 0 ; i < arrayNomesCorrigidos.length; i++){
        strNomeCompletoCorrigido += `${arrayNomesCorrigidos[i]} `; 
    }
    return strNomeCompletoCorrigido.trim();
}
    
let nomeCorrigido = primeiraLetraMaiuscula(strNomeCompleto);

console.log(nomeCorrigido);