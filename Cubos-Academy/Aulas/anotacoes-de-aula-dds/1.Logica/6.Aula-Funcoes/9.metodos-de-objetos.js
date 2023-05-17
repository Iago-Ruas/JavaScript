const user = {
    nome: `Iago`,
    idade: 27,
    altura: 183,
    profissao: `DEV-FullStack`,
    faixaEtaria: function (){
        if (this.idade <= 21){
            return `Jovem`;
        } else if (this.idade < 65){
            return `Adulto(a)`
        } else{
            return `Idoso(a)`;
        }
    }, 
    apresentacao: function (){
        console.log(`Olá! Meu nome é ${this.nome}, sou um(a) ${this.faixaEtaria()} de ${this.idade} anos, 
        tenho ${this.altura} centimetros de altura e sou ${this.profissao}.`);
    }
}

user.apresentacao();