//esta funcion se ejecuta cundo se envivia el formulario
function validarFormulario(){
    //a contnuacion se debe obtener los nombres de los campos
    const nombre=document.getElementById('nombre').value.trim()//elimina espacios
    const email=document.getElementById('email').value.trim()//elimina espacios
    const password=document.getElementById('password').value.trim()//elimina espacios
    const confirmar=document.getElementById('confirmar').value.trim()//elimina espacios

    //validacion 1: el nombre debe tener al menos 3 caracteres
    if(nombre.length < 3){
        alert("El nombre debe tener al menos 3 caracteres");
        return false;// evita enviar al formulario
    }

    //validacion 2: el correo debe contener al menos un '@'
    if(!email.imcludes("@")){
        alert("Correo Invalido.");
        return false;
    }

    //validacion 3: la contraseña debe ser de minimo 12 caracteres
    if(password.length < 12){
        alert("La contraseña debe tener al menos 12 caracteres");
            return false;
    }

    //validacion 4: ambas contraseñas deben coincidir
    if(password !== confirmar){
        alert("Las contraseñas no coinciden: ");
        return false;
    }

    //si todas las validaciones cumplen, se debe visualizar el sigu. mensaje
    alert("Formulario Valido ✅");
    return true;//permite enviar al formulario
}