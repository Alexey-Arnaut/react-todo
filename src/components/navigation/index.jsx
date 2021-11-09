import React from "react";

import HeaderLogo from "../header/headerLogo";
import FolderList from "../folderList";
import Input from "../ui/input";

import "./navigation.scss";

const Navigation = () => {
  const [value, setValue] = React.useState("");

  return (
    <aside className="aside">
      <HeaderLogo />
      <FolderList />
      <Input
        className="aside__field"
        name="Введите название папки"
        value={value}
        setValue={setValue}
      />
    </aside>
  );
};

export default Navigation;
