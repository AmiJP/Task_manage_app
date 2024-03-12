import { updateTodo } from "@/api/todo/updateTodo";
import { useMutation } from "@tanstack/react-query";

export const useUpdateTodo = () => {
  return useMutation({
    mutationFn: ({ title, id }: { title: string; id: number }) =>
      updateTodo(title, id),
    onSuccess: () => {
      console.log("update todo");
    },
  });
};
