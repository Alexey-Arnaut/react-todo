import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { addNewFolder } from "../../store/slices/folderSlice";

import HeaderLogo from "../header/headerLogo";
import FolderList from "../folderList";
import Input from "../ui/input";
import Message from "../message";

import "./navigation.scss";

const Navigation = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [value, setValue] = React.useState("");
  const [active, setActive] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const addFolder = (e) => {
    e.preventDefault();

    if (value.trim("").length > 0) {
      const params = {
        title: value.replace(/ +/g, " ").trim(),
        userId: user,
      };

      dispatch(addNewFolder(params));
      setValue("");
    } else {
      setMessage("empty-field");
    }
  };

  return (
    <aside className={`aside ${active ? "aside--active" : ""}`}>
      <Message message={message} setMessage={setMessage} />
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
      <button className="aside__button" onClick={() => setActive(!active)}>
        <svg
          width="17"
          height="30"
          viewBox="0 0 17 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.01736e-06 27.4798L2.10823e-06 2.52349C2.20632e-06 0.279518 2.63574 -0.842465 4.17241 0.740895L16.2825 13.219C17.2391 14.2047 17.2391 15.7985 16.2825 16.7737L4.1724 29.2519C2.63574 30.8457 9.19269e-07 29.7237 1.01736e-06 27.4798Z"
            fill="#212832"
          />
        </svg>
      </button>
    </aside>
  );
};

export default Navigation;
