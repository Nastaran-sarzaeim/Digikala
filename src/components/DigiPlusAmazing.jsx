import { toFarsiNumber } from "../utils/toFa";
import styles from '../styles/digiplusAmazing.module.css'


function DigiPlusAmazing({ data }) {
    const stylesForArrow = {
        fontSize: '18px',
        color: '#029a49'
    }
    return (
        <>
            <svg style={{ display: "none" }}>
                <symbol id="arrowLeft" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M11.293 19.707l1.414-1.414L7.414 13H20v-2H7.414l5.293-5.293-1.414-1.414-7 7a1 1 0 000 1.414l7 7z" clip-rule="evenodd"></path></symbol>
            </svg>
            <div className={styles.containerDigiPlusAmazing}>
                <div className={styles.rightSideDigiPlus}>
                    <div className={styles.titleDigiPlusAmazing}>{data.title}</div>
                    <div className={styles.offerDigiPlus}> تا {toFarsiNumber(data.discount_percent)}٪ تخفیف</div>
                </div>
                <div className={styles.leftSideDigiPlus}>
                    <div className={styles.itemsDigiPlus}>
                        {data.products.map((product) => {
                            return (
                                <div className={styles.containerItems} key={product.id}>
                                    <img src={product.images} className={styles.itemDigiPlus} />
                                    <div className={styles.itemOffDigiPlus}>{toFarsiNumber(product.data_layer.dimension2)}٪</div>
                                </div>
                            )
                        })}
                    </div>
                    <div className={styles.containerBtnDigiPlus}>
                        <button className={styles.btnDigiPlus}>بیش از ۳۰ کالا
                        </button>
                        <i className="cube-nav-arrow-left" style={stylesForArrow}></i>
                    </div>
                    <div className={styles.btnDigiPlusResponsive}>
                        <i className="cube-nav-arrow-left" style={stylesForArrow}></i>
                    </div>
                </div>
            </div>
        </>
    );

}
export default DigiPlusAmazing