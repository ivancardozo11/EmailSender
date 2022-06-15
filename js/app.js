//Variables
const btnEnviar = document.querySelector('#enviar');


//Functions
eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', iniciarApp);

}

function iniciarApp(){
   btnEnviar.disabled  = true;
   btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}
