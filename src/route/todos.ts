import express, { Request, Response } from "express";
import Todo from "../model/todos.model";
const router = express.Router();

router
  .route("/")
  .get((req: Request, res: Response) => {
    res.send("Get Route");
  })
  .post(async (req, res) => {
    const { task, completed } = req.body;
    const todo = await new Todo({
      task,
      completed,
    });
    todo.save();
    res.send(todo);
  });

export default router;
