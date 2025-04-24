// let botonMascota = document.getElementById("btn-mascota");
// let inputPokeagua = document.getElementById("pokeagua");
// let inputPoketierra = document.getElementById("poketierra");
// let inputPokefuego = document.getElementById("pokefuego");
// let mascotaJugador = document.getElementById("mascota-jugador");
// let mascotaEnemigo = document.getElementById("mascota-enemigo");
// let mensaje = document.getElementById("mensaje");
// let btnAgua = document.getElementById("btn-agua");
// let btnTierra = document.getElementById("btn-tierra");
// let btnFuego = document.getElementById("btn-fuego");
// let spanVidasJugador = document.getElementById("vidas-jugador");
// let spanVidasEnemigo = document.getElementById("vidas-enemigo");
// let btnReinciar = document.getElementById("btn-reiniciar");
// let sectionMensajeFinal = document.getElementById("mensaje-final");
// let sectionMensajes = document.getElementById("mensajes");
// let sectionSeleccionarMascota = document.getElementById("seleccionar-mascota");
// let sectionVidas = document.getElementById("contenedor-vidas");
// sectionSeleccionAtaque = document.getElementById("seleccion-ataque");

// let ataqueJugador;
// let ataqueEnemigo;
// // let resultadoCombate;
// let vidasJugador = 3;
// let vidasEnemigo = 3;

// let parrafo = document.createElement("p");
// let mensajeJuego = document.createElement("p");

// const mascotas = ["Pokeagua", "Poketierra", "Pokefuego"];
// const sectionAtaque = document.getElementById("seleccionar-ataque");
// const sectionReiniciar = document.getElementById("reiniciar");
// sectionAtaque.style.display = "none";
// sectionReiniciar.style.display = "none";

// class Mokepon {
//   constructor(nombre, foto, vidas) {
//     this.nombre = nombre;
//     this.foto = foto;
//     this.vidas = vidas;
//   }
// }

// let pokeagua = new Mokepon(
//   "Pokeagua",
//   "./assets/mokepons_mokepon_hipodoge_attack.webp",
//   3
// );

// let poketierra = new Mokepon(
//   "Poketierra",
//   "./assets/mokepons_mokepon_capipepo_attack.webp",
//   3
// );

// let pokefuego = new Mokepon(
//   "Pokefuego",
//   "./assets/mokepons_mokepon_ratigueya_attack.webp",
//   3
// );

// let mokepones = [];
// mokepones.push(pokeagua, poketierra, pokefuego);
// console.log(mokepones);

// function iniciarJuego() {
//   botonMascota.addEventListener("click", seleccionarMascota);

//   btnAgua.addEventListener("click", ataqueAgua);
//   btnTierra.addEventListener("click", ataqueTierra);
//   btnFuego.addEventListener("click", ataqueFuego);

//   btnReinciar.addEventListener("click", reiniciarJuego);
// }

// function ataqueAgua() {
//   ataqueJugador = "Agua";
//   ataqueAleatorioEnemigo();
// }

// function ataqueTierra() {
//   ataqueJugador = "Tierra";
//   ataqueAleatorioEnemigo();
// }

// function ataqueFuego() {
//   ataqueJugador = "Fuego";
//   ataqueAleatorioEnemigo();
// }

// function crearMensaje(resultado) {
//   let sectionMensajes = document.getElementById("mensajes");

//   mensajeJuego.innerHTML = `Tu mascota atacó con ${ataqueJugador}, la mascota del enemigo atacó con ${ataqueEnemigo} - ${resultado}`;
//   sectionMensajes.appendChild(mensajeJuego);
// }

// function ataqueAleatorioEnemigo() {
//   let random = Math.floor(Math.random() * mascotas.length);
//   if (random === 0) {
//     ataqueEnemigo = "Agua";
//   } else if (random === 1) {
//     ataqueEnemigo = "Tierra";
//   } else {
//     ataqueEnemigo = "Fuego";
//   }

//   combateMascotas();
// }

// function seleccionarMascota() {
//   if (inputPokeagua.checked) {
//     mascotaJugador.innerHTML = "Pokeagua";
//   } else if (inputPoketierra.checked) {
//     mascotaJugador.innerHTML = "Poketierra";
//   } else if (inputPokefuego.checked) {
//     mascotaJugador.innerHTML = "Pokefuego";
//   } else {
//     ("Debes seleccionar una Mascota.");
//   }
//   spanVidasEnemigo.innerHTML = vidasEnemigo;
//   spanVidasJugador.innerHTML = vidasJugador;
//   seleccionarMascotaEnemigo();
//   sectionAtaque.style.display = "block";
//   sectionSeleccionarMascota.style.display = "none";
// }

// function combateMascotas() {
//   if (ataqueJugador === ataqueEnemigo) {
//     crearMensaje("EMPATE");
//   } else if (ataqueJugador == "Fuego" && ataqueEnemigo == "Tierra") {
//     vidasEnemigo--;
//     spanVidasEnemigo.innerHTML = vidasEnemigo;
//     crearMensaje("GANASTE");
//   } else if (ataqueJugador == "Agua" && ataqueEnemigo == "Fuego") {
//     vidasEnemigo--;
//     spanVidasEnemigo.innerHTML = vidasEnemigo;
//     crearMensaje("GANASTE");
//   } else if (ataqueJugador == "Tierra" && ataqueEnemigo == "Agua") {
//     vidasEnemigo--;
//     spanVidasEnemigo.innerHTML = vidasEnemigo;
//     crearMensaje("GANASTE");
//   } else {
//     vidasJugador--;
//     spanVidasJugador.innerHTML = vidasJugador;
//     crearMensaje("PERDISTE");
//   }

//   revisarVidas();
// }

// function revisarVidas() {
//   if (vidasEnemigo === 0) {
//     crearMensajeFinal(
//       "Felicidades, has ganado!! tu enemigo se ha quedado sin vidas"
//     );
//     return;
//   } else if (vidasJugador === 0) {
//     crearMensajeFinal(
//       "Lástima, tu mascota se ha quedado sin vidas y has perdido!!"
//     );
//     return;
//   }
// }

// function crearMensajeFinal(mensaje) {
//   parrafo.innerHTML = `${mensaje}`;
//   sectionMensajeFinal.appendChild(parrafo);

//   btnAgua.disabled = true;
//   btnTierra.disabled = true;
//   btnFuego.disabled = true;
//   sectionMensajes.style.display = "none";
//   sectionReiniciar.style.display = "flex";
//   sectionSeleccionarMascota.style.display = "none";
//   sectionSeleccionAtaque.style.display = "none";
// }

// function seleccionarMascotaEnemigo() {
//   let random = Math.floor(Math.random() * mascotas.length);
//   mascotaEnemigo.innerText = mascotas[random];
// }

// function reiniciarJuego() {
//   location.reload();
// }

// window.addEventListener("load", iniciarJuego);

// Sección Seleccionar Mascota
const sectionSeleccionMascota = document.getElementById("seleccionar-mascota");
const contenedorInputs = document.getElementById("contenedor-inputs");
const btnSeleccionarMascota = document.getElementById("btn-mascota");

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

class Mokepon {
  constructor(nombre, foto, vidas) {
    this.nombre = nombre;
    this.foto = foto;
    this.vidas = vidas;
    this.ataques = [];
  }
}

let hipodoge = new Mokepon(
  "Hipodoge",
  "./assets/mokepons_mokepon_hipodoge_attack.webp",
  5
);
let capipepo = new Mokepon(
  "Capipepo",
  "./assets/mokepons_mokepon_capipepo_attack.webp",
  5
);
let ratigueya = new Mokepon(
  "Ratigueya",
  "./assets/mokepons_mokepon_ratigueya_attack.webp",
  5
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

mokepones.push(hipodoge, capipepo, ratigueya);

function iniciarJuego() {
  sectionSeleccionAtaque.style.display = "none";

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
  sectionSeleccionAtaque.style.display = "block";
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
  mostrarMascotaEnemigo();
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

function mostrarMascotaEnemigo() {
  let random = Math.floor(Math.random() * mokepones.length);
  spanMascotaEnemigo.innerHTML = mokepones[random].nombre;

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

window.addEventListener("load", iniciarJuego);
