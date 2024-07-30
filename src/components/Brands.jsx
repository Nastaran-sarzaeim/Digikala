import { useRef } from "react";
import ScrollDraggable from "./ScrollDraggable";
import styles from '../styles/brands.module.css'

function Brands({ data }) {
  const containerRef = useRef(null);
  return (
    <>
      <div className={styles.containerBrans}>
        <h3 className={styles.favoriteBrands}>محبوب ترین برندها</h3>
        <ScrollDraggable className={styles.brands} ref={containerRef} next={styles.nextBrand} prev={styles.prevBrand}>
          {data.brands.map((brand) => (
            <img src={brand.logo} key={brand.id} className={styles.brand} />
          ))}
        </ScrollDraggable>
      </div>
    </>
  );
}

export default Brands;
