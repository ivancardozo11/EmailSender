//Variables
const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');

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

    console.log(e.target.type);

    if (e.target.value.length > 0) {
        console.log('Si hay algo')
    } else {
        e.target.classList.add('border', 'border-red-500');
        mostrarError('Todos los campos son obligatorios');
    }

    if (e.target.type === 'email') {
        const resultado = e.target.value.indexOf('@');
        if (resultado < 0) {
            mostrarError('El mail no es valido');
        }
        console.log(resultado);
    }
}

function mostrarError(mensaje){
    const mensajeError = document.createElement('p');
    mensajeError.textContent = mensaje;
    mensajeError.classList.add('border', 'border-red-500', 'background-red-100', 'text-red-500', 'p-3', 'mt-5', 'text-center', 'error');

    const errores = document.querySelectorAll('.error');
    if(errores.length === 0){
        formulario.appendChild(mensajeError);
     }
    }