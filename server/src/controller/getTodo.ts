import { AppDataSource } from "../../data-source";
import { Todo } from "../entity/Todo";

export const getTodo = async (id: number) => {
  const todoRepository = AppDataSource.getRepository(Todo);
  const getTodo = await todoRepository.findOneBy({
    id: id,
  });
  return getTodo;
};
