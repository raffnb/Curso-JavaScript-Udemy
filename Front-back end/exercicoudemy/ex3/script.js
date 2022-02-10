function meuScopo(){
    const form = document.querySelector('.form');
    
    
    let contador = 1;
    function recebeEventoForm(evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const Sobrenome = form.querySelector('.sobrenome');
        const Peso = form.querySelector('.peso');
        const Altura = form.querySelector('.altura');
        
        console.log(nome.value,Sobrenome.value,Peso.value,Altura.value)
        
    }
form.addEventListener('submit', recebeEventoForm);
    }
meuScopo();