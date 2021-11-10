import React from "react";

import { useDispatch } from "react-redux";
import { addNewTodo } from "../../store/slices/todoSlice";
import { useLocation } from "react-router";

import Header from "../header";
import TodoList from "../todoList";
import Input from "../ui/input";

import "./board.scss";

const Board = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const [value, setValue] = React.useState("");

  const addTodo = (e) => {
    e.preventDefault();

    if (value.trim("").length > 0) {
      const params = {
        title: value.replace(/ +/g, " ").trim(),
        folderId: pathname.slice(1),
      };

      dispatch(addNewTodo(params));

      setValue("");
    }
  };

  return (
    <div className="board">
      <Header />
      <TodoList />
      <Input
        name="Введите название задач"
        value={value}
        setValue={setValue}
        onSubmit={addTodo}
      />
    </div>
  );
};

export default Board;
