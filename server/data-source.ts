import { DataSource } from "typeorm";
import { Todo } from "./src/entity/Todo";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "your username",
  password: "your password",
  database: "todo_app",
  synchronize: true,
  logging: true,
  entities: [Todo],
});
