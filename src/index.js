import React from "react";
import ReactDOM from "react-dom";
import TodoList from "./TodoList";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <TodoList />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
