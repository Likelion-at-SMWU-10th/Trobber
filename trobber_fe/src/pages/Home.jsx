import React from "react";
import styles from "../css/home.module.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  // const [visibility, setVisibility] = useState(false);

  const goToMain = () => {
    navigate("/setting");
  };
  const onLogin = (event) => {
    goToMain();
  };

  // const toggleMenu = () => {
  //   setVisibility(!visibility);
  // };
  // const handleMouseDown = (event) => {
  //   toggleMenu();
  // };
  return (
    <>
      {/* <Mypage handleMouseDown={handleMouseDown} visibility={visibility} /> */}
      <div className={styles.container}>
        {/* <button onClick={handleMouseDown}>click!</button> */}
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
    </>
  );
};

export default Home;
