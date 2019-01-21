import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cigars from "./pages/Cigars";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Cigars} />
          <Route exact path="/cigars" component={Cigars} />
          <Route exact path="/cigars/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
