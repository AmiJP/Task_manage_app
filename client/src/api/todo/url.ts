import { baseURL } from "../url";

export const createTodoUrl = () => {
  const url = new URL(baseURL);
  url.pathname += "create";
  return url;
};

export const getTodoUrl = () => {
  const url = new URL(baseURL);
  return url;
};

export const deleteTodoUrl = (id: number) => {
  const url = new URL(baseURL);
  url.pathname += `delete/${id}`;
  return url;
};

export const getSingleTodoUrl = (id: number) => {
  const url = new URL(baseURL);
  url.pathname += `${id}`;
  return url;
};

export const updateTodoUrl = (id: number) => {
  const url = new URL(baseURL);
  url.pathname += `update/${id}`;
  return url;
};

export const deleteAllTodoUrl = () => {
  const url = new URL(baseURL);
  url.pathname += "delete";
  return url;
};
