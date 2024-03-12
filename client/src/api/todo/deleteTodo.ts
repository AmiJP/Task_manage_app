import { axiosClient } from "../axiosClient";
import { deleteTodoUrl } from "./url";

export const deleteTodo = async (id: number) => {
  const url = deleteTodoUrl(id);
  const result = await axiosClient.delete(url.href);
  console.log(result);
  return result.data;
};
