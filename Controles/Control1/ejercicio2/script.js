let frase = prompt("Ingrese una frase:", "").toLowerCase();
let letra = prompt("Ingrese una letra:", "").toLowerCase();

let contador = 0;

for(let i = 0; i < frase.length; i++) {
  if(frase[i] == letra){
    contador++;
  }
}

alert(`La letra aparece ${contador} veces`);
