import { getTodos } from "@/api/todo/getTodos";
import { useQuery } from "@tanstack/react-query";

export const useTodos = () =>
  useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
