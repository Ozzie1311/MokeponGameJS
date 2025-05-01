// Sección Seleccionar Mascota
const sectionSeleccionMascota = document.getElementById("seleccionar-mascota");
const contenedorInputs = document.getElementById("contenedor-inputs");
const btnSeleccionarMascota = document.getElementById("btn-mascota");

// Sección Canvas
const sectionMapa = document.getElementById("mapa-juego");
const mapaDelJuego = document.getElementById("mapa");

// Sección Seleccionar Ataque
const sectionSeleccionAtaque = document.getElementById("seleccionar-ataque");
const contenedorAtaque = document.getElementById("contenedor-ataque");
const spanMascotaJugador = document.getElementById("mascota-jugador");
const spanMascotaEnemigo = document.getElementById("mascota-enemigo");
const contenedorVidas = document.getElementById("contenedor-vidas");
const contenedorBotones = document.getElementById("contenedor-botones");

// Sección Mensajes
const contenedorMensajes = document.getElementById("contenedor-mensajes");
const sectionMensajes = document.getElementById("mensajes");

// Sección Reiniciar
const sectionReiniciar = document.getElementById("reiniciar");
const botonReiniciar = document.getElementById("btn-reiniciar");

// Sección Ataques
const contenedorJugador = document.getElementById("ataques-jugador");
const contenedorEnemigo = document.getElementById("ataques-enemigo");
const contenedorAtaquesJugador = document.getElementById("ataques-del-jugador");
const contenedorAtaquesEnemigo = document.getElementById("ataques-del-enemigo");

// Sección Vidas
const contenedorVidasJugador = document.getElementById("vidas-jugador");
const contenedorVidasEnemigo = document.getElementById("vidas-enemigo");

// Variables Globales
let mokepones = [];
let opcionMascota;
let opcionAtaqueJugador;
let mascotaSeleccionadaJugador;
let mascotaJugadorObjeto;
let mascotaSeleccionadaEnemigo;
let inputHipodoge;
let inputCapipepo;
let inputRatigueya;
let botones = [];
let botonAgua;
let botonTierra;
let botonFuego;
let ataquesDelJugador = [];
let ataquesDelEnemigo = [];
let indexAtaqueJugador;
let indexAtaqueEnemigo;
let victoriasJugador = 0;
let victoriasEnemigo = 0;
let vidasJugador = 3;
let vidasEnemigo = 3;
let lienzo = mapaDelJuego.getContext("2d");
let imagenMapa = new Image();
imagenMapa.src = "./assets/mokemap.webp";
let intervalo;
let anchoDelMapa = window.innerWidth - 20;
let altoBuscado = (anchoDelMapa * 600) / 800;
const anchoMaximo = 880;
const alturaMaxima = 660;

if (anchoDelMapa > anchoMaximo && altoBuscado > alturaMaxima) {
  anchoDelMapa = anchoMaximo - 30;
  altoBuscado = alturaMaxima - 30;
}

mapaDelJuego.width = anchoDelMapa;
mapaDelJuego.height = altoBuscado;

class Mokepon {
  constructor(nombre, foto, vidas, fotoMascota) {
    this.nombre = nombre;
    this.foto = foto;
    this.vidas = vidas;
    this.ataques = [];
    this.ancho = 40;
    this.alto = 40;
    this.coordenadaX = Math.floor(
      Math.random() * mapaDelJuego.width - this.ancho - 1
    );
    this.coordenadaY = Math.floor(
      Math.random() * mapaDelJuego.height - this.alto - 1
    );
    this.fotoMascota = new Image();
    this.fotoMascota.src = fotoMascota;
    this.velocidadX = 0;
    this.velocidadY = 0;
  }

  pintarMokepon() {
    lienzo.drawImage(
      this.fotoMascota,
      this.coordenadaX,
      this.coordenadaY,
      this.ancho,
      this.alto
    );
  }
}

let hipodoge = new Mokepon(
  "Hipodoge",
  "./assets/mokepons_mokepon_hipodoge_attack.webp",
  5,
  "./assets/hipodoge.png"
);
let capipepo = new Mokepon(
  "Capipepo",
  "./assets/mokepons_mokepon_capipepo_attack.webp",
  5,
  "./assets/capipepo.png"
);
let ratigueya = new Mokepon(
  "Ratigueya",
  "./assets/mokepons_mokepon_ratigueya_attack.webp",
  5,
  "./assets/ratigueya.png"
);

