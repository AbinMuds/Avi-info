import React, { useState } from "react";
import "./List.css";

function List(props) {
  const [showAnimation, setShowAnimation] = useState(false);
  return (
    <li
      onMouseEnter={() => {
        setShowAnimation(true);
      }}
      onMouseLeave={() => {
        setShowAnimation(false);
      }}
      class={
        showAnimation ? "animate__animated animate__heartBeat item" : "item"
      }
    >
      {props.children}
    </li>
  );
}

export default List;
