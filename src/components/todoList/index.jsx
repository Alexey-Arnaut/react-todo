import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getTodos,
  deleteTodo,
  changeStateTodo,
  changeNameTodo,
} from "../../store/slices/todoSlice";
import { useLocation } from "react-router";

import Todo from "./todo";
import Modal from "../ui/modal";
import HeaderLogo from "../header/headerLogo";
import Input from "../ui/input";

import "./todos.scss";

const TodoList = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const todos = useSelector((state) => state.todos.todos);
  const user = useSelector((state) => state.user.user);
  const [active, setActive] = React.useState(false);
  const [todoId, setTodoId] = React.useState("");
  const [title, setTitle] = React.useState("");

  React.useEffect(() => {
    const params = {
      folderId: pathname.slice(1),
      userId: user,
    };

    dispatch(getTodos(params));
  }, [dispatch, pathname, user]);

  const remove = (id) => {
    dispatch(deleteTodo(id));
  };

  const changeState = (id, completed) => {
    const params = {
      id: id,
      completed: completed,
    };
    dispatch(changeStateTodo(params));
  };

  const openModal = (title, id) => {
    setActive(true);
    setTitle(title);
    setTodoId(id);
  };

  const changeName = (e) => {
    e.preventDefault();

    const params = {
      title: title,
      id: todoId,
    };

    dispatch(changeNameTodo(params));
  };

  return (
    <div className="todos">
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          {...todo}
          remove={remove}
          changeState={changeState}
          openModal={openModal}
        />
      ))}
      <Modal active={active} setActive={setActive}>
        <HeaderLogo />
        <form className="todos__form" onSubmit={changeName}>
          <Input name="Редактировть задачу" value={title} setValue={setTitle} />
        </form>
      </Modal>
    </div>
  );
};

export default TodoList;
