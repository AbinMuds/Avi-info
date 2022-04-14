import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./ContactItem.module.css";

function ContactItem(props) {
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
        showAnimation
          ? `animate__animated animate__pulse ${classes.listItem}`
          : `${classes.listItem}`
      }
    >
      <Card className={classes.item}>
        <div className={classes.content}>
          <h3>{props.name}</h3>
          <h3>{props.email}</h3>
          <h4>{props.message}</h4>
        </div>
      </Card>
    </li>
  );
}

export default ContactItem;
