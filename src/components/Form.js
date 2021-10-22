import React, { useState } from "react";

function Form(props) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 999999),
      text: input,
    });

    setInput("");
  };
  return (
    <form className="to-do-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="drink some water"
        value={input}
        name="text"
        className="to-do-input"
        onChange={handleChange}
      />
      <button className="to-do-button">
        add item
      </button>
    </form>
  );
}

export default Form;
