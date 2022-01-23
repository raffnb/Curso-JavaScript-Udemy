let numero = Number (prompt('Digite seu numero:'));
const numeroTitulo  = document.getElementById('numero-titulo');
const texto = document.getElementById('texto');




numeroTitulo.innerHTML = numero;

texto.innerHTML = '';
texto.innerHTML += `<p> Seu numero é:${numero}</p>`
texto.innerHTML += `<p> É NAN:${Number.isNaN(numero)}</p>`
texto.innerHTML += `<p>A Raiz de ${numero} é : ${numero ** 0.5} </p>`
texto.innerHTML += `<p>${numero} É um numero inteiro: ${Number.isInteger (numero)}</p>`
texto.innerHTML += `<p>Arredondando para cima: ${Math.floor(numero) }</p>`
texto.innerHTML += `<p>Arredondando para baixo: ${Math.ceil(numero) }</p>`
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}</p>`