import { AppDataSource } from "../../data-source";
import { Todo } from "../entity/Todo";

export const deleteAll = async () => {
  const todoRepository = AppDataSource.getRepository(Todo);
  const todoRemove = await todoRepository.find();
  const result = todoRepository.remove(todoRemove);
  return {
    message: "delete all todos successfully",
  };
};
