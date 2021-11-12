import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { addNewFolder } from "../../store/slices/folderSlice";

import HeaderLogo from "../header/headerLogo";
import FolderList from "../folderList";
import Input from "../ui/input";

import "./navigation.scss";

const Navigation = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [value, setValue] = React.useState("");

  const addFolder = (e) => {
    e.preventDefault();

    if (value.trim("").length > 0) {
      const params = {
        title: value.replace(/ +/g, " ").trim(),
        userId: user,
      };

      dispatch(addNewFolder(params));
      setValue("");
    }
  };

  return (
    <aside className="aside">
      <HeaderLogo />
      <FolderList />
      <form className="aside__form" onSubmit={addFolder}>
        <Input
          name="Введите название папки"
          value={value}
          setValue={setValue}
          type="text"
        />
      </form>
    </aside>
  );
};

export default Navigation;
