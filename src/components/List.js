import React, { useState } from "react";
import Form from "./Form";
import ToDo from "./ToDo";

function List() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
  };

  const removeTodo = id => {
    const removeArr = [...todos].filter(todo => todo.id !== id);
    setTodos(removeArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo;
    });
    setTodos(updatedTodos)
  };

  return (
    <div className="form-submit">
      <h1>what would you like to do?</h1>
      <Form onSubmit={addTodo} />
      <ToDo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} />
    </div>
  );
}

export default List;
