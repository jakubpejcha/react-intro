import React from "react";

function ToDoItem(props) {
  const [lineThrough, setLineThrough] = React.useState(false);

  return (
    <div
      onClick={() => {
        props.onChecked(props.id);
      }}
    >
      <li>{props.item}</li>
    </div>
  );
}

export default ToDoItem;
