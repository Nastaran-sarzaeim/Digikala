import styles from '../styles/fourBanner.module.css'

function FourBanner({ data, width, height }) {
  return (
    <>
      <div className={styles.contanierFourBox}>
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
export default FourBanner;
