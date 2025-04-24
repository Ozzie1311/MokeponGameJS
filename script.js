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
let btnReinciar = document.getElementById("btn-reiniciar");
let sectionMensajeFinal = document.getElementById("mensaje-final");
let sectionMensajes = document.getElementById("mensajes");
let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota");
let sectionVidas = document.getElementById("contenedor-vidas");
sectionSeleccionAtaque = document.getElementById("seleccion-ataque");

let ataqueJugador;
let ataqueEnemigo;
// let resultadoCombate;
let vidasJugador = 3;
let vidasEnemigo = 3;

let parrafo = document.createElement("p");
let mensajeJuego = document.createElement("p");

const mascotas = ["Pokeagua", "Poketierra", "Pokefuego"];
const sectionAtaque = document.getElementById("seleccionar-ataque");
const sectionReiniciar = document.getElementById("reiniciar");
sectionAtaque.style.display = "none";
sectionReiniciar.style.display = "none";

class Mokepon {
  constructor(nombre, imagen, vida) {
    this.nombre = nombre;
    this.imagen = imagen;
    this.vida = vida;
  }
}

let pokeagua = new Mokepon(
  "Pokeagua",
  "./assets/mokepons_mokepon_hipodoge_attack.webp",
  3
);

let poketierra = new Mokepon(
  "Poketierra",
  "./assets/mokepons_mokepon_capipepo_attack.webp",
  3
);

let pokefuego = new Mokepon(
  "Pokefuego",
  "./assets/mokepons_mokepon_ratigueya_attack.webp",
  3
);

console.log(pokeagua, poketierra, pokefuego);
function iniciarJuego() {
  botonMascota.addEventListener("click", seleccionarMascota);

  btnAgua.addEventListener("click", ataqueAgua);
  btnTierra.addEventListener("click", ataqueTierra);
  btnFuego.addEventListener("click", ataqueFuego);

  btnReinciar.addEventListener("click", reiniciarJuego);
}

function ataqueAgua() {
  ataqueJugador = "Agua";
  ataqueAleatorioEnemigo();
}

function ataqueTierra() {
  ataqueJugador = "Tierra";
  ataqueAleatorioEnemigo();
}

function ataqueFuego() {
  ataqueJugador = "Fuego";
  ataqueAleatorioEnemigo();
}

function crearMensaje(resultado) {
  let sectionMensajes = document.getElementById("mensajes");

  mensajeJuego.innerHTML = `Tu mascota atacó con ${ataqueJugador}, la mascota del enemigo atacó con ${ataqueEnemigo} - ${resultado}`;
  sectionMensajes.appendChild(mensajeJuego);
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
  sectionAtaque.style.display = "block";
  sectionSeleccionarMascota.style.display = "none";
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

  revisarVidas();
}

function revisarVidas() {
  if (vidasEnemigo === 0) {
    crearMensajeFinal(
      "Felicidades, has ganado!! tu enemigo se ha quedado sin vidas"
    );
    return;
  } else if (vidasJugador === 0) {
    crearMensajeFinal(
      "Lástima, tu mascota se ha quedado sin vidas y has perdido!!"
    );
    return;
  }
}

function crearMensajeFinal(mensaje) {
  parrafo.innerHTML = `${mensaje}`;
  sectionMensajeFinal.appendChild(parrafo);

  btnAgua.disabled = true;
  btnTierra.disabled = true;
  btnFuego.disabled = true;
  sectionMensajes.style.display = "none";
  sectionReiniciar.style.display = "flex";
  sectionSeleccionarMascota.style.display = "none";
  sectionSeleccionAtaque.style.display = "none";
}

function seleccionarMascotaEnemigo() {
  let random = Math.floor(Math.random() * mascotas.length);
  mascotaEnemigo.innerText = mascotas[random];
}

function reiniciarJuego() {
  location.reload();
}

window.addEventListener("load", iniciarJuego);
