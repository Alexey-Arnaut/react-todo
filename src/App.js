import { Switch, Route, Redirect } from "react-router";
import { useSelector } from "react-redux";

import Login from "./pages/login";
import Registr from "./pages/registr";
import Home from "./pages/home";

function App() {
  const user = useSelector((state) => state.user.user);

  return (
    <>
      <Switch>
        <Route exact path="/react-todo/login" component={Login} />
        <Route exact path="/react-todo/registr" component={Registr} />
        {user !== null ? (
          <Route exact path="/:folderId/" component={Home} />
        ) : (
          <Redirect to="/react-todo/login" />
        )}
      </Switch>
    </>
  );
}

export default App;
