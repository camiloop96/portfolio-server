import * as dotenv from "dotenv";
import getConnection from "../config/dbConfig";
import app from "./app";
import { createSocketServer } from "../config/socketConfig";

// Import de variables de entorno
dotenv.config();
const PORT: number = parseInt(process.env.PORT || "5001");
const MODE: string | undefined = process.env.NODE_ENV;

// Manejar errores de servidor

// Escuchar el servidor en el puerto especificado
const server = app.listen(PORT, () => {
  console.log(`Portfolio app running at port ${PORT}`);
});

server.on("error", (error: any) => {
  if (error.syscall !== "listen") {
    throw error;
  }

  const bind = typeof PORT === "string" ? "Pipe " + PORT : "Port " + PORT;

  // Manejar diferentes tipos de errores
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
    default:
      throw error;
  }
});

// Conexión a base de datos
if (MODE === "deploy" || MODE === "development") {
  getConnection(MODE);
} else {
  console.error("Modo de conexión no válido");
}

// Socket Server
export const io = createSocketServer(server);
