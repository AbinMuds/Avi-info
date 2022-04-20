import { useRef, useState, Fragment } from "react";
import { Prompt } from "react-router-dom";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./NewContact.module.css";

function NewContact(props) {
  const nameInputRef = useRef();
  const messageInputRef = useRef();
  const emailInputRef = useRef();

  const [isEntering, setIsEntering] = useState(false);

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredMessage = messageInputRef.current.value;
    const enteredEmail = emailInputRef.current.value;

    props.onAddContact({
      name: enteredName,
      message: enteredMessage,
      email: enteredEmail,
    });
  }

  const finishEnteringHandler = () => {
    setIsEntering(false);
  };

  const formFocusedHandler = () => {
    setIsEntering(true);
  };

  return (
    <Fragment>
      <Prompt
        when={isEntering}
        message={() =>
          "Are you sure You want to leave, All your entered data will be lost"
        }
      />
      <Card>
        <form
          onFocus={formFocusedHandler}
          className={classes.form}
          onSubmit={submitFormHandler}
        >
          {props.isLoading && (
            <div className={classes.loading}>
              <LoadingSpinner />
            </div>
          )}

          <div className={classes.control}>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" ref={nameInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="message">Message</label>
            <textarea id="text" rows="5" ref={messageInputRef}></textarea>
          </div>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" ref={emailInputRef} />
          </div>
          <div className={classes.actions}>
            <button onClick={finishEnteringHandler} className="btn">
              Contact
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
}

export default NewContact;
