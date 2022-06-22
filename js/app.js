//Variables
const btnEnviar = document.querySelector('#enviar');
const formulario = document.querySelector('#enviar-mail');

//Variables for fields
const email = document.querySelector('#email');
const asunto = document.querySelector('#asunto');
const mensaje = document.querySelector('#mensaje');
const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


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

//Validate form

function validarFormulario(e){

    
    if (e.target.value.length > 0) {
        const error = document.querySelector('p.error');
        if (error) {
            error.remove();
        }
        e.target.classList.remove('border', 'border-red-500');
        e.target.classList.add('border', 'border-green-500');
    } else {
        e.target.classList.remove('border', 'border-green-500');
        e.target.classList.add('border', 'border-red-500');
        mostrarError('Todos los campos son obligatorios');
    }

    if (e.target.type === 'email') {
        
        if (re.test( e.target.value )) {
            const error = document.querySelector('p.error');
            if (error) {
                error.remove();
            }
            e.target.classList.remove('border', 'border-red-500');
            e.target.classList.add('border', 'border-green-500');
        }
        else{
            e.target.classList.remove('border', 'border-green-500');
            e.target.classList.add('border', 'border-red-500');
            mostrarError('Email no valido');
        }

    }
    if (re.test( e.target.value )!== '' && asunto.value !== '' && mensaje.value !== '') 
        {
            btnEnviar.disabled = false;
            btnEnviar.classList.remove('cursos-not-allowed','opacity-50');
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