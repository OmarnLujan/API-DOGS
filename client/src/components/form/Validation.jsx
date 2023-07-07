export function validate(dogData) {
  const errors = {};
  const regexString = new RegExp(/^[A-Za-z][A-Za-z\s]*$/);
  const regexNumber = new RegExp("[0-9]");

  if (!regexString.test(dogData.name)) {
    errors.name = "Ingresar un nombre valido.";
  }
  if (!dogData.name) {
    errors.name = "Ingrese un nombre.";
    if (dogData.name.length > 100) {
      errors.name = "No mayor a 100 caracteres.";
    }
  }
  //------------------------------------------------
  if (!regexNumber.test(dogData.heightMin)) {
    errors.heightMin = "Ingresar una altura minima valida.";
  }

  if (!dogData.heightMin) {
    errors.heightMin = "Ingrese una altura minima.";
  }
  if (dogData.heightMin.length > 2) {
    errors.heightMin = "No mayor a 2 digitos.";
  }
  //------------------------------------------------
  if (!regexNumber.test(dogData.heightMax)) {
    errors.heightMin = "Ingresar una altura maxima valida.";
  }
  if (dogData.heightMax < dogData.heightMin) {
    errors.heightMin = "La altura maxima no puede ser menor a la minima.";
  }
  if (!dogData.heightMax) {
    errors.heightMax = "Ingrese una altura maxima.";
  }
  if (dogData.heightMax.length > 2) {
    errors.heightMax = "No mayor a 2 digitos.";
  }
  //------------------------------------------------
  if (!regexNumber.test(dogData.weightMin)) {
    errors.weightMin = "Ingresar un Peso minimo valido.";
  }
  if (dogData.weightMin > dogData.weightMax) {
    errors.weightMin = "El peso maximo no puede ser menor al minimo.";
  }
  if (!dogData.weightMin) {
    errors.weightMin = "Ingrese un Peso minimo.";
  }
  if (dogData.weightMin.length > 2) {
    errors.weightMin = "No mayor a 2 digitos.";
  }
  //------------------------------------------------
  if (!regexNumber.test(dogData.weightMax)) {
    errors.weightMax = "Ingresar un Peso maximo valido.";
  }
  
  if (!dogData.weightMax) {
    errors.weightMax = "Ingrese un Peso maximo.";
  }
  if (dogData.weightMax.length > 2) {
    errors.weightMax = "No mayor a 2 digitos.";
  }
  //------------------------------------------------
  if (!regexNumber.test(dogData.life_span)) {
    errors.life_span = "Ingresar una esperanza de vida valida.";
  }
  if (!dogData.life_span) {
    errors.life_span = "Ingrese una esperanza de vida.";
  }
  
  //------------------------------------------------
  if (!dogData.image) {
    errors.image = "Ingrese el link de una imagen.";
  }

  //------------------------------------------------
  return errors;
}
