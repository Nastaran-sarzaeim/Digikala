import React from "react";
import styles from '../styles/twoBanner.module.css'

function TwoBanner({ data, width, height }) {
  return (
    <>
      <div className={styles.contanierTwoBox}>
        {data.map((img) => {
          return (
            <img
              key={img.id}
              src={img.image}
              className={styles.box}
              style={{ height, width }}
            />
          );
        })}
      </div>
    </>
  );
}
export default TwoBanner;
