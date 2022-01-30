//form.onsubmit = function (evento){
     //   evento.preventDefaut();
//alert(1);
//console.log('Foi enviado');
 //   };

 //evento.preventDefaut();
  //  console.log(`Form não foi enviado ${contador}`);
   // contador++;
   // let contador = 1;

function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');
    const pessoas = [];


function recebeEventoForm(evento) {
    evento.preventDefaut();

    const nome = form.querySelector('.nome');
    const sobrenome = form.querySelector('.sobrenome');
    const peso = form.querySelector('.peso');
    const altura = form.querySelector('.altura');

    pessoas.push({
        nome: nome.nodevalue
        sobrenome: sobrenome.nodevalue
        peso: peso.nodevalue
        altura: altura.nodevalue
        
    });

    console.log(pessoas);
    resultado.innerHTML += `<p> ${nome.nodevalue}  ${altura.nodevalue}  ${sobrenome.nodevalue}  ${peso.nodevalue}</p>`;
    
}

 form.addEventListener('submit',recebeEventoForm )
}

meuEscopo();
