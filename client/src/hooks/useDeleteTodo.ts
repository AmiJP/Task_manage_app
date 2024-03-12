import { deleteTodo } from "@/api/todo/deleteTodo";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id: number) => deleteTodo(id),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["todos"] });
    },
  });
};
