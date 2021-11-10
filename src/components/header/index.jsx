import { useLocation } from "react-router";
import { useSelector } from "react-redux";

import "./header.scss";

const Header = () => {
  const { pathname } = useLocation();
  const folders = useSelector((state) => state.folders.folders).find(
    (folder) => folder.id === pathname.slice(1)
  );

  const activeFolder =
    pathname === "/react-todo/" ? "Задачи" : folders && folders.title;

  return (
    <div className="header">
      <h1 className="header__title">{activeFolder}</h1>
    </div>
  );
};

export default Header;
