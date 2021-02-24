import React, { Component } from "react";
import "./App.css";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

class App extends Component {
  state = {
    username: "Trinity",
  };
  usernameEventHandler = (event) => {
    this.setState({ username: event.target.value });
  };
  render() {
    return (
      <div className="App">
        <UserInput
          currentUsername={this.state.username}
          changed={this.usernameEventHandler}
        />
        <UserOutput username={this.state.username} />
      </div>
    );
  }
}

export default App;
