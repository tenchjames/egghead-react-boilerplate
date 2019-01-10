import React from "react";
import { hot } from "react-hot-loader";

const a = "A";

class App extends React.Component {
  state = {
    count: 0
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Hello World!</h1>
        <img src="./logo.png" alt="company logo" />
        <h2 className={count > 10 ? "warning" : null}>Count: {count}</h2>
        <button
          onClick={() => this.setState(state => ({ count: state.count + 1 }))}
        >
          +
        </button>
        <button
          onClick={() => this.setState(state => ({ count: state.count - 1 }))}
        >
          -
        </button>
      </div>
    );
  }
}

export default hot(module)(App);
