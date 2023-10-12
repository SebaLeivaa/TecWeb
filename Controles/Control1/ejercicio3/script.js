let nickname = prompt("Ingrese un nombre de usuario: ", "");
let validacionUno = false;
let validacionDos = false;
let validacionTres = false;
let regExp1 = /[a-z]/;
let regExp2 = /[A-Z]/;
let regExp3 = /[0-9]/
  
if (nickname.match(regExp1) && nickname.match(regExp2) && nickname.match(regExp3)) {
  validacionUno = true;
}

if (nickname.length >= 6) {
  validacionDos = true;
}

if((nickname[0].match(regExp1) || nickname[0].match(regExp2)) && nickname[nickname.length - 1].match(regExp3)) {
  validacionTres = true;
}

if(validacionUno && validacionDos  && validacionTres) {
  alert(`El nombre de usuario es valido`);
}else {
    alert(`El nombre de usuario no es valido`);
}