let hipodogeEnemigo = new Mokepon(
  "Hipodoge",
  "./assets/mokepons_mokepon_hipodoge_attack.webp",
  5,
  "./assets/hipodoge.png"
);
let capipepoEnemigo = new Mokepon(
  "Capipepo",
  "./assets/mokepons_mokepon_capipepo_attack.webp",
  5,
  "./assets/capipepo.png"
);
let ratigueyaEnemigo = new Mokepon(
  "Ratigueya",
  "./assets/mokepons_mokepon_ratigueya_attack.webp",
  5,
  "./assets/ratigueya.png"
);

hipodoge.ataques.push(
  { nombre: "Ataque 💧", id: "boton-agua" },
  { nombre: "Ataque 💧", id: "boton-agua" },
  { nombre: "Ataque 💧", id: "boton-agua" },
  { nombre: "Ataque 🌱", id: "boton-tierra" },
  { nombre: "Ataque 🔥", id: "boton-fuego" }
);

capipepo.ataques.push(
  { nombre: "Ataque 🌱", id: "boton-tierra" },
  { nombre: "Ataque 🌱", id: "boton-tierra" },
  { nombre: "Ataque 🌱", id: "boton-tierra" },
  { nombre: "Ataque 💧", id: "boton-agua" },
  { nombre: "Ataque 🔥", id: "boton-fuego" }
);

ratigueya.ataques.push(
  { nombre: "Ataque 🔥", id: "boton-fuego" },
  { nombre: "Ataque 🔥", id: "boton-fuego" },
  { nombre: "Ataque 🔥", id: "boton-fuego" },
  { nombre: "Ataque 🌱", id: "boton-tierra" },
  { nombre: "Ataque 💧", id: "boton-agua" }
);

hipodogeEnemigo.ataques.push(
  { nombre: "Ataque 💧", id: "boton-agua" },
  { nombre: "Ataque 💧", id: "boton-agua" },
  { nombre: "Ataque 💧", id: "boton-agua" },
  { nombre: "Ataque 🌱", id: "boton-tierra" },
  { nombre: "Ataque 🔥", id: "boton-fuego" }
);

capipepoEnemigo.ataques.push(
  { nombre: "Ataque 🌱", id: "boton-tierra" },
  { nombre: "Ataque 🌱", id: "boton-tierra" },
  { nombre: "Ataque 🌱", id: "boton-tierra" },
  { nombre: "Ataque 💧", id: "boton-agua" },
  { nombre: "Ataque 🔥", id: "boton-fuego" }
);

ratigueyaEnemigo.ataques.push(
  { nombre: "Ataque 🔥", id: "boton-fuego" },
  { nombre: "Ataque 🔥", id: "boton-fuego" },
  { nombre: "Ataque 🔥", id: "boton-fuego" },
  { nombre: "Ataque 🌱", id: "boton-tierra" },
  { nombre: "Ataque 💧", id: "boton-agua" }
);

mokepones.push(hipodoge, capipepo, ratigueya);

function iniciarJuego() {
  sectionSeleccionAtaque.style.display = "none";
  sectionMapa.style.display = "none";

  mokepones.forEach((mokepon) => {
    opcionMascota = `<input type="radio" name="mascota" id=${mokepon.nombre} />
        <label for=${mokepon.nombre}>
          <p>${mokepon.nombre}</p>
          <img
            src=${mokepon.foto}
            alt=${mokepon.nombre}
          />
        </label>`;
    contenedorInputs.innerHTML += opcionMascota;

    inputHipodoge = document.getElementById("Hipodoge");
    inputCapipepo = document.getElementById("Capipepo");
    inputRatigueya = document.getElementById("Ratigueya");
  });

  btnSeleccionarMascota.addEventListener("click", seleccionarMascota);

  botonReiniciar.addEventListener("click", reiniciarJuego);
  console.log("Acaso el juego ha empezado?");
}

function seleccionarMascota() {
  sectionMapa.style.display = "flex";
  // lienzo.fillRect(10, 15, 30, 40); --> función fillRect para dibujar un rectangulo en canvas

  sectionSeleccionMascota.style.display = "none";
  sectionReiniciar.style.display = "none";

  if (inputHipodoge.checked) {
    mascotaSeleccionadaJugador = inputHipodoge.id;
    spanMascotaJugador.innerHTML = inputHipodoge.id;
  } else if (inputCapipepo.checked) {
    mascotaSeleccionadaJugador = inputCapipepo.id;
    spanMascotaJugador.innerHTML = inputCapipepo.id;
  } else if (inputRatigueya.checked) {
    mascotaSeleccionadaJugador = inputRatigueya.id;
    spanMascotaJugador.innerHTML = inputRatigueya.id;
  } else {
    alert("Tienes que seleccionar una mascota para poder avanzar");
  }

  extraerAtaques(mascotaSeleccionadaJugador);
  iniciarMapa();
}

