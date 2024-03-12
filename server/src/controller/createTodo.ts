import { AppDataSource } from "../../data-source";
import { Todo } from "../entity/Todo";

export const createTodo = async (title: string) => {
  const todo = new Todo();
  todo.title = title;
  const todoRepository = AppDataSource.getRepository(Todo);
  const result = await todoRepository.save(todo);

  if (!result) {
    return { message: "error while created todo" };
  }
  return result;
};
