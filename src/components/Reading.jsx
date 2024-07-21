import styles from '../styles/reading.module.css'

function Reading({ data }) {
  const initialBadges = data.news.slice(0, 4);
  const StyleForIcon = {
    fontSize: '18px',
    color: 'cadetblue'
  };
  return (
    <>
      <div className={styles.containerReadings}>
        <div className={styles.topReading}>
          <h3>خواندنی‌ها</h3>
          <div className={styles.containerBtnReading}>
          <button className={styles.btnReading}>
            مطالب بیشتر در دیجی‌کالا مگ
          </button>
          <i className='cube-nav-arrow-left' style={StyleForIcon}></i>
          </div>
        </div>
        <div className={styles.bottomReading}>
          {initialBadges.map((news, index) => {
            return (
              <div className={styles.imgDesReading} key={index}>
                <div>
                  <img src={news.image} className={styles.imgReading}/>
                </div>
                <p className={styles.desReading}>{news.title}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Reading;
