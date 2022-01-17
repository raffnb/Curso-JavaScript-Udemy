const nome='Rafael ';
const sobrenome='Moreira ';
const idade= 31;
const peso=82;
const altura= 1.71;
let imc = peso / (altura*altura)
let anos = (2022-idade)

console.log(nome, sobrenome,'tem', idade,'anoss, pesa',peso,'KG')
console.log('tem',altura,'de altura e seu IMC é de ', imc)
console.log (nome, 'nasceu em', anos)


// template spring
console.log(`${nome} ${sobrenome} tem ${idade} anoss pesa ${peso} KG`)
console.log(`tem ${altura} de altura e seu IMC é de  ${imc}`)
console.log (`${nome} nasceu em ${anos}`)