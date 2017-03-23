
//La funcion Math.abs permite trabajar con los valores absolutos de los numeros
//Esta funcion comprueba los valores de los numeros ingresados.
function comprobar() {
  if (Math.abs(calculadora.display.value)) {
    return calculadora.display.value;
  } else {
    return Math.abs(calculadora.display.value);
  }
}

//La funcion eval ejecuta la declaracion entre los argumentos. 
//Esta funcion toma el valor que arroja cada boton y ejecuta la operacion.
function resultado() {
  calculadora.display.value = eval(calculadora.display.value);
}