function extraerAtaques(mascotaSeleccionadaJugador) {
  let ataques;
  for (let i = 0; i < mokepones.length; i++) {
    if (mascotaSeleccionadaJugador === mokepones[i].nombre) {
      ataques = mokepones[i].ataques;
    }
  }

  mostrarAtaques(ataques);
}

function mostrarAtaques(ataques) {
  ataques.forEach((ataque) => {
    opcionAtaqueJugador = `<button class="boton-ataque" id=${ataque.id}>${ataque.nombre}</button>`;

    contenedorBotones.innerHTML += opcionAtaqueJugador;
  });

  botonAgua = document.getElementById("boton-agua");
  botonTierra = document.getElementById("boton-tierra");
  botonFuego = document.getElementById("boton-fuego");
  botones = document.querySelectorAll(".boton-ataque");
}

function mostrarMascotaEnemigo(enemigo) {
  // let random = Math.floor(Math.random() * mokepones.length);
  spanMascotaEnemigo.innerHTML = enemigo.nombre;
  // ataquesDelEnemigo = enemigo.ataques;

  secuenciaAtaques();
}

function secuenciaAtaques() {
  botones.forEach((boton) => {
    boton.addEventListener("click", (e) => {
      if (e.target.textContent === "Ataque 💧") {
        ataquesDelJugador.push("Agua");
        boton.disabled = true;
        boton.style.backgroundColor = "#7ae2cf";
        boton.style.color = "#06202b";
      } else if (e.target.textContent === "Ataque 🌱") {
        ataquesDelJugador.push("Tierra");
        boton.disabled = true;
        boton.style.backgroundColor = "#7ae2cf";
        boton.style.color = "#06202b";
        console.log("tierra");
      } else if (e.target.textContent === "Ataque 🔥") {
        ataquesDelJugador.push("Fuego");
        boton.disabled = true;
        boton.style.backgroundColor = "#7ae2cf";
        boton.style.color = "#06202b";
        console.log("fuego");
      }

      ataqueAleatorioEnemigo();
    });
  });
}

function ataqueAleatorioEnemigo() {
  let random = Math.floor(Math.random() * mokepones.length);
  if (random === 0) {
    ataquesDelEnemigo.push("Agua");
  } else if (random === 1) {
    ataquesDelEnemigo.push("Tierra");
  } else if (random === 2) {
    ataquesDelEnemigo.push("Fuego");
  }

  iniciarPelea();
}

function iniciarPelea() {
  if (ataquesDelJugador.length === 5) {
    combateMascotas();
  }
}

function indexJugadores(jugador, enemigo) {
  indexAtaqueJugador = ataquesDelJugador[jugador];
  indexAtaqueEnemigo = ataquesDelEnemigo[enemigo];
}

function combateMascotas() {
  for (let index = 0; index < ataquesDelJugador.length; index++) {
    if (ataquesDelJugador[index] === ataquesDelEnemigo[index]) {
      indexJugadores(index, index);
      crearMensaje("EMPATE");
    } else if (
      ataquesDelJugador[index] === "Fuego" &&
      ataquesDelEnemigo[index] === "Tierra"
    ) {
      indexJugadores(index, index);
      crearMensaje("GANASTE");
      victoriasJugador++;
      contenedorVidasJugador.innerHTML = victoriasJugador;
    } else if (
      ataquesDelJugador[index] === "Agua" &&
      ataquesDelEnemigo[index] === "Fuego"
    ) {
      indexJugadores(index, index);
      crearMensaje("GANASTE");
      victoriasJugador++;
      contenedorVidasJugador.innerHTML = victoriasJugador;
    } else if (
      ataquesDelJugador[index] === "Tierra" &&
      ataquesDelEnemigo[index] === "Agua"
    ) {
      indexJugadores(index, index);
      crearMensaje("GANASTE");
      victoriasJugador++;
      contenedorVidasJugador.innerHTML = victoriasJugador;
    } else {
      indexJugadores(index, index);
      crearMensaje("PERDISTE");
      victoriasEnemigo++;
      contenedorVidasEnemigo.innerHTML = victoriasEnemigo;
    }
  }

  revisarVictorias();
}

function revisarVictorias() {
  if (victoriasJugador === victoriasEnemigo) {
    crearMensajeFinal("¡¡¡EMPATE!!!");
  } else if (victoriasJugador > victoriasEnemigo) {
    crearMensajeFinal(
      `FELICIDADES!!! <br>
      has ganado`
    );
  } else {
    crearMensajeFinal(
      `LASTIMA!!! <br>
      has perdido`
    );
  }
}

