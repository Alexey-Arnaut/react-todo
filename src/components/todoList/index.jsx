import Todo from "./todo";

import "./todos.scss";

const TodoList = () => {
  const todos = [
    {
      title: "Задача 1",
      completed: true,
    },
    {
      title: "Задача 2",
      completed: false,
    },
    {
      title: "Задача 3",
      completed: true,
    },
    {
      title: "Задача 4",
      completed: false,
    },
  ];

  return (
    <div className="todos">
      {todos.map((todo, index) => (
        <Todo key={index} {...todo} />
      ))}
    </div>
  );
};

export default TodoList;
