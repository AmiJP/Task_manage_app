import { createTodo } from "@/api/todo/createTodo";
import { QueryClient, useMutation } from "@tanstack/react-query";
const queryClient = new QueryClient();

export const useCreateTodo = () => {
  return useMutation({
    mutationFn: ({ title }: { title: string }) => createTodo(title),
    onSuccess: () => {
      queryClient.refetchQueries({ queryKey: ["todos"] });
    },
  });
};