function crearMensajeFinal(resultadoFinal) {
  sectionMensajes.innerHTML = resultadoFinal;
  sectionReiniciar.style.display = "flex";
}

function crearMensaje(resultado) {
  let mensajeAtaqueJugador = document.createElement("p");
  let mensajeAtaqueEnemigo = document.createElement("p");

  sectionMensajes.innerHTML = resultado;

  mensajeAtaqueJugador.innerHTML = indexAtaqueJugador;
  mensajeAtaqueEnemigo.innerHTML = indexAtaqueEnemigo;

  contenedorJugador.appendChild(mensajeAtaqueJugador);
  contenedorEnemigo.appendChild(mensajeAtaqueEnemigo);
}

function reiniciarJuego() {
  location.reload();
}

function pintarCanvas() {
  mascotaJugadorObjeto.coordenadaX =
    mascotaJugadorObjeto.coordenadaX + mascotaJugadorObjeto.velocidadX;
  mascotaJugadorObjeto.coordenadaY =
    mascotaJugadorObjeto.coordenadaY + mascotaJugadorObjeto.velocidadY;

  lienzo.clearRect(0, 0, mapaDelJuego.width, mapaDelJuego.height);
  lienzo.drawImage(imagenMapa, 0, 0, mapaDelJuego.width, mapaDelJuego.height);
  mascotaJugadorObjeto.pintarMokepon();
  hipodogeEnemigo.pintarMokepon();
  capipepoEnemigo.pintarMokepon();
  ratigueyaEnemigo.pintarMokepon();

  if (mascotaJugadorObjeto.velocidadX || mascotaJugadorObjeto.velocidadY) {
    revisarColision(hipodogeEnemigo);
    revisarColision(capipepoEnemigo);
    revisarColision(ratigueyaEnemigo);
  }
}

function moverArriba() {
  mascotaJugadorObjeto.velocidadY = -5;
  console.log("Me estoy moviendo hacia arriba");
}

function moverDerecha() {
  mascotaJugadorObjeto.velocidadX = 5;
}

function moverAbajo() {
  mascotaJugadorObjeto.velocidadY = 5;
}
function moverIzquierda() {
  mascotaJugadorObjeto.velocidadX = -5;
}

function detenerMovimiento() {
  mascotaJugadorObjeto.velocidadX = 0;
  mascotaJugadorObjeto.velocidadY = 0;
}

function teclas(ev) {
  switch (ev.key) {
    case "ArrowUp":
      moverArriba();
      break;
    case "ArrowDown":
      moverAbajo();
      break;
    case "ArrowLeft":
      moverIzquierda();
      break;
    case "ArrowRight":
      moverDerecha();
      break;
    default:
      break;
  }
}

function iniciarMapa() {
  mapaDelJuego.width = anchoDelMapa;
  mapaDelJuego.height = altoBuscado;

  mascotaJugadorObjeto = obtenerObjetoMascota(mascotaSeleccionadaJugador);

  console.log(mascotaJugadorObjeto);
  console.log(mascotaSeleccionadaJugador);

  intervalo = setInterval(pintarCanvas, 50);

  window.addEventListener("keydown", teclas);

  window.addEventListener("keyup", detenerMovimiento);
}

function obtenerObjetoMascota(mascotaSeleccionadaJugador) {
  for (let i = 0; i < mokepones.length; i++) {
    if (mascotaSeleccionadaJugador === mokepones[i].nombre) {
      return mokepones[i];
    }
  }
}

function revisarColision(enemigo) {
  const arribaEnemigo = enemigo.coordenadaY;
  const abajoEnemigo = enemigo.coordenadaY + enemigo.alto;
  const derechaEnemigo = enemigo.coordenadaX + enemigo.ancho;
  const izquierdaEnemigo = enemigo.coordenadaX;

  const abajoMascota =
    mascotaJugadorObjeto.coordenadaY + mascotaJugadorObjeto.alto;
  const arribaMascota = mascotaJugadorObjeto.coordenadaY;
  const derechaMascota =
    mascotaJugadorObjeto.coordenadaX + mascotaJugadorObjeto.ancho;
  const izquierdaMascota = mascotaJugadorObjeto.coordenadaX;

  if (
    abajoMascota < arribaEnemigo ||
    arribaMascota > abajoEnemigo ||
    derechaMascota < izquierdaEnemigo ||
    izquierdaMascota > derechaEnemigo
  ) {
    return;
  }

  detenerMovimiento();
  alert("Hubo una colision con " + enemigo.nombre);
  mostrarMascotaEnemigo(enemigo);
  sectionSeleccionAtaque.style.display = "block";
  sectionMapa.style.display = "none";
}

window.addEventListener("load", iniciarJuego);
