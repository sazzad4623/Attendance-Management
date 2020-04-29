import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Manual from "./pages/manualAttendance";

class App extends React.Component {
  render() {
    return (
      <div>
        <Manual />
      </div>
    );
  }
}

export default App;
