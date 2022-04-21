import { Schema, model } from "mongoose";

interface Todo {
  task: string;
  completed: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const TodoSchema = new Schema<Todo>(
  {
    task: { type: String, required: true },
    completed: { type: Boolean, required: true },
  },
  { timestamps: true }
);

const Todo = model<Todo>("Todo", TodoSchema);

export default Todo;
