import { getTodo } from "@/api/todo/getTodo";
import { useQuery } from "@tanstack/react-query";

export const useTodo = (id: number) =>
  useQuery({
    queryKey: ["todo", id],
    queryFn: () => getTodo(id),
  });
