let botonMascota = document.getElementById("btn-mascota");
let inputPokeagua = document.getElementById("pokeagua");
let inputPoketierra = document.getElementById("poketierra");
let inputPokefuego = document.getElementById("pokefuego");
let mascotaJugador = document.getElementById("mascota-jugador");
let mascotaEnemigo = document.getElementById("mascota-enemigo");
let mensaje = document.getElementById("mensaje");
let btnAgua = document.getElementById("btn-agua");
let btnTierra = document.getElementById("btn-tierra");
let btnFuego = document.getElementById("btn-fuego");
let spanVidasJugador = document.getElementById("vidas-jugador");
let spanVidasEnemigo = document.getElementById("vidas-enemigo");

let ataqueJugador;
let ataqueEnemigo;
// let resultadoCombate;
let vidasJugador = 3;
let vidasEnemigo = 3;

const mascotas = ["Pokeagua", "Poketierra", "Pokefuego"];

function iniciarJuego() {
  botonMascota.addEventListener("click", seleccionarMascota);

  btnAgua.addEventListener("click", ataqueAgua);
  btnTierra.addEventListener("click", ataqueTierra);
  btnFuego.addEventListener("click", ataqueFuego);
}

function ataqueAgua() {
  if (vidasEnemigo === 0 || vidasJugador === 0) {
    alert("Che!! Tenes que reiniciar el Juego");
  } else {
    ataqueJugador = "Agua";
    ataqueAleatorioEnemigo();
  }
}

function ataqueTierra() {
  if (vidasEnemigo === 0 || vidasJugador === 0) {
    alert("Che!! Tenes que reiniciar el Juego");
  } else {
    ataqueJugador = "Tierra";
    ataqueAleatorioEnemigo();
  }
}

function ataqueFuego() {
  if (vidasEnemigo === 0 || vidasJugador === 0) {
    alert("Che!! Tenes que reiniciar el Juego");
  } else {
    ataqueJugador = "Fuego";
    ataqueAleatorioEnemigo();
  }
}

function crearMensaje(resultado) {
  let sectionMensajes = document.getElementById("mensajes");
  let parrafo = document.createElement("p");
  parrafo.innerHTML = `Tu mascota atacó con ${ataqueJugador}, la mascota del enemigo atacó con ${ataqueEnemigo} - ${resultado}`;
  sectionMensajes.appendChild(parrafo);
}

function ataqueAleatorioEnemigo() {
  let random = Math.floor(Math.random() * mascotas.length);
  if (random === 0) {
    ataqueEnemigo = "Agua";
  } else if (random === 1) {
    ataqueEnemigo = "Tierra";
  } else {
    ataqueEnemigo = "Fuego";
  }

  combateMascotas();
}

function seleccionarMascota() {
  if (inputPokeagua.checked) {
    mascotaJugador.innerHTML = "Pokeagua";
  } else if (inputPoketierra.checked) {
    mascotaJugador.innerHTML = "Poketierra";
  } else if (inputPokefuego.checked) {
    mascotaJugador.innerHTML = "Pokefuego";
  } else {
    ("Debes seleccionar una Mascota.");
  }
  spanVidasEnemigo.innerHTML = vidasEnemigo;
  spanVidasJugador.innerHTML = vidasJugador;
  seleccionarMascotaEnemigo();
}

function combateMascotas() {
  if (ataqueJugador === ataqueEnemigo) {
    crearMensaje("EMPATE");
  } else if (ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra") {
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
    crearMensaje("GANASTE");
  } else if (ataqueJugador == "Agua" && ataqueEnemigo == "Fuego") {
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
    crearMensaje("GANASTE");
  } else if (ataqueJugador == "Tierra" && ataqueEnemigo == "Agua") {
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
    crearMensaje("GANASTE");
  } else {
    vidasJugador--;
    spanVidasJugador.innerHTML = vidasJugador;
    crearMensaje("PERDISTE");
  }
}

function seleccionarMascotaEnemigo() {
  let random = Math.floor(Math.random() * mascotas.length);
  mascotaEnemigo.innerText = mascotas[random];
}

window.addEventListener("load", iniciarJuego);
