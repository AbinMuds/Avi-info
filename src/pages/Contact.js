import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import NewContact from "../components/contact/NewContact";
import useHttp from "../hooks/use-http";
import { addContact } from "../lib/api";

function Contact() {
  const { sendRequest, status } = useHttp(addContact);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/thankyou");
    }
  }, [history, status]);

  const addContactHandler = (contactData) => {
    sendRequest(contactData);
  };

  return (
    <NewContact
      isLoading={status === "pending"}
      onAddContact={addContactHandler}
    />
  );
}

export default Contact;
