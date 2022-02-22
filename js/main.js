const $form = document.querySelector(`#carta-a-santa`);

function validarFormulario(event){
 
    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const descripcionRegalo = $form[`descripcion-regalo`].value;
    const errores = {
        nombre: validarNombre(nombre),
        ciudad: validarCiudad(ciudad),
        'descripcion-regalo': validarRegalo(descripcionRegalo)
    }

    const esExito = manejarErrores(errores) === 0;

    if (esExito) {
        $form.className = 'oculto';
        document.querySelector('#exito').className = '';
    }
    event.preventDefault();
}

function manejarErrores(errores){

    const keys = Object.keys(errores);
    const $errores = document.querySelector('#errores');
    limpiarErrores();
    let cantidadDeErrores = 0;

    keys.forEach(function(key){
    const error = errores[key];
        if (error) {
            $form[key].className = 'error';
            const $error = document.createElement('li');
            $error.innerText = error;
            $errores.appendChild($error);
            cantidadDeErrores++;
        } else{
            $form[key].className = ''
        }
    })
    return cantidadDeErrores;
}

function limpiarErrores() {
	const errores = document.querySelector("#errores").querySelectorAll("li");
	errores.forEach(error => {
		error.parentNode.removeChild(error);
	});
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