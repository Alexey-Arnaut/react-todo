import React from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getFolders,
  deleteFolder,
  changeNameFolder,
} from "../../store/slices/folderSlice";
import { getTodos } from "../../store/slices/todoSlice";
import { useHistory, useLocation } from "react-router";

import Folder from "./folder";
import FolderEdit from "./FolderEdit";
import FolderRemove from "./FolderRemove";

import "./folders.scss";

const FolderList = () => {
  const dispatch = useDispatch();
  const folders = useSelector((state) => state.folders.folders);
  const user = useSelector((state) => state.user.user);
  const { push } = useHistory();
  const { pathname } = useLocation();
  const [activeModalRemove, setActiveModalRemove] = React.useState(false);
  const [activeModalEdit, setActiveModalEdit] = React.useState(false);
  const [folderId, setFolderId] = React.useState("");
  const [value, setValue] = React.useState("");

  React.useEffect(() => {
    dispatch(getFolders(user));
  }, [dispatch, user]);

  const activeTodos = (id) => {
    dispatch(getTodos(id));
  };

  const openModalRemove = (id) => {
    setActiveModalRemove(true);
    setFolderId(id);
  };

  const openModalEdit = (id, title) => {
    setActiveModalEdit(true);
    setValue(title);
    setFolderId(id);
  };

  const removeFolder = () => {
    dispatch(deleteFolder(folderId));
    setActiveModalRemove(false);
    push("/react-todo/");
  };

  const changeName = (e) => {
    e.preventDefault();

    if (value.trim("").length > 0) {
      const params = {
        title: value.replace(/ +/g, " ").trim(),
        id: folderId,
      };
      dispatch(changeNameFolder(params));
    }
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
          openModalRemove={openModalRemove}
          openModalEdit={openModalEdit}
        />
      ))}
      <FolderEdit
        active={activeModalEdit}
        setActive={setActiveModalEdit}
        value={value}
        setValue={setValue}
        onSubmit={changeName}
        onClick={changeName}
      />
      <FolderRemove
        active={activeModalRemove}
        setActive={setActiveModalRemove}
        removeFolder={removeFolder}
        setActiveModalRemove={setActiveModalRemove}
      />
    </div>
  );
};

export default FolderList;
