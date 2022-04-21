import { Request, Response } from "express";
import {
  newTodo,
  findAllTodos,
  findTodo,
  deleteTodo,
  editTodo,
} from "../service/todos.service";

const findAllTodosHandler = async (req: Request, res: Response) => {
  const todos = await findAllTodos();
  res.send(todos);
};

const newTodoHandler = async (req: Request, res: Response) => {
  const { task, completed } = req.body;
  const todo = await newTodo(task, completed);
  res.send(todo);
};

const findTodoHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const todo = await findTodo(id);
  res.send(todo);
};

const deleteTodoHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const todo = await deleteTodo(id);
  res.send(todo);
};

const editTodoHandler = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { task, completed } = req.body;
  const todo = await editTodo(id, task, completed);
  res.send(todo);
};

export {
  newTodoHandler,
  findAllTodosHandler,
  findTodoHandler,
  deleteTodoHandler,
  editTodoHandler,
};
