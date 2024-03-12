import { axiosClient } from "../axiosClient";
import { deleteAllTodoUrl } from "./url";

export const deleteAllTodo = async () => {
  const url = deleteAllTodoUrl();
  const result = await axiosClient.delete(url.href);
  return result.data;
};
