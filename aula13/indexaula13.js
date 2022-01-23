// strings são indexadas numero de letras 012345

let umaString = 'O Rato roeu a roupa do rei de roma.'; // base para colocar aspas em string
console.log(umaString)

//segundo exemplo para usar aspas em uma string
let umaString2 = "Um \"texto\"";
console.log(umaString2)

console.log(umaString[4]); // BUscar uma letra especifica

//outro exemplo de buscar da string
console.log(umaString.charAt(5));

// 3 maneiras de fazer concatenação 
console.log(umaString, 'em um lindo dia.');
console.log(umaString.concat(' em um lindo dia.'));
//Maneira mais facil de concatenar um texto
console.log(`${umaString} em um lindo dia`)

console.log(umaString.indexOf('o', 3));
console.log(umaString.lastIndexOf('m', 3));

//exemplo de expressões regulares
console.log(umaString.match(/[a-z]/g));
console.log(umaString.match(/[a-z]/));
console.log(umaString.match(/x/));

//troca de valores
console.log(umaString.replace('O', 'Mano'));
console.log(umaString.replace(/r/, '#'));

console.log(umaString.toUpperCase())
console.log(umaString.toLowerCase())








