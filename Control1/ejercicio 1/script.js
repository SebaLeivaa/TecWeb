let puntaje = parseFloat(prompt("Ingrese el puntaje: ", 0.4));
let dinero = 350000;

if(puntaje == 0.2){
  dinero = puntaje * dinero;
  alert(`Su nivel de rendimiento es insuficiente, recibira $${dinero}`);
}else if(puntaje == 0.4){
  dinero = puntaje * dinero;
  alert(`Su nivel de rendimiento es aceptable, recibira $${dinero}`);
}else if(puntaje == 0.6){
  dinero = puntaje * dinero;
  alert(`Su nivel de rendimiento es meritorio, recibira $${dinero}`);
}else if(puntaje == 0.8){
  dinero = puntaje * dinero;
  alert(`Su nivel de rendimiento es excelente, recibira $${dinero}`);
}else if(puntaje == 0.0){
  dinero = puntaje * dinero;
  alert(`Su nivel de rendimiento es insuficiente, recibira $${dinero}`);
}else {
  alert(`Ha ingresado un porcentaje invalido`);
}