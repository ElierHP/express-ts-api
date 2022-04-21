import { Request, Response } from "express";
import { newTodo, findAllTodos } from "../service/todos.service";

const findAllTodosHandler = async (req: Request, res: Response) => {
  const todos = await findAllTodos();
  res.send(todos);
};

const newTodoHandler = async (req: Request, res: Response) => {
  const { task, completed } = req.body;
  const todo = await newTodo(task, completed);
  res.send(todo);
};

export { newTodoHandler, findAllTodosHandler };
