import { AppDataSource } from "../../data-source";
import { Todo } from "../entity/Todo";

export const getTodos = async () => {
  const todoRepository = AppDataSource.getRepository(Todo);
  const allTodos = await todoRepository.find();

  if (!allTodos) {
    return { message: "todo not found" };
  }
  return allTodos;
};
