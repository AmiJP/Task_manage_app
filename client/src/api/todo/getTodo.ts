import { Todo } from "@/types/todo";
import { axiosClient } from "../axiosClient";
import { getSingleTodoUrl } from "./url";

export const getTodo = async (id: number): Promise<Todo> => {
  const url = getSingleTodoUrl(id);
  const result = await axiosClient.get(url.href);
  return result.data;
};
