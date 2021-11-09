import React from "react";

import Header from "../header";
import TodoList from "../todoList";
import Input from "../ui/input";

import "./board.scss";

const Board = () => {
  const [value, setValue] = React.useState("");

  return (
    <div className="board">
      <Header />
      <TodoList />
      <Input name="Введите название задач" value={value} setValue={setValue} />
    </div>
  );
};

export default Board;
