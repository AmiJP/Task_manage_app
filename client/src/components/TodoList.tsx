import { Card, CardContent } from "@/components/ui/card";
import { useTodos } from "@/hooks/useTodos";
import { Todo as TodoType } from "@/types/todo";
import { Todo } from "./Todo";
import { Button } from "./ui/button";
import { useDeleteAllTodo } from "@/hooks/useDeleteAllTodo";

export const TodoList = () => {
  const deleteAllMutation = useDeleteAllTodo();
  const { isLoading, error, data } = useTodos();

  function deleteAll() {
    deleteAllMutation.mutate();
  }
  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <Card className="w-[350px] m-4">
        {data &&
          data.map((todo: TodoType) => (
            <CardContent key={todo.id}>
              <Todo todo={todo} />
            </CardContent>
          ))}
      </Card>
      <Button onClick={deleteAll} className="m-3">
        DeleteAll
      </Button>
    </div>
  );
};
