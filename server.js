import express from "express";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import createGame from "./public/game.js";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);
const io = new Server(server);
const game = createGame();

const __dirname = dirname(fileURLToPath(import.meta.url));

app.use(express.static(join(__dirname, "public")));

io.on("connection", (socket) => {
  console.log("Usuário conectado, id:" + socket.id + " from server");

  game.addPlayer(socket.id);
  socket.emit("setup", game.stateGame);

  socket.on("disconnect", () => {
    console.log("Usuário desconectado, id:" + socket.id + " from server");
    game.removePlayer(socket.id);
  });
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
