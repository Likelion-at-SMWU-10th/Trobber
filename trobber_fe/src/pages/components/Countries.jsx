import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../../css/countries.module.css";
import "./Countries.css";

function Countries({ isStarted, weatherService, time }) {
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
              {weatherService.weather[0]}
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
              {`${time["tokyo"][0]}. ${time["tokyo"][1]}`}
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
              {`${time["tokyo"][2]}:${time["tokyo"][3]}`}
            </span>
          </div>
        </div>
      </Carousel.Item>
      {/* 파리 */}
      <Carousel.Item id="PARIS">
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
              {weatherService.weather[1]}
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
              Paris
            </span>
          </div>
          <img
            className={styles.countryImage}
            src="/images/PARIS.png"
            alt="Paris"
            style={{
              transform: `translateY(${
                isStarted
                  ? stylesProps.ImageTransform[1]
                  : stylesProps.ImageTransform[0]
              }em)`,
            }}
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
              {`${time["paris"][0]}. ${time["paris"][1]}`}
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
              {`${time["paris"][2]}:${time["paris"][3]}`}
            </span>
          </div>
        </div>
      </Carousel.Item>
      {/* 뉴욕 */}
      <Carousel.Item id="NEWYORK">
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
              {weatherService.weather[2]}
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
              New York
            </span>
          </div>
          <img
            className={styles.countryImage}
            src="/images/NEWYORK.png"
            alt="New York"
            style={{
              transform: `translateY(${
                isStarted
                  ? stylesProps.ImageTransform[1]
                  : stylesProps.ImageTransform[0]
              }em)`,
            }}
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
              {`${time["newYork"][0]}. ${time["newYork"][1]}`}
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
              {`${time["newYork"][2]}:${time["newYork"][3]}`}
            </span>
          </div>
        </div>
      </Carousel.Item>
      {/* 베이징 */}
      <Carousel.Item id="CHINA">
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
              {weatherService.weather[3]}
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
              Beijing
            </span>
          </div>
          <img
            className={styles.countryImage}
            src="/images/CHINA.png"
            alt="Beijing"
            style={{
              transform: `translateY(${
                isStarted
                  ? stylesProps.ImageTransform[1]
                  : stylesProps.ImageTransform[0]
              }em)`,
            }}
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
              {`${time["beijing"][0]}. ${time["beijing"][1]}`}
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
              {`${time["beijing"][2]}:${time["beijing"][3]}`}
            </span>
          </div>
        </div>
      </Carousel.Item>
      {/* 런던 */}
      <Carousel.Item id="LONDON">
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
              {weatherService.weather[4]}
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
              London
            </span>
          </div>
          <img
            className={styles.countryImage}
            src="/images/LONDON.png"
            alt="London"
            style={{
              transform: `translateY(${
                isStarted
                  ? stylesProps.ImageTransform[1]
                  : stylesProps.ImageTransform[0]
              }em)`,
            }}
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
              {`${time["london"][0]}. ${time["london"][1]}`}
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
              {`${time["london"][2]}:${time["london"][3]}`}
            </span>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Countries;
