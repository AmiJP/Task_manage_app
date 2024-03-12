import { axiosClient } from "../axiosClient";
import { updateTodoUrl } from "./url";

export const updateTodo = async (title: string, id: number) => {
  const url = updateTodoUrl(id);
  const result = await axiosClient.put(url.href, { title });
  return result.data;
};
