import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { getFolders } from "../../store/slices/folderSlice";
import { getTodos } from "../../store/slices/todoSlice";
import { useHistory, useLocation } from "react-router";

import Folder from "./folder";

import "./folders.scss";

const FolderList = () => {
  const dispatch = useDispatch();
  const folders = useSelector((state) => state.folders.folders);
  const user = useSelector((state) => state.user.user);
  const { push } = useHistory();
  const { pathname } = useLocation();

  React.useEffect(() => {
    dispatch(getFolders(user));
  }, [dispatch, user]);

  const activeTodos = (id) => {
    dispatch(getTodos(id));
  };

  return (
    <div className="folders">
      <Folder
        title="Задачи"
        link="/react-todo/"
        push={push}
        active={
          pathname === "/react-todo" || pathname === "/react-todo/"
            ? true
            : false
        }
        activeTodos={activeTodos}
      />
      {folders.map((folder) => (
        <Folder
          key={folder.id}
          {...folder}
          link={`/${folder.id}`}
          push={push}
          active={pathname === `/${folder.id}` ? true : false}
          activeTodos={activeTodos}
        />
      ))}
    </div>
  );
};

export default FolderList;
