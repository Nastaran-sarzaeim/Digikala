import { toFarsiNumber } from "../utils/toFa";
import ScrollDraggable from "./ScrollDraggable";
import styles from '../styles/bestingProducts.module.css'


function BestingProducts({ data }) {
  return (
    <>
      <svg style={{ display: "none" }}>
        <symbol id="arrowLeft" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M11.293 19.707l1.414-1.414L7.414 13H20v-2H7.414l5.293-5.293-1.414-1.414-7 7a1 1 0 000 1.414l7 7z" clip-rule="evenodd"></path></symbol>
      </svg>
      {data.products !== undefined && (
        <div className={styles.containerBestSellingProducts}>
          <div className={styles.topBestProduct}>
            <div></div>
            <h3>پرفروش‌ترین کالاها</h3>
            <div className={styles.containerBtnBestProduct}>
              <button className={styles.btnBestProduct}>مشاهده همه
              </button>
              <svg style={{ width: '18px', height: '18px', fill: 'cadetblue' }} ><use href='#arrowLeft'></use></svg>
            </div>
          </div>
          <ScrollDraggable className={styles.bottomBestProduct} next='none' prev='none'>
            {data.products.map((product, index) => {
              return (
                <div className={styles.product} key={product.id}>
                  <div>
                    <img src={product.images.main.url[0]} className={styles.imgProduct} />
                  </div>
                  <div className={styles.titleNumProduct}>
                    <p className={styles.numberProduct}>{toFarsiNumber(index + 1)}</p>
                    <p className={styles.titleProduct}>{toFarsiNumber(product.title_fa)}</p>
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
