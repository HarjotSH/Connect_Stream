import express from "express";
import ServerConfig from "./config/serverConfig";
import { Server } from "socket.io";
import http from "http";
import cors from "cors";
import roomHandler from "./handlers/roomHandler";
import { Socket } from "socket.io";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

const server = http.createServer(app);

/* ---------------- SOCKET.IO ---------------- */
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

io.on("connection", (socket: Socket) => {
  console.log("New user connected");
  roomHandler(socket);

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

/* ---------------- PEERJS (ESM-safe) ---------------- */
(async () => {
  const { ExpressPeerServer } = await import("peer");

  const peerServer = ExpressPeerServer(server, {
    path: "/peerjs"
  });

  app.use("/peerjs", peerServer);
})();

/* ---------------- START SERVER ---------------- */
const PORT = process.env.PORT || ServerConfig.PORT;

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
