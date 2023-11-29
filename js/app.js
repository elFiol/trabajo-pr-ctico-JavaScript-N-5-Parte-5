const btnParar = document.getElementById("parar");
const btnReiniciar = document.getElementById("reiniciar");
const btnIniciar = document.getElementById("iniciar");
const h2 = document.querySelector("h2");
let intervalo;
let contador = 0;
let contadorMin = 0;
function iniciarContador() {
  if (contador === 60) {
    contadorMin++;
    contador = 0;
    h2.innerHTML = contadorMin + ":" + contador;
  } else {
    contador++;
    h2.innerHTML = contadorMin + ":" + contador;
  }
}
function iniciarIntervalo() {
  btnIniciar.classList.add("disabled");
  intervalo = setInterval(iniciarContador, 1000);
}
function detenerContador() {
  clearInterval(intervalo);
  btnIniciar.classList.remove("disabled");
}
function reiniciar() {
  contadorMin = 0;
  contador = 0;
  h2.innerHTML = 0;
  btnIniciar.classList.remove("disabled");
  clearInterval(intervalo);
}
btnIniciar.addEventListener("click", iniciarIntervalo);
btnParar.addEventListener("click", detenerContador);
btnReiniciar.addEventListener("click", reiniciar);
