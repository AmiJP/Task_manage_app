import { Todo as TodoType } from "@/types/todo";
import { Button } from "./ui/button";
import { useDeleteTodo } from "@/hooks/useDeleteTodo";
import { useNavigate } from "react-router-dom";

export const Todo = ({ todo }: { todo: TodoType }) => {
  const deleteMutation = useDeleteTodo();
  const navigate = useNavigate();
  function handleDelete() {
    deleteMutation.mutate(todo.id);
  }

  return (
    <>
      <p>{todo.title}</p>
      <Button className="mx-3" onClick={handleDelete} variant={"destructive"}>
        Delete
      </Button>
      <Button
        onClick={() => navigate(`/edit/${todo.id}`)}
        variant={"secondary"}
      >
        Edit
      </Button>
    </>
  );
};
