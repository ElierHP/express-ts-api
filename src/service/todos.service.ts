import Todo from "../model/todos.model";

const findAllTodos = () => {
  const todos = Todo.find({});
  return todos;
};

const newTodo = (task: string, completed: boolean) => {
  const todo = new Todo({
    task,
    completed,
  });
  todo.save();
  return todo;
};

export { newTodo, findAllTodos };
