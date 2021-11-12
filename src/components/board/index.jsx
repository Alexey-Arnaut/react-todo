import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { addNewTodo } from "../../store/slices/todoSlice";
import { useLocation } from "react-router";

import Header from "../header";
import TodoList from "../todoList";
import Input from "../ui/input";

import "./board.scss";

const Board = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const { pathname } = useLocation();
  const [value, setValue] = React.useState("");

  const addTodo = (e) => {
    e.preventDefault();

    if (value.trim("").length > 0) {
      const params = {
        title: value.replace(/ +/g, " ").trim(),
        folderId: pathname.slice(1),
        userId: user,
      };

      dispatch(addNewTodo(params));

      setValue("");
    }
  };

  return (
    <div className="board">
      <Header />
      <TodoList />
      <form className="board__form" onSubmit={addTodo}>
        <Input
          name="Введите название задач"
          value={value}
          setValue={setValue}
          type="text"
        />
      </form>
    </div>
  );
};

export default Board;