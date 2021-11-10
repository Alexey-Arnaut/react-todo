import React from "react";

import { useDispatch } from "react-redux";
import { addNewFolder } from "../../store/slices/folderSlice";

import HeaderLogo from "../header/headerLogo";
import FolderList from "../folderList";
import Input from "../ui/input";

import "./navigation.scss";

const Navigation = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");

  const addFolder = (e) => {
    e.preventDefault();

    if (value.trim("").length > 0) {
      dispatch(addNewFolder(value.replace(/ +/g, " ").trim()));
      setValue("");
    }
  };

  return (
    <aside className="aside">
      <HeaderLogo />
      <FolderList />
      <Input
        className="aside__field"
        name="Введите название папки"
        value={value}
        setValue={setValue}
        onSubmit={addFolder}
      />
    </aside>
  );
};

export default Navigation;
