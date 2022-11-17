import React from "react";
import styles from "../css/home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src="/images/logo.png" alt="logo" />
      <div className={styles.buttons}>
        <button className={styles.button}>Start with Google</button>
        <button className={styles.button}>Start with Github</button>
      </div>
    </div>
  );
};

export default Home;
