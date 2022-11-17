import React from "react";
import styles from "../css/home.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const goToMain = () => {
    navigate("/setting");
  };
  const onLogin = (event) => {
    goToMain();
  };
  return (
    <div className={styles.container}>
      <div className={styles.contents}>
        <img className={styles.logo} src="/images/logo.png" alt="logo" />
      </div>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={onLogin}>
          Start with Google
        </button>
        <button className={styles.button} onClick={onLogin}>
          Start with Github
        </button>
      </div>
    </div>
  );
};

export default Home;
