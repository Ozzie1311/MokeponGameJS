//Librerias
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

//Creando lista de Jugadores
const jugadores = [];

class Jugador {
  constructor(id) {
    this.id = id;
  }

  asignarMokepon(mokepon) {
    this.mokepon = mokepon;
  }

  actualizarPosicion(coordenadaX, coordenadaY) {
    this.coordenadaX = coordenadaX;
    this.coordenadaY = coordenadaY;
  }
}

class Mokepon {
  constructor(nombre) {
    this.nombre = nombre;
  }
}

//Creando endpoint para pedir información
app.get("/unirse", (req, res) => {
  const id = `${Math.random()}`;

  const jugador = new Jugador(id);

  jugadores.push(jugador);

  //Información con metadatos
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.send(id);
});

//Creando endpoint para enviar información al servidor
app.post("/mokepon/:jugadorId", (req, res) => {
  const jugadorId = req.params.jugadorId || "";
  const nombre = req.body.mokepon || "";
  const mokepon = new Mokepon(nombre);

  const jugadorIndex = jugadores.findIndex(
    (jugador) => jugadorId === jugador.id
  );

  if (jugadorIndex >= 0) {
    jugadores[jugadorIndex].asignarMokepon(mokepon);
  }

  console.log(jugadores);
  console.log(jugadorId);
  res.end();
});

app.post("/mokepon/:jugadorId/posicion", (req, res) => {
  const jugadorId = req.params.jugadorId || "";
  const coordenadaX = req.body.coordenadaX || 0;
  const coordenadaY = req.body.coordenadaY || 0;

  const jugadorIndex = jugadores.findIndex(
    (jugador) => jugadorId === jugador.id
  );

  if (jugadorIndex >= 0) {
    jugadores[jugadorIndex].actualizarPosicion(coordenadaX, coordenadaY);
  }

  const enemigos = jugadores.filter((jugador) => {
    return jugadorId !== jugador.id;
  });

  res.send({
    enemigos,
  });
});

app.listen(8080, () => {
  console.log("el servidor ya arranco");
});
