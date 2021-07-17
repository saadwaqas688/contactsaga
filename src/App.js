import React from "react";

// bring Provider from react-redux, it's the bridge for connecting react to redux
import { Provider } from "react-redux";

// Bring the redux store too
import store from "./redux/store";

// Components
import Todo from "./components/Todo";
import EditUser from "./components/editUser";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

const App = () => {
  return (
    // Register your redux Provider here
    <Provider store={store}>
      <Router>
        {/* <Todo /> */}
        <Switch>
          <Route exact path="/" component={Todo} />
          <Route exact path="/edit/:id" component={EditUser} />
        </Switch>
      </Router>
    </Provider>
  );
};
export default App;
