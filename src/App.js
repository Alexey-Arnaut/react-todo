import { Route } from "react-router";

import Home from "./pages/home";

function App() {
  return (
    <>
      <Route exact path="/:folderId" component={Home} />
    </>
  );
}

export default App;
