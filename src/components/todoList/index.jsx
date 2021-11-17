import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getTodos,
  deleteTodo,
  changeStateTodo,
  changeNameTodo,
  setDescription,
} from "../../store/slices/todoSlice";
import {
  getSubtasks,
  addNewSubtask,
  deleteSubtask,
  changeStateSubtask,
  changeNameSubtask,
} from "../../store/slices/subtaskSlice";
import { useLocation } from "react-router";

import Todo from "./Todo";
import TodoModal from "./TodoModal";
import TodoEditSubtask from "./TodoEditSubtask";
import Message from "../message";

import img from "../../img/img.webp";
import "./todos.scss";

const TodoList = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const todos = useSelector((state) => state.todos.todos);
  const user = useSelector((state) => state.user.user);
  const subtasks = useSelector((state) => state.subtasks.subtasks);
  const [active, setActive] = React.useState(false);
  const [activeModalSubtask, setActiveModalSubtask] = React.useState(false);
  const [todoId, setTodoId] = React.useState("");
  const [todoTitle, setTodoTitle] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [subtaskTitle, setSubtaskTitle] = React.useState("");
  const [value, setValue] = React.useState("");
  const [subtaskId, setSubtaskId] = React.useState("");
  const [message, setMessage] = React.useState("");

  React.useEffect(() => {
    const params = {
      folderId: pathname.slice(1),
      userId: user,
    };

    dispatch(getTodos(params));
  }, [dispatch, pathname, user]);

  const removeTodo = (id) => {
    dispatch(deleteTodo(id));
  };

  const changeStateTodos = (id, completed) => {
    const params = {
      id: id,
      completed: completed,
    };
    dispatch(changeStateTodo(params));
  };

  const openModalTodo = (title, id) => {
    const params = {
      todoId: id,
      userId: user,
    };

    setActive(true);
    setTodoTitle(title);
    setTodoId(id);
    setDesc(todos.find((todo) => todo.id === id).description || "");

    dispatch(getSubtasks(params));
  };

  const changeNameTodos = () => {
    if (todoTitle.trim("").length > 0) {
      const params = {
        title: todoTitle,
        id: todoId,
      };

      dispatch(changeNameTodo(params));
    } else {
      setMessage("empty-field");
      setTodoTitle(todos.find((todo) => todo.id === todoId).title);
    }
  };

  const addDescription = () => {
    const params = {
      description: desc,
      id: todoId,
    };

    dispatch(setDescription(params));
  };

  const addSubtask = () => {
    if (subtaskTitle.trim("").length > 0) {
      const params = {
        title: subtaskTitle.replace(/ +/g, " ").trim(),
        todoId: todoId,
        userId: user,
      };

      dispatch(addNewSubtask(params));

      setSubtaskTitle("");
    }
  };

  const removeSubtask = (id) => {
    dispatch(deleteSubtask(id));
  };

  const changeStateSubtasks = (id, completed) => {
    const params = {
      id: id,
      completed: completed,
    };
    dispatch(changeStateSubtask(params));
  };

  const openModalSubtask = (title, id) => {
    setActiveModalSubtask(true);
    setValue(title);
    setSubtaskId(id);
  };

  const changeNameSubtasks = () => {
    if (value.trim("").length > 0) {
      const params = {
        title: value,
        id: subtaskId,
      };

      dispatch(changeNameSubtask(params));
    } else {
      setMessage("empty-field");
      setValue(subtasks.find((subtask) => subtask.id === subtaskId).title);
    }
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
        {todos
          .slice()
          .sort((a, b) => a.time - b.time)
          .map((todo) => (
            <Todo
              key={todo.id}
              {...todo}
              remove={removeTodo}
              changeState={changeStateTodos}
              openModal={openModalTodo}
            />
          ))}
      </div>
      <TodoModal
        active={active}
        setActive={setActive}
        changeName={changeNameTodos}
        todoTitle={todoTitle}
        setTodoTitle={setTodoTitle}
        desc={desc}
        setDesc={setDesc}
        addDescription={addDescription}
        subtasksTitle={subtaskTitle}
        setSubtaskTitle={setSubtaskTitle}
        subtasks={subtasks}
        addSubtask={addSubtask}
        remove={removeSubtask}
        changeState={changeStateSubtasks}
        openModal={openModalSubtask}
      />
      <TodoEditSubtask
        active={activeModalSubtask}
        setActive={setActiveModalSubtask}
        value={value}
        setValue={setValue}
        changeNameSubtasks={changeNameSubtasks}
      />
      <Message message={message} setMessage={setMessage} />
    </>
  );
};

export default TodoList;
