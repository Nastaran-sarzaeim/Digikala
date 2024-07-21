import React, { useEffect, useState } from "react";
import styles from '../styles/sliders.module.css'

function Sliders({ data }) {
  const [slideIndex, setSlideIndex] = useState(1);

  const showSlides = (newSlideIndex) => {
    if (newSlideIndex > data.length) {
      setSlideIndex(1);
    } else if (newSlideIndex < 1) {
      setSlideIndex(data.length);
    } else {
      setSlideIndex(newSlideIndex);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      if (slideIndex >= data.length) {
        setSlideIndex(1);
      } else {
        setSlideIndex(slideIndex + 1);
      }
    }, 5000);
  }, [slideIndex]);
  const StyleForIcon = {
    fontSize: '20px',
    color: '#868686'
  };
  return (
    <div className={styles.containerSliders}>
      <div style={{ display: 'flex', overflowX: 'scroll' }}>
        {data.map((data, index) => {
          return (
            <img
              key={data.id}
              src={data.image}
              className={`${styles.sliders} ${styles.fade} ${slideIndex === index + 1 ? styles.active : ""}`}
            />
          );
        })}
      </div>
      <button
        className={`${styles.prevSlider} ${styles.fade}`}
        onClick={() => showSlides(slideIndex - 1)}
      >
        <i className="cube-nav-chevron-right" style={StyleForIcon}></i>
      </button>
      <button
        className={`${styles.nextSlider} ${styles.fade}`}
        onClick={() => {
          showSlides(slideIndex + 1)
        }}
      >
        <i className="cube-nav-chevron-left" style={StyleForIcon}></i>
      </button>
      <div className={styles.containerDot}>
        {data.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${slideIndex === index + 1 ? styles.activeDot : ""}`}
            onClick={() => showSlides(index + 1)}
          />
        ))}
      </div>
    </div>
  );
}

export default Sliders;
