import React, { Fragment, useState } from "react";
import classes from "./AboutPage.module.css";
import Container from "react-bootstrap/Container";
import { Row, Col } from "react-bootstrap";
import MyPic from "./MyPic.jpg";

function AboutPage() {
  const [toggle, setToggle] = useState(false);
  const toggleHandler = () => {
    setToggle(!toggle);
  };

  setTimeout(toggleHandler, 3000);

  return (
    <Container>
      <Row>
        <Col>
          <div className="centered">
            <h1
              className={
                toggle
                  ? "animate__animated animate__fadeInTopLeft"
                  : "animate__animated animate__fadeInTopRight"
              }
            >
              {toggle ? "I am a React Developer" : "I am a Software Developer"}
            </h1>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm={10} md={6} lg={6} xl={6} className="centered">
          <img
            className={classes.image}
            src={MyPic}
            alt="Abinash Mudbhari"
          ></img>
        </Col>
        <Col sm={10} md={10} lg={6} xl={6}>
          <h1>Abinash Mudbhari</h1>
          <p>
            Experienced enthusiastic Software Developer with strong strong
            determination of learning and implementing new Technologies in this
            changing world.
          </p>
          <h3>About me:</h3>
          <p>
            Always been fond of solving problems, even from an early age. In
            high school, I enjoyed math and I continued that dedication in
            college. Now, in my day-to-day life, I am strongly motivated and
            enthusiastic to solve problems.
          </p>
          <p>
            My background in civil engineering also provides me required
            knowledge, perspective and experience in solving problems, working
            on a technical projects with skilled as well as startups. So I
            completely left my career in Civil engineering and that led me to
            the world of programming. Now, I am constantly improving myself to
            get to a phase where I will be able to build new and innovative
            technologies.
          </p>
          <h3>Technical Skills</h3>
          {toggle && (
            <div
              className={
                toggle ? "animate__animated animate__fadeInUp" : classes.p1
              }
            >
              <p>JavaScript | Python | Java | HTML | CSS | SQL</p>
              <p>React | Redux | Django | Express | Node | Next.js</p>
            </div>
          )}
          {!toggle && (
            <div
              className={
                !toggle ? "animate__animated animate__fadeInUp" : classes.p1
              }
            >
              <p>Git | GitHub | Heroku</p>
              <p>Bootstrap | Materialize | SASS</p>
              <p>VsCode | Atom </p>
            </div>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default AboutPage;
