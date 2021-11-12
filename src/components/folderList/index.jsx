import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { getFolders, deleteFolder } from "../../store/slices/folderSlice";
import { getTodos } from "../../store/slices/todoSlice";
import { useHistory, useLocation } from "react-router";

import Folder from "./folder";
import Modal from "../ui/modal";
import Button from "../ui/button";

import "./folders.scss";

const FolderList = () => {
  const dispatch = useDispatch();
  const folders = useSelector((state) => state.folders.folders);
  const user = useSelector((state) => state.user.user);
  const [active, setActive] = React.useState(false);
  const [folderId, setFolderId] = React.useState("");
  const { push } = useHistory();
  const { pathname } = useLocation();

  React.useEffect(() => {
    dispatch(getFolders(user));
  }, [dispatch, user]);

  const activeTodos = (id) => {
    dispatch(getTodos(id));
  };

  const openModal = (id) => {
    setActive(true);
    setFolderId(id);
  };

  const removeFolder = () => {
    dispatch(deleteFolder(folderId));
    setActive(false);
    push("/react-todo/");
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
          openModal={openModal}
        />
      ))}
      <Modal active={active} setActive={setActive}>
        <h2 className="folders__title">
          Вы действительно хотите удалить папку и все задачи связанные с ней?
        </h2>
        <div className="folders__buttons">
          <Button onClick={removeFolder} className="folders__button">
            Да
          </Button>
          <Button onClick={() => setActive(false)} className="folders__button">
            Нет
          </Button>
        </div>
      </Modal>
    </div>
  );
};

export default FolderList;
