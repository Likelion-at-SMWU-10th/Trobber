import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../css/countries.module.css";
import "./Countries.css";

function Countries({ isStarted }) {
  const stylesProps = {
    upperTransform: [0, -4], //not started, started
    bottomTransform: [0, -14.8],
    ImageTransform: [0, 5],
    fontColor: ["#000000", "#FFFFFF"],
    subFontSize: ["1rem", "0.8rem"],
    subFontWeight: [400, 300],
    mainFontSize: ["2rem", "1.7rem"],
  };
  return (
    <Carousel indicators={false} interval={null} controls={!isStarted}>
      {/* 일본 */}
      <Carousel.Item id="JAPAN">
        <div>
          <div
            className={styles.upperInfo}
            style={{
              transform: `translateY(${
                isStarted
                  ? stylesProps.upperTransform[1]
                  : stylesProps.upperTransform[0]
              }em)`,
              color: `${
                isStarted ? stylesProps.fontColor[1] : stylesProps.fontColor[0]
              }`,
            }}
          >
            <span
              className={styles.weather}
              style={{
                fontSize: `${
                  isStarted
                    ? stylesProps.subFontSize[1]
                    : stylesProps.subFontSize[0]
                }`,
                fontWeight: `${
                  isStarted
                    ? stylesProps.subFontWeight[1]
                    : stylesProps.subFontWeight[0]
                }`,
              }}
            >
              Raining
            </span>
            <span
              className={styles.region}
              style={{
                fontSize: `${
                  isStarted
                    ? stylesProps.mainFontSize[1]
                    : stylesProps.mainFontSize[0]
                }`,
              }}
            >
              Tokyo
            </span>
          </div>
          <img
            className={styles.countryImage}
            style={{
              transform: `translateY(${
                isStarted
                  ? stylesProps.ImageTransform[1]
                  : stylesProps.ImageTransform[0]
              }em)`,
            }}
            src="/images/JAPAN.png"
            alt="Tokyo"
          />
          <div
            className={styles.bottomInfo}
            style={{
              transform: `translateY(${
                isStarted
                  ? stylesProps.bottomTransform[1]
                  : stylesProps.bottomTransform[0]
              }em)`,
              color: `${
                isStarted ? stylesProps.fontColor[1] : stylesProps.fontColor[0]
              }`,
            }}
          >
            <span
              className={styles.date}
              style={{
                fontSize: `${
                  isStarted
                    ? stylesProps.subFontSize[1]
                    : stylesProps.subFontSize[0]
                }`,
                fontWeight: `${
                  isStarted
                    ? stylesProps.subFontWeight[1]
                    : stylesProps.subFontWeight[0]
                }`,
              }}
            >
              Dec. 20
            </span>
            <span
              className={styles.time}
              style={{
                fontSize: `${
                  isStarted
                    ? stylesProps.mainFontSize[1]
                    : stylesProps.mainFontSize[0]
                }`,
              }}
            >
              23:52
            </span>
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
