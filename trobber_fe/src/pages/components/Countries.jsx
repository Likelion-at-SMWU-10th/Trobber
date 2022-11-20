import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../css/countries.module.css";
import "./Countries.css";

function Countries({ isStarted }) {
  return (
    <Carousel indicators={false} interval={null} controls={!isStarted}>
      {/* 일본 */}
      <Carousel.Item id="JAPAN">
        <div>
          <div className={styles.upperInfo}>
            <span className={styles.weather}>Raining</span>
            <span className={styles.region}>Tokyo</span>
          </div>
          <img
            className={styles.countryImage}
            src="/images/JAPAN.png"
            alt="Tokyo"
          />
          <div className={styles.bottomInfo}>
            <span className={styles.date}>Dec. 20</span>
            <span className={styles.time}>23:52</span>
          </div>
        </div>
      </Carousel.Item>
      {/* 파리 */}
      <Carousel.Item id="PARIS">
        <div>
          <div className={styles.upperInfo}>
            <span className={styles.weather}>Cloudy</span>
            <span className={styles.region}>Paris</span>
          </div>
          <img
            className={styles.countryImage}
            src="/images/PARIS.png"
            alt="Paris"
          />
          <div className={styles.bottomInfo}>
            <span className={styles.date}>Nov. 20</span>
            <span className={styles.time}>12:15</span>
          </div>
        </div>
      </Carousel.Item>
      {/* 뉴욕 */}
      <Carousel.Item id="NEWYORK">
        <div>
          <div className={styles.upperInfo}>
            <span className={styles.weather}>Sunny</span>
            <span className={styles.region}>New York</span>
          </div>
          <img
            className={styles.countryImage}
            src="/images/NEWYORK.png"
            alt="New York"
          />
          <div className={styles.bottomInfo}>
            <span className={styles.date}>Oct. 30</span>
            <span className={styles.time}>22:31</span>
          </div>
        </div>
      </Carousel.Item>
      {/* 베이징 */}
      <Carousel.Item id="CHINA">
        <div>
          <div className={styles.upperInfo}>
            <span className={styles.weather}>Foggy</span>
            <span className={styles.region}>Beijing</span>
          </div>
          <img
            className={styles.countryImage}
            src="/images/CHINA.png"
            alt="Beijing"
          />
          <div className={styles.bottomInfo}>
            <span className={styles.date}>Dec. 13</span>
            <span className={styles.time}>09:12</span>
          </div>
        </div>
      </Carousel.Item>
      {/* 런던 */}
      <Carousel.Item id="LONDON">
        <div>
          <div className={styles.upperInfo}>
            <span className={styles.weather}>Raining</span>
            <span className={styles.region}>London</span>
          </div>
          <img
            className={styles.countryImage}
            src="/images/LONDON.png"
            alt="London"
          />
          <div className={styles.bottomInfo}>
            <span className={styles.date}>Apr. 01</span>
            <span className={styles.time}>10:32</span>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Countries;
