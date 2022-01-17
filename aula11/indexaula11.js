/**
 *  Aritiméticos
 * + Faz a adição e Concatenação
 * - Subtração
 * / Divisão
 * ** Potenciação
 * * Multiplicação
 * % Resto da Divisão
 * () valores dentro do parenteses são os primeiros a serem resolvidos  na conta
 * ++ Icremento (pré incremento "++valor") (pós incremento "valor++"")
 * -- Decremento (pré decremento "--valor") (pós decremento "valor--"")
 */ 

 const num1 = 5;
 const num2 = 2;
 const num3 = 10
 console.log(num1-num2)
 console.log((num1+num2)*num3)

 let contador =1;
 ++contador
 ++contador
 ++contador
 ++contador
 console.log(contador);

 let contador2 =10;
 --contador2
 --contador2
 --contador2
 --contador2
 console.log(contador2);

 let contador3 = 0
 let passo = 2
 contador3 = contador3 + passo
 console.log(contador3)
 contador3 = contador3 + passo
 console.log(contador3)
 contador3 = contador3 + passo
 console.log(contador3)

 
 //NaN  = Not a Number "Sua conta deu um erro em sua conta"
  
 const num5 = 10
 const num6 = 'Rafael'
console.log(num5*num6);
