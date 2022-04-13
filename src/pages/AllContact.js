import React, { useEffect } from "react";
import ContactList from "../components/contact/ContactList";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "../hooks/use-http";
import { getAllContact } from "../lib/api";
import NoContactFound from "../components/contact/NoContactFound";

function AllContact() {
  const {
    sendRequest,
    status,
    data: loadedContacts,
    error,
  } = useHttp(getAllContact, true);

  useEffect(() => {
    sendRequest();
  }, [sendRequest]);

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if (error) {
    return <p className="centered focused">{error}</p>;
  }

  if (
    status === "completed" &&
    (!loadedContacts || loadedContacts.length === 0)
  ) {
    return <NoContactFound />;
  }

  return <ContactList contacts={loadedContacts} />;
}

export default AllContact;
