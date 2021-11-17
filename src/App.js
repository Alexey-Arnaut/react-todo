import { Switch, Route, Redirect } from "react-router";
import { useSelector } from "react-redux";

import Login from "./pages/login";
import Registr from "./pages/registr";
import ResetPassword from "./pages/resetPassword";
import Home from "./pages/home";
import NotFound from "./pages/notFound";

function App() {
  const user = useSelector((state) => state.user.user);

  return (
    <>
      <Switch>
        <Route exact path="/react-todo/login" component={Login} />
        <Route exact path="/react-todo/registr" component={Registr} />
        <Route
          exact
          path="/react-todo/reset-password"
          component={ResetPassword}
        />
        {user !== null ? (
          <Route exact path="/:folderId/" component={Home} />
        ) : (
          <Redirect to="/react-todo/login" />
        )}
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;
