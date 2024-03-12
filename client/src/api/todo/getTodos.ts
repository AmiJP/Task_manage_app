import { Todo } from "@/types/todo";
import { axiosClient } from "../axiosClient";
import { getTodoUrl } from "./url";

export const getTodos = async (): Promise<Todo[]> => {
  const url = getTodoUrl();
  const result = await axiosClient.get(url.href);
  return result.data;
};
