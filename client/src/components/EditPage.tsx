import { useUpdateTodo } from "@/hooks/useUpdateTodo";
import { useNavigate, useParams } from "react-router-dom";
import { useTodo } from "@/hooks/useTodo";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "title must be at least 2 characters.",
  }),
});

export const EditPage = () => {
  const navigate = useNavigate();
  const updateMutation = useUpdateTodo();
  const params = useParams();
  const id = Number(params.id);

  const { isLoading, data: todo } = useTodo(id);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: todo?.title,
    },
  });

  if (isLoading) {
    return "Loading...";
  }

  function onSubmit(values: z.infer<typeof formSchema>) {
    const { title } = values;
    console.log(title);
    updateMutation.mutate(
      { title: title, id: id },
      {
        onSuccess: () => {
          navigate("/");
        },
      }
    );
  }

  return (
    <Form {...form}>
      <div className="flex items-center gap-4 m-3">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-[350px] space-y-8 "
        >
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-3xl font-bold">Todo App</FormLabel>
                <FormControl>
                  <Input placeholder="Add todo" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="mx-3" type="submit">
            Add
          </Button>
        </form>
      </div>
    </Form>
  );
};
