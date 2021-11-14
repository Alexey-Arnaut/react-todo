import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getTodos,
  deleteTodo,
  changeStateTodo,
  changeNameTodo,
  setDescription,
} from "../../store/slices/todoSlice";
import { useLocation } from "react-router";

import Todo from "./todo";
import TodoEdit from "./TodoEdit";

import img from "../../img/img.webp";
import "./todos.scss";

const TodoList = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const todos = useSelector((state) => state.todos.todos);
  const user = useSelector((state) => state.user.user);
  const [active, setActive] = React.useState(false);
  const [todoId, setTodoId] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");

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

    setDesc(todos.find((todo) => todo.id === id).description || "");
  };

  const changeName = () => {
    if (title.trim("").length > 0) {
      const params = {
        title: title,
        id: todoId,
      };

      dispatch(changeNameTodo(params));
    }
  };

  const addDescription = () => {
    const params = {
      description: desc,
      id: todoId,
    };

    dispatch(setDescription(params));
  };

  return (
    <>
      <div className={`todos ${todos.length === 0 ? "todos--active" : ""}`}>
        {todos.length === 0 && (
          <>
            <img src={img} alt="" />
            <h1 className="todos__title">Тут пока ничего нет.</h1>
          </>
        )}
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            {...todo}
            remove={remove}
            changeState={changeState}
            openModal={openModal}
          />
        ))}
      </div>
      <TodoEdit
        active={active}
        setActive={setActive}
        changeName={changeName}
        title={title}
        setTitle={setTitle}
        desc={desc}
        setDesc={setDesc}
        addDescription={addDescription}
      />
    </>
  );
};

export default TodoList;
