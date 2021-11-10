import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { getTodos, deleteTodo } from "../../store/slices/todoSlice";
import { useLocation } from "react-router";

import Todo from "./todo";

import "./todos.scss";

const TodoList = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const todos = useSelector((state) => state.todos.todos);

  React.useEffect(() => {
    dispatch(getTodos(pathname.slice(1)));
  }, [dispatch, pathname]);

  const removeTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="todos">
      {todos.map((todo) => (
        <Todo key={todo.id} {...todo} removeTodo={removeTodo} />
      ))}
    </div>
  );
};

export default TodoList;
