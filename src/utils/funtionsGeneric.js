import Swal from "sweetalert2";
export const valid = (values) => {
    let errors = {};
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (values.email.length === 0) {
      errors.message = "Por favor,Ingrese un correo."
    } else if (!re.test(values.email)) {
      errors.message = "Por favor,Ingrese un correo válido."
    }else if(values.name === '') {
      errors.message = 'Por favor,Ingrese un nombre.';
    }else if(values.password === '') {
      errors.message = 'Por favor,Ingrese la contraseña.';
    }else if(values.password.length < 8){
      errors.message = 'Por favor, Longitud minima de contraseña 8 caracteres.';
    }
    return errors;
}

export const messageBox = (title,description,type='warning')=>{
    Swal.fire({
        icon: type,
        title: title,
        text: description,
        timer: 3000,
        timerProgressBar: true,
      });
}