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
