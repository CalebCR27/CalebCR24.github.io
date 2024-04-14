let numeroAdivinar;
let intentos = 0;
const maxIntentos = 5;

function iniciarJuego() {
  numeroAdivinar = generarNumeroAleatorio(1, 100);
  intentos = 0;
  document.getElementById("intentos-anteriores").innerText = "";
  document.getElementById("resultado").innerText = "";
  document.getElementById("input-numero").value = "";
  document.getElementById("input-numero").disabled = false;
}

function generarNumeroAleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function adivinarNumero() {
  const inputNumero = document.getElementById("input-numero").value;
  const conjetura = parseInt(inputNumero);

  if (isNaN(conjetura) || conjetura < 1 || conjetura > 100) {
    alert("Por favor ingresa un número válido entre 1 y 100.");
    return;
  }

  intentos++;

  let mensaje;

  if (conjetura === numeroAdivinar) {
    mensaje = `¡Felicidades! Has adivinado el número en ${intentos} intentos.`;
    document.getElementById("input-numero").disabled = true;
  } else if (intentos === maxIntentos) {
    mensaje = `¡Lo siento! Te has quedado sin intentos. El número era ${numeroAdivinar}.`;
    document.getElementById("input-numero").disabled = true;
  } else if (conjetura < numeroAdivinar) {
    mensaje = "Intenta con un número mayor.";
  } else {
    mensaje = "Intenta con un número menor.";
  }

  document.getElementById("resultado").innerText = mensaje;
  document.getElementById("intentos-anteriores").innerText += `${conjetura}, `;
}

// Iniciar un nuevo juego al cargar la página
window.onload = iniciarJuego;