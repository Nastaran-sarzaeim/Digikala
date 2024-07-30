import { useEffect, useState, useRef } from "react";
import ScrollDraggable from "./ScrollDraggable";
import styles from '../styles/stories.module.css'
 
function Stories({data}) {
  const containerRef = useRef(null);

  return (
    <>
      <div className={styles.stories}>
        <ScrollDraggable ref={containerRef} className={styles.containerStories} next={styles.nextStory} prev={styles.prevStory}>
          {data.length !== 0 &&
            data.map((d) => {
              return (
                <div className={styles.containerStory} key={d.id}>
                  <div className={styles.story}>
                    <img className={styles.imgStori} src={d.photo} />
                  </div>
                  <p className={styles.titleStory}>{d.title}</p>
                </div>
              );
            })}
        </ScrollDraggable>
      </div>
    </>
  );
}

export default Stories;
