import { Link } from "react-router-dom";
import classes from "./ThankYouPage.module.css";

const ThankYouPage = () => {
  return (
    <div className={classes.thankYou}>
      <p className="centered">
        Thank you for your message, I will be in touch shortly
      </p>
      <Link className="btn" to="/projects">
        Go to Projects
      </Link>
    </div>
  );
};

export default ThankYouPage;
