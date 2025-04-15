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

let ataqueJugador;
let ataqueEnemigo;
let resultadoCombate;

const mascotas = ["Pokeagua", "Poketierra", "Pokefuego"];

function iniciarJuego() {
  botonMascota.addEventListener("click", seleccionarMascota);

  btnAgua.addEventListener("click", ataqueAgua);
  btnTierra.addEventListener("click", ataqueTierra);
  btnFuego.addEventListener("click", ataqueFuego);
}

function ataqueAgua() {
  ataqueJugador = "Agua";
  ataqueAleatorioEnemigo();
  combateMascotas();
}

function ataqueTierra() {
  ataqueJugador = "Tierra";
  ataqueAleatorioEnemigo();
  combateMascotas();
}

function ataqueFuego() {
  ataqueJugador = "Fuego";
  ataqueAleatorioEnemigo();
  combateMascotas();
}

function crearMensaje() {
  let sectionMensajes = document.getElementById("mensajes");
  let parrafo = document.createElement("p");
  parrafo.innerHTML = `Tu mascota atacó con ${ataqueJugador}, la mascota del enemigo atacó con ${ataqueEnemigo} - ${resultadoCombate}`;
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

  crearMensaje();
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

  seleccionarMascotaEnemigo();
}

function combateMascotas() {
  if (ataqueJugador === "Agua" && ataqueEnemigo === "Fuego") {
    resultadoCombate = "GANASTE";
  } else if (ataqueJugador === "Tierra" && ataqueEnemigo === "Fuego") {
    resultadoCombate = "GANASTE";
  } else if (ataqueJugador === "Fuego" && ataqueEnemigo === "Tierra") {
    resultadoCombate = "GANASTE";
  } else if (ataqueJugador === ataqueEnemigo) {
    resultadoCombate = "EMPATE";
  } else {
    resultadoCombate = "PERDISTE";
  }
}

function seleccionarMascotaEnemigo() {
  let random = Math.floor(Math.random() * mascotas.length);
  mascotaEnemigo.innerHTML = mascotas[random];
}

window.addEventListener("load", iniciarJuego);
