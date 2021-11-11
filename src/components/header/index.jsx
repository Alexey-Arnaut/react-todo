import { useLocation } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { signOutUser } from "../../store/slices/authSlice";

import "./header.scss";

const Header = () => {
  const { pathname } = useLocation();
  const folders = useSelector((state) => state.folders.folders).find(
    (folder) => folder.id === pathname.slice(1)
  );
  const dispatch = useDispatch();

  const signOut = () => {
    dispatch(signOutUser());

    localStorage.removeItem("user");
  };

  const activeFolder =
    pathname === "/react-todo/" ? "Задачи" : folders && folders.title;

  return (
    <div className="header">
      <h1 className="header__title">{activeFolder}</h1>
      <button className="header__button" onClick={signOut}>
        <svg
          width="40"
          height="30"
          viewBox="0 0 40 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M39.4464 16.3271L26.1124 29.4499C24.9219 30.6216 22.8583 29.8014 22.8583 28.122V20.6232H12.0641C11.0085 20.6232 10.1592 19.7874 10.1592 18.7485V11.2498C10.1592 10.2109 11.0085 9.3751 12.0641 9.3751H22.8583V1.87635C22.8583 0.204753 24.9139 -0.623235 26.1124 0.548446L39.4464 13.6713C40.1845 14.4055 40.1845 15.5928 39.4464 16.3271ZM15.2389 29.0593V25.9349C15.2389 25.4193 14.8103 24.9975 14.2864 24.9975H7.61943C6.21459 24.9975 5.07962 23.8805 5.07962 22.4979V7.50042C5.07962 6.11783 6.21459 5.00083 7.61943 5.00083H14.2864C14.8103 5.00083 15.2389 4.57903 15.2389 4.06349V0.939006C15.2389 0.423466 14.8103 0.00166133 14.2864 0.00166133H7.61943C3.41287 0.00166133 0 3.36048 0 7.50042V22.4979C0 26.6379 3.41287 29.9967 7.61943 29.9967H14.2864C14.8103 29.9967 15.2389 29.5749 15.2389 29.0593Z"
            fill="#212832"
          />
        </svg>
      </button>
    </div>
  );
};

export default Header;
