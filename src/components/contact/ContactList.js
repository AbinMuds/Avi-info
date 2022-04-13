import React, { Fragment } from "react";
import ContactItem from "./ContactItem";
import classes from "./ContactList.module.css";

function ContactList(props) {
  return (
    <Fragment>
      <ul className={classes.list}>
        {props.contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            id={contact.id}
            name={contact.name}
            email={contact.email}
            message={contact.message}
          />
        ))}
      </ul>
    </Fragment>
  );
}

export default ContactList;
