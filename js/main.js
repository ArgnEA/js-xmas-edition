
function validarFormulario(event){

    const $form = document.querySelector(`#carta-a-santa`);
    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const comportamiento = $form.comportamiento.value;
    const descripcionRegalo = $form[`descripcion-regalo`].value;
    
    event.preventDefault();

}



function validarNombre(nombre){
    
    if (nombre.length === 0) {
        return 'Este campo debe tener al menos 1 caracter';
    }
    
    if (nombre.length >= 50) {
        return 'Este campo debe tener menos de 50 caracteres';
    }
    
    if(!/^[a-z]+$/i.test(nombre)){
        return `El nombre solo debe contener letras`
    }

    return ``;
}

function validarCiudad(ciudad){

    if (ciudad.length === 0) {
        return 'Este campo no puede estar vacío';
    }
    
    return ``;
}

function validarRegalo(descripcionRegalo){
    
    if (descripcionRegalo.length === 0) {
        return 'Este campo debe tener al menos 1 caracter';
    }
    
    if (descripcionRegalo.length >= 100) {
        return 'Este campo debe tener menos de 100 caracteres';
    }
    
    if (!/^[a-z0-9]+$/i.test(descripcionRegalo)) {
        return `Este campo solo debe contener letras o numeros`
    }

    return ``;
}


$form.onsubmit = validarFormulario;