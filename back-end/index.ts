import { config } from "dotenv";
import cors from "cors";
import express from "express";
import eventHandlers from "./eventHandlers/eventHandlers";

config();
const app = express();
app.use(cors({ origin: "*" }));

const PORT = process.env.PORT;
const server = app.listen(PORT, () => {
  console.log("Server started on port", PORT);
});

eventHandlers(server);