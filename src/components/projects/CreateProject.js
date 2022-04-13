import { Fragment, useRef, useState } from "react";
import { Prompt } from "react-router-dom";
import Card from "../UI/Card";
import LoadingSpinner from "../UI/LoadingSpinner";
import classes from "./CreateProject.module.css";

function CreateProject(props) {
  const [isEntering, setIsEntering] = useState(false);
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const linkInputRef = useRef();
  const languageInputRef = useRef();
  const descriptionInputRef = useRef();

  const submitFormHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredLink = linkInputRef.current.value;
    const enteredLanguage = languageInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

    const projectData = {
      title: enteredTitle,
      image: enteredImage,
      link: enteredLink,
      language: enteredLanguage,
      description: enteredDescription,
    };

    props.onAddProject(projectData);
  };

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
            <label htmlFor="title">Project Title</label>
            <input type="text" required id="title" ref={titleInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="image">Project Image</label>
            <input type="url" required id="image" ref={imageInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="link">Link</label>
            <input type="text" required id="link" ref={linkInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="language">Languages Used</label>
            <input type="text" required id="language" ref={languageInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              required
              rows="5"
              ref={descriptionInputRef}
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button className="btn" onClick={finishEnteringHandler}>
              Add Project
            </button>
          </div>
        </form>
      </Card>
    </Fragment>
  );
}

export default CreateProject;
