import React, { useState } from "react";
// import Form from "./Form";
import { FiEdit3 } from "react-icons/fi";
import { RiCloseCircleLine } from "react-icons/ri";

function ToDo({items, completeItem}) {
  const [edit, setEdit] = useState({
    id: null,
    value: ""
  })

  return items.map((item, index) => (
    <div
      className={item.isComplete ? "item-row complete" : "item-row"}
      key={index}
    >
      <div key={item.id} onClick={() => completeItem(item.id)}>
        {item.text}
      </div>
      <div className="icons">
        <RiCloseCircleLine 
        className="delete-icon"
        onClick={ () => removeItem(item.id)}
            />
        <FiEdit3 />
      </div>
    </div>
  ));
}

export default ToDo;
