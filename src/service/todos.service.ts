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

const findTodo = (id: string) => {
  const todo = Todo.find({ _id: id });
  return todo;
};

const deleteTodo = (id: string) => {
  const todo = Todo.findByIdAndDelete(id);
  return todo;
};

const editTodo = (id: string, task: any, completed: boolean) => {
  const todo = Todo.findByIdAndUpdate(id, { task, completed });
  return todo;
};

export { newTodo, findAllTodos, findTodo, deleteTodo, editTodo };
