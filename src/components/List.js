import React, { useState } from "react";
import Form from "./Form";
import ToDo from "./ToDo";

function List() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    if (!item.text || /^\s*$/.test(item.text)) {
      return;
    }

    const newItems = [item, ...items];

    setItems(newItems);
  };

  const completeItem = (id) => {
    let updatedItems = items.map((item) => {
      if (item.id === id) {
        item.isComplete = !item.isComplete;
      }
      return item;
    });
    setItems(updatedItems);
  };
  return (
    <div>
      <h1>What do you have in mind?</h1>
      <Form onSubmit={addItem} />
      <ToDo items={items} completeItem={completeItem} />
    </div>
  );
}

export default List;
