import { config } from "dotenv";
import { Server } from "socket.io";

export const createSocketServer = (server: any) => {
  // Variables de entorno
  config().parsed;

  // Carga de variables de entorno
  const { ORIGIN_CLIENT_DPY, ORIGIN_CLIENT_DEV, NODE_ENV } = process.env;

  let originClient;

  if (NODE_ENV === "development") {
    originClient = ORIGIN_CLIENT_DEV;
  } else if (NODE_ENV === "deploy") {
    originClient = ORIGIN_CLIENT_DPY;
  } else {
    return null;
  }

  const io = new Server(server, {
    cors: {
      origin: originClient,
    },
  });

  io.on("connection", (socket) => {
    socket.on("updateComments", () => {
      io.emit("updateComments");
    });
  });
  return io;
};
