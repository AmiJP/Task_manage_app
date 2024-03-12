import express, { Express, Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { todoRouter } from "./routes/todos.route";
import morgan from "morgan";
import cors from "cors";

const app: Express = express();
app.use(morgan("dev"));
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

AppDataSource.initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err) => {
    console.error("Error during Data Source initialization:", err);
  });

app.use("/", todoRouter);

app.listen(3000, () => {
  console.log("server running on port 3000");
});
