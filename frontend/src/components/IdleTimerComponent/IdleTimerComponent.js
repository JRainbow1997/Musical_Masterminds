import React, { useRef, useState } from "react";
import IdleTimer from "react-idle-timer";
import Modal from "react-modal";
import { useHistory } from "react-router-dom";
import "./IdleTimerComponent.css";

Modal.setAppElement("#root");

const IdleTimerContainer = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const idleTimerRef = useRef(null);
  const sessionTimeOutRef = useRef(null);
  const history = useHistory();

  const onIdle = () => {
    console.log("User is idle");
    setModalIsOpen(true);
    sessionTimeOutRef.current = setTimeout(logOut, 30000); // 30 seconds
  };

  const stayActive = () => {
    setModalIsOpen(false);
    clearTimeout(sessionTimeOutRef.current);
    console.log("User is active");
  };

  const logOut = () => {
    setModalIsOpen(false);
    setIsLoggedIn(false);
    clearTimeout(sessionTimeOutRef.current);
    history.push('/signout')
    console.log("User has logged out");
  };

  return (
    <div>
      <Modal overlayClassName="overlay" isOpen={modalIsOpen}>
        <h2>You've been idle for a while!</h2>
        <p>You will be logged out soon</p>
        <div>
          <button onClick={logOut}>Sign me out</button>
          <button onClick={stayActive}>Keep me signed in</button>
        </div>
      </Modal>
      <IdleTimer
        ref={idleTimerRef}
        timeout={1800000} //30 minutes
        onIdle={onIdle}
      ></IdleTimer>
    </div>
  );
};

export default IdleTimerContainer;
