import React from "react";
import Card from "../UI/Card";
import classes from "./ContactItem.module.css";

function ContactItem(props) {
  return (
    <li>
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
