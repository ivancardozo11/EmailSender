//Variables
const btnEnviar = document.querySelector('#enviar');

//Variables para campos.
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje')

//Functions
eventListeners();
function eventListeners(){
    document.addEventListener('DOMContentLoaded', iniciarApp);

    //Campo del formulario
    email.addEventListener('blur', validarFormulario);
    asunto.addEventListener('blur',validarFormulario);
    mensaje.addEventListener('blur', validarFormulario);

}

function iniciarApp(){
   btnEnviar.disabled  = true;
   btnEnviar.classList.add('cursor-not-allowed', 'opacity-50');
}

//Valida el  formulario

function validarFormulario(e){

    if (e.target.value.length > 0) {
        console.log('Si hay algo')
    } else {
        e.target.classList.add('border', 'border-red-500');
        console.log('No hay nada');
    }
}