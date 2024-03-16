const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i;
// const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
const regexPassword = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$/;

export const validaciones = userData => {
  const errors = {};

  // Validación email
  if (!userData.email) {
    errors.email = "El campo email es obligatorio";
  } else if (!regexEmail.test(userData.email)) {
    errors.emailValido = "El email no es válido";
  } else if (userData.email.length > 35) {
    errors.emailCaracteres = "El email no puede superar los 35 caracteres";
  }

  // Validación contraseña
  if (!regexPassword.test(userData.password)) {
    errors.password =
      "La contraseña debe tener al menos un número, una letra minúscula y una letra mayúscula";
  } else if (userData.password.length < 8 || userData.password.length > 10) {
    errors.passwordLong = "La contraseña debe tener entre 8 y 10 caracteres";
  }

  return errors;
};
  export  const EMAIL = "adrianmiguel138@gmail.com";
  export  const PASSWORD = "Miguel123";

