//Exemplo de Objeto
/**
 * const pessoa1 = {
    nome: 'Luiz',
    sobrenome:'Miranda',
    idade: '25'
};
console.log (pessoa1)
console.log(pessoa1.nome)
 */


//exemplo de função para otimizar a função objeto
/**
function criaPessoa (nome,sobrenome,idade) {
    return{nome, sobrenome, idade,}
}

const pessoa1 = criaPessoa('Rafael','Moreira',30)
const pessoa2 = criaPessoa('Luiz','de de la cruz',40)
const pessoa3 = criaPessoa('Marcos','Bento',32)
const pessoa4 = criaPessoa('Felipe','Oliveira',34)
const pessoa5 = criaPessoa('Rogerio','Almeida',42)

console.log(pessoa1, pessoa2, pessoa3)
 */


/**const pessoa1 = {
nome: 'Roberto',
sobrenome: 'Miranda',
idade: '38',

fala() {
console.log(`${this.nome} ${this.sobrenome} esta falando Oiiiiii...`);
}
};

pessoa1.fala();
*/


const pessoa1 = {
nome: 'Marcos',
sobrenome: 'Oliveira',
idade: '48',
    
fala() {
console.log(`A minha idade é ${this.idade}`);
},

incrementaIdade() {
    this.idade++;
}
};
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala()
pessoa1.incrementaIdade();
pessoa1.fala()
pessoa1.incrementaIdade();
pessoa1.fala()