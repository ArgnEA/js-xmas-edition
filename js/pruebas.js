function probarValidarNombre() {

    console.assert(
        validarNombre(`Mike`) === ``,
            `Validar nombre no funciono con un nombre valido`);

  console.assert(
        validarNombre('') === 'Este campo debe tener al menos 1 caracter',
            'Validar nombre no validó que el nombre no sea vacío');

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
            'Este campo debe tener menos de 50 caracteres',
                'Validar nombre no validó que el nombre sea menor a 50 caracteres');

    console.assert(
        validarNombre(`123456789`) === `El nombre solo debe contener letras`,
        `Validar nombre no valido que el nombre solo debe contener letras`);
    
}

function probarValidarCiudad(){

    console.assert(
        validarCiudad("") === `Este campo no puede estar vacío`,
            `Validar ciudad no validó que la ciudad no este vacía`);

    console.assert(
        validarCiudad(`Tokio`) === ``,
            `Validar ciudad no funciono con una ciudad valida`);

}

function probarValidarRegalo() {
    console.assert(
        validarRegalo('') === 'Este campo debe tener al menos 1 caracter',
            'Validar regalo no validó que el regalo no sea vacío');
  
    console.assert(
        validarRegalo(
            'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa') ===
        'Este campo debe tener menos de 100 caracteres',
        'Validar regalo no validó que el regalo sea menor a 100 caracteres');

    console.assert(
        validarRegalo('Juguete') === '',
            'Validar regalo no funciono con un regalo valido');

    console.assert(validarRegalo(`*¨[]*A$#%`) === `Este campo solo debe contener letras o numeros`,
        `Validar regalo no valido que la descripcion contenga solo letras o numeros`)
  }

probarValidarRegalo();
probarValidarCiudad();
probarValidarNombre();
