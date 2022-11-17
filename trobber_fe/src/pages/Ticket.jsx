import React from "react";
import styles from "../css/ticket.module.css";

const Ticket = ({ country }) => {
  const countries = {
    PARIS: "FRA",
    NEWYORK: "USA",
    LONDON: "GBR",
    CHINA: "CHN",
  };
  return (
    <div className={styles.container}>
      <div className={styles.ticket}>
        <div className={styles.ticketHeader}>TICKET for Trobber</div>
        <div className={styles.ticketContents}>
          <img
            className={styles.country}
            src={`/images/${country}.png`}
            alt={country}
          />
          <div className={styles.info}>
            <div className={styles.upperInfo}>
              <div className={styles.startDate}>
                <span className={styles.startCountry}>KOR</span>
                <span className={styles.startDateInfo}>
                  09.01 22:29 ~ 09.02 03:11
                </span>
              </div>
              <div className={styles.split}>
                <div className={styles.divider}></div>
                <img
                  className={styles.arrow}
                  src="/images/arrow.png"
                  alt="arrow"
                />
              </div>
              <div className={styles.endDate}>
                <span className={styles.endDateInfo}>
                  09.01 22:29 ~ 09.02 03:11
                </span>
                <span className={styles.endCountry}>{countries[country]}</span>
              </div>
            </div>
            <div className={styles.task}>네트워크 구조도 완성하기</div>
          </div>
        </div>
      </div>
      <div className={styles.pass}>
        <div className={styles.passHeader}>Board Pass</div>
        <div className={styles.passContents}>
          <span className={styles.duration}>05:25:48</span>
          <img className={styles.stamp} src="/images/stamp.png" alt="stamp" />
          <span className={styles.text}>ROBBING</span>
          <span className={styles.text}>SUCCESS</span>
        </div>
      </div>
    </div>
  );
};
export default Ticket;
