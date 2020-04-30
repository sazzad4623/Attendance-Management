import React, { Fragment } from "react";
import logo from "./logo.svg";
import "./App.css";
import Manual from "./pages/manualAttendance";
import MiniDrawer from "./components/drawer.component";
import ResponsiveDrawer from "./components/navbar.component";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./components/homepage.component";
import StickyFooter from "./components/footer.component";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Fragment>
          {" "}
          <MiniDrawer />
          {/* <ResponsiveDrawer /> */}
          <center>
            <Route
              exact
              path="/"
              render={() => (
                <div>
                  <Homepage />
                </div>
              )}
            ></Route>
          </center>
          <Route
            path="/manualattendance"
            render={() => (
              <div>
                <Manual />
              </div>
            )}
          ></Route>
          <StickyFooter />
        </Fragment>
      </Router>
    );
  }
}

export default App;
