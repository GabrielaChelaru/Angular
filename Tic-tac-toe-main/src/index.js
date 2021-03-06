import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import { Route, Switch } from "react-router"; // react-router v4/v5
import { ConnectedRouter } from "connected-react-router";
import configureStore, { history } from "./configureStore";
import { Home, Register, Login, Game } from "./pages";
import 'bootstrap/dist/css/bootstrap.css';

const store = configureStore(/* provide initial state if any */);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConnectedRouter history={history}>
        {" "}
        {/* place ConnectedRouter under Provider */}
        <>
          {" "}
          {/* your usual react-router v4/v5 routing */}
          <Switch>
            <Route exact path="/" render={() => <Home/>} />
            <Route exact path="/login" render={() => <Login/>} />
            <Route exact path="/game" render={() => <Game/> } />
            <Route
              exact
              path="/register"
              render={() => <Register/>}
            />
            <Route render={() => <div>Miss</div>} />
          </Switch>
        </>
      </ConnectedRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
