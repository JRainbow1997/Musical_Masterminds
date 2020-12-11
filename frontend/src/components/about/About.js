import React from "react";
import IdleTimerContainer from "../IdleTimerComponent/IdleTimerComponent";
import "./About.css";

const About = () => {
  return (
    <div className="about-wrapper">
      <IdleTimerContainer />
      <section className="split">
        <div className="screen">
          <div className="content">
            <div className="content-text">
              <h2>About</h2>
              <p>
                Musical Masterminds is a student built website, that allows users
                to create an account with signup, to log in with signin and then
              take part in a Musical Theatre themed quiz, using an API url from{" "}
                <a target="#" href="https://opentdb.com">
                  opentdb.
              </a>
              </p>
              <p>
                The user can select the difficulty of the questions, ranging from
                Easy / Medium / Hard, to suit their preferences and test their
                knowledge. The user can also input how many questions they would
                like to answer.
            </p>
              <p>
                This project was built by Josh, Maddy, and Joe. Students who are
                partaking in the CodeNation Master: Coding course, an intense
                online bootcamp, designed for an in-depth look at full-stack
              development. For more information on CodeNation, please visit{" "}
                <a target="#" href="https://wearecodenation.com/">
                  wearecodenation.com
              </a>
              </p>
            </div>
          </div>
        </div>
        <div className="screen1">
          <div className="content1">
            <h2>MERN Project</h2>
            <br />
            <h4>What is MERN?</h4>
            <br />
            <p>
              MERN stack is the combination of MongoDB, Express, React, and
              Node.js.
            </p>
            <br />
            <h4>MongoDB</h4>
            <br />
            <p>
              MongoDB is a very popular database used in the MERN stack. In
              simple words, it is a database which facilitates online storage.
              It is a NoSQL document-oriented database, with flexible schema and
              JSON-based query language.
            </p>
            <br />
            <h4>Express</h4>
            <br />
            <p>
              Express is the framework that simplifies the task of writing your
              server code. The Express framework allows you to define routes,
              specifications on what to do when an HTTP request matching a
              certain pattern arrives.
            </p>
            <br />
            <h4>React</h4>
            <br />
            <p>
              React anchors the MERN stack. In a sense, this is the defining
              component of the MERN stack. React is an open-source JavaScript
              library maintained by Facebook that can be used to create views
              rendered in HTML.
            </p>
            <br />
            <h4>Node.js</h4>
            <br />
            <p>
              Node.js is JavaScript outside of a browser. The creators of
              Node.js just used Chrome’s V8 JavaScript engine and made it work
              independently as a JavaScript runtime engine. If you are familiar
              with the Java runtime that runs Java programs, you can easily
              associate with the JavaScript runtime: the Node.js runtime runs
              JavaScript programs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
