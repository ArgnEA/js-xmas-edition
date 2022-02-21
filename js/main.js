const $form = document.querySelector(`#carta-a-santa`);

function validarFormulario(event){
 
    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form[`descripcion-regalo`].value;
    const errores = {
        nombre: validarNombre(nombre),
        ciudad: validarCiudad(ciudad),
        descripcionRegalo: validarRegalo(descripcionRegalo)
    }

    manejarErrores(errores);

    event.preventDefault();
}

function manejarErrores(errores){
    const errorNombre = errores.nombre;
    const errorCiudad = errores.ciudad;
    const errorDescripcionRegalo = errores.descripcionRegalo;

    if (errorNombre) {
        $form.nombre.className = `error`
    } else{
        $form.nombre.className = ``
    }

    if (errorCiudad) {
        $form.ciudad.className = `error`
    } else{
        $form.ciudad.className = ``
    }

    if (errorDescripcionRegalo) {
        $form[`descripcion-regalo`].className = `error`
    } else{
        $form.descripcionRegalo.className = ``
    }
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


formulario.onsubmit = validarFormulario;