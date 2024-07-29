import { useEffect, useState, useRef } from "react";
import ScrollDraggable from "./ScrollDraggable";
import styles from '../styles/stories.module.css'
 
function Stories() {
  const [data, setData] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
  const url = 'https://api.digikala.com/v1/magnet/home-page/';
    const abortController = new AbortController();
    const signal = abortController.signal;
    async function stories() {
      const response = await fetch(url, { mode: 'cors'  ,signal});
      const data = await response.json();
      setData(data.data.posts);
    }
    stories();
    return () => {
      abortController.abort()
    }
  }, []);

  return (
    <>
      <div className={styles.stories}>
        <ScrollDraggable ref={containerRef} className={styles.containerStories} next={styles.nextStory} prev={styles.prevStory}>
          {data.length !== 0 &&
            data.map((d) => {
              return (
                <div className={styles.containerStory} key={d.id}>
                  <div className={styles.story}>
                    <img className={styles.imgStori} src={d.author.photo} />
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
