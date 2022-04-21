import express from "express";
import {
  newTodoHandler,
  findAllTodosHandler,
  findTodoHandler,
  deleteTodoHandler,
  editTodoHandler,
} from "../controller/todos.controller";

const router = express.Router();

router.route("/").get(findAllTodosHandler).post(newTodoHandler);

router.get("/:id", findTodoHandler);

router.delete("/:id", deleteTodoHandler);

router.patch("/:id", editTodoHandler);

export default router;
