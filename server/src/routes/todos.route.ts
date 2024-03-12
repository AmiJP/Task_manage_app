import express, { Request, Response } from "express";
import { getTodos } from "../controller/getTodos";
import { createTodo } from "../controller/createTodo";
import { updateTodo } from "../controller/updateTodo";
import { deleteTodo } from "../controller/deleteTodo";
import { deleteAll } from "../controller/deleteAllTodo";
import { getTodo } from "../controller/getTodo";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const result = await getTodos();
  res.send(result);
});

router.get("/:id", async (req: Request, res: Response) => {
  const id = +req.params.id;
  const result = await getTodo(id);
  res.send(result);
});

router.post("/create", async (req: Request, res: Response) => {
  const title = req.body.title;
  const result = await createTodo(title);
  res.send(result);
});

router.put("/update/:id", async (req: Request, res: Response) => {
  const title = req.body.title;
  const id = +req.params.id;

  const result = await updateTodo(id, title);
  res.send(result);
});

router.delete("/delete/:id", async (req: Request, res: Response) => {
  const id = +req.params.id;
  const result = await deleteTodo(id);
  res.send(result);
});

router.delete("/delete", async (req: Request, res: Response) => {
  const result = await deleteAll();
  res.send(result);
});

export { router as todoRouter };
