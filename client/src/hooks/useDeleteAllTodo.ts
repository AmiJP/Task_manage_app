import { deleteAllTodo } from "@/api/todo/deleteAllTodo";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteAllTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => deleteAllTodo(),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["todos"] });
    },
  });
};
