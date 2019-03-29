import React from "react";

function TodoItem(props) {
  const { todos } = props.state;
  const { handleDelete, handleToggle } = props;
  // const style ={textDecoration}
  const recipeItem = todos.map(todo => {
    return (
      <li
        key={todo.id}
        style={
          todo.completed
            ? { textDecoration: "underline" }
            : { textDecoration: "none" }
        }
      >
        {" "}
        <span onClick={() => handleToggle(todo.id)}> {todo.name} </span>
        <span onClick={() => handleDelete(todo.id)}> X </span>{" "}
      </li>
    );
  });

  return recipeItem;
}

export default TodoItem;
