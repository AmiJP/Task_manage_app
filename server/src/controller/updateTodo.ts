import { AppDataSource } from "../../data-source";
import { Todo } from "../entity/Todo";

export const updateTodo = async (id: number, title: string) => {
  const todoRepository = AppDataSource.getRepository(Todo);

  const todoUpdate = await todoRepository.findOneBy({
    id: id,
  });
  if (!todoUpdate) {
    return null;
  }

  todoUpdate.title = title;
  const result = todoRepository.save(todoUpdate);

  return result;
};
