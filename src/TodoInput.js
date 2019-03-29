import React from "react";

function TodoInput({ input, handleChange, handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="" value={input} onChange={handleChange} />
    </form>
  );
}

export default TodoInput;
