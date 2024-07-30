import { toFarsiNumber } from "../utils/toFa";
import ScrollDraggable from "./ScrollDraggable";
import styles from '../styles/bestingProducts.module.css'


function BestingProducts({ data }) {
  const styleForIcon = {
    fontSize: '18px',
    color: 'cadetblue'
  }
  return (
    <>
      {data.products !== undefined && (
        <div className={styles.containerBestSellingProducts}>
          <div className={styles.topBestProduct}>
            <div></div>
            <h3>پرفروش‌ترین کالاها</h3>
            <div className={styles.containerBtnBestProduct}>
              <button className={styles.btnBestProduct}>مشاهده همه
              </button>
              <i className="cube-nav-arrow-left" style={styleForIcon}></i>
            </div>
          </div>
          <ScrollDraggable className={styles.bottomBestProduct} next='none' prev='none'>
            {data.products.map((product, index) => {
              return (
                <div className={styles.product} key={product.id}>
                  <div>
                    <img src={product.images} className={styles.imgProduct} />
                  </div>
                  <div className={styles.titleNumProduct}>
                    <p className={styles.numberProduct}>{toFarsiNumber(index + 1)}</p>
                    <p className={styles.titleProduct}>{product.title_fa}</p>
                  </div>
                </div>
              );
            })}
          </ScrollDraggable>
        </div>
      )}
    </>
  );
}

export default BestingProducts;
