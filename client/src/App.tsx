import { TodoList } from "./components/TodoList";
import { TodoForm } from "./components/TodoForm";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { EditPage } from "./components/EditPage";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";

export default function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <Router>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <TodoForm />
                  <TodoList />
                </>
              }
            />
            <Route path="/edit/:id" element={<EditPage />}></Route>
          </Routes>
          <ReactQueryDevtools initialIsOpen={false} />
        </QueryClientProvider>
      </Router>
    </>
  );
}
