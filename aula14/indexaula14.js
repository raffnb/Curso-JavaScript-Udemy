//Padrão JavaScript precição - IEEE 754-2008

let num1 = 11.15648491 //number
let num2 = 2.5 //number

//console.log(num1.toString() + num2) //tostring, para transformar numero em string
//num1 = num1.toString()
console.log(num1.toFixed(2)); //deixar os valores arredondados.
//console.log(Number.isInteger(num1)); //Para saber se o numero é inteiro "true and false "

/**
 * clet.temp = num1 * "5"
 * console.log(NUmber.isNAN(temp)); "PARA ANALISAR SE O VALOR PODE SER FEITO A CONTA"
 */

num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;
num1 += num2;

console.log (num1)
console.log(Number.isInteger(num1));
