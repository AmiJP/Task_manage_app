import { AppDataSource } from "../../data-source";
import { Todo } from "../entity/Todo";

export const deleteTodo = async (id: number) => {
  const todoRepository = AppDataSource.getRepository(Todo);
  const todoRemove = await todoRepository.findOneBy({
    id: id,
  });

  if (!todoRemove) {
    return null;
  }

  const result = todoRepository.remove(todoRemove);
  return {
    message: "delete successfully",
    id: id,
  };
};
