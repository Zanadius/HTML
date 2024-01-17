// Variables globales
var palabras = ["casa", "perro", "gato", "árbol", "agua"];
var palabraActual = "";
var intentos = 5;
var letrasAcertadas = [];

// Función para generar una palabra aleatoria
function generarPalabra() {
  palabraActual = palabras[Math.floor(Math.random() * palabras.length)];
}

// Función para validar la entrada del usuario
function validarEntrada(letra) {
  return letra.length == 1 && letra.match(/[a-z]/);
}

// Función para comprobar la entrada del usuario
function comprobacion() {
  var letra = document.getElementById("user_input").value;

  if (!validarEntrada(letra)) {
    alert("Ingrese una sola letra");
    return;
  }

  if (letrasAcertadas.includes(letra)) {
    alert("Ya has adivinado esa letra");
    return;
  }

  if (palabraActual.includes(letra)) {
    letrasAcertadas.push(letra);
    // Actualizar los campos de entrada
    for (var i = 0; i < palabraActual.length; i++) {
      if (letrasAcertadas.includes(palabraActual[i])) {
        document.getElementById("letras").children[i].innerHTML = letraActual[i];
      }
    }

    // Comprobar si el jugador ha ganado
    if (letrasAcertadas.length == palabraActual.length) {
      alert("¡Has ganado!");
      reiniciar();
    }
  } else {
    intentos--;
    alert("Incorrecto. Quedan " + intentos + " intentos");

    // Comprobar si el jugador ha perdido
    if (intentos == 0) {
      alert("¡Has perdido!");
      reiniciar();
    }
  }
}

// Función para reiniciar el juego
function reiniciar() {
  intentos = 5;
  letrasAcertadas = [];
  palabraActual = "";
  generarPalabra();

  // Actualizar los campos de entrada
  for (var i = 0; i < 5; i++) {
    document.getElementById("letras").children[i].innerHTML = "_";
  }

  document.getElementById("mensaje").innerHTML = "Bienvenido";
  document.getElementById("oportunidades").innerHTML = "Tienes 5 intentos";
}

// Inicializar el juego
generarPalabra();
