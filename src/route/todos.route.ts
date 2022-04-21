import express from "express";
import {
  newTodoHandler,
  findAllTodosHandler,
} from "../controller/todos.controller";

const router = express.Router();

router.route("/").get(findAllTodosHandler).post(newTodoHandler);

export default router;
