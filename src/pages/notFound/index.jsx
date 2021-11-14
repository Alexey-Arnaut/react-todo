import { Link } from "react-router-dom";
import notFound from "../../img/404.webp";
import "./not-found.scss";

const NotFound = () => {
  return (
    <div className="not-found">
      <img src={notFound} alt="" />
      <h1 className="not-found__title">Ничего не найдено</h1>
      <Link className="not-found__link" to="/react-todo/">
        Вернуться назад
      </Link>
    </div>
  );
};

export default NotFound;
