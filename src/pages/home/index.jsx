import Board from "../../components/board";
import Navigation from "../../components/navigation";

import "./home.scss";

const Home = () => {
  return (
    <main className="main">
      <Navigation />
      <Board />
    </main>
  );
};

export default Home;
