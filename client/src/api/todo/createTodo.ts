import { axiosClient } from "../axiosClient";
import { createTodoUrl } from "./url";

export const createTodo = async (title: string) => {
  const url = createTodoUrl();
  const result = await axiosClient.post(url.href, { title });
  return result.data;
};
