import React from "react";
import { useRef, useState, useEffect } from "react";
import { toFarsiNumber } from '../utils/toFa'
import ScrollDraggable from "./ScrollDraggable";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, selectCartProducts } from "../store/cartSlice";
import ButtonCart from "./ButtonCart";
import { addCommas } from "../utils/addCommas";
import styles from '../styles/offer.module.css'


function Offer({ data }) {
  const dispatch = useDispatch()
  const containerRef = useRef(null);
  const cartProducts = useSelector(selectCartProducts);
  const [changeBtn, setChageBtn] = useState(null)
  const [timeRemaining, setTimeRemaining] = useState(12 * 60 * 60);
  const hours = Math.floor(timeRemaining / 3600);
  const minutes = Math.floor((timeRemaining % 3600) / 60);
  const seconds = timeRemaining % 60;

  useEffect(() => {
    const timerId = setInterval(() => {
      if (timeRemaining > 0) {
        setTimeRemaining(prevTime => prevTime - 1);
      } else {
        clearInterval(timerId);
      }
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const addToCartHandler = (product) => {
    setChageBtn((prevCartProducts) => ({
      ...prevCartProducts,
      [product.id]: product,
    }))
    const price = product.default_variant.price.selling_price
    const img = product.images
    const { id, title_fa } = product
    dispatch(addToCart({ id, title: title_fa, price, img }))
  }

  const StyleForIcon = {
    fontSize: '18px',
    color: '#fff'
  };
  return (
    <>
      <div className={styles.offers} >
        <ScrollDraggable ref={containerRef} className={styles.containerOffer} next={styles.nextOffer} prev={styles.prevOffer}>
          <div className={styles.offerAmazing}>
            <div>پیشنهاد شگفت انگیز</div>
            <div className={styles.containerCounterOffer}>
              <div className={styles.counterOffer}> <p className={styles.numberCounter}>{toFarsiNumber(seconds.toString().padStart(2, '0'))}</p></div>
              <p>:</p>
              <div className={styles.counterOffer}> <p className={styles.numberCounter}>{toFarsiNumber(minutes.toString().padStart(2, '0'))}</p></div>
              <p>:</p>
              <div className={styles.counterOffer}><p className={styles.numberCounter}>{toFarsiNumber(hours.toString().padStart(2, '0'))}</p></div>
            </div>
            <div>
              <img src="https://www.digikala.com/statics/img/svg/specialCarousel/Amazing.svg" alt="" />
            </div>
            <div className={styles.containerBtnAmazing}>

              <button className={styles.btnAmazing}>
                مشاهده همه
              </button>
              <i className="cube-nav-chevron-left" style={StyleForIcon}></i>
            </div>
          </div>

          {data.products.map((product) => {
            return (
              <div className={styles.offer} key={product.id}>
                <div>
                  <img
                    src={product.images}
                    className={styles.imgOffer}
                  />
                </div>
                <p className={styles.titleOffer}>{product.title_fa}</p>
                <div className={styles.priceOffer}>
                  <div className={styles.persentOffer}>
                    {toFarsiNumber(product.data_layer.dimension2)}٪
                  </div>
                  {product.default_variant.price && <p>
                    {toFarsiNumber(addCommas(product.default_variant.price.selling_price))}
                    <span className={styles.toman}>تومان</span>
                  </p>}
                  
                </div>
                {product.default_variant.price && <p className={styles.offOffer}>
                  {toFarsiNumber(addCommas(product.default_variant.price.rrp_price))}
                </p>}
                
                {
                  cartProducts[product.id] ?
                    <ButtonCart product={cartProducts[product.id]} /> :
                    <div className={styles.containerAddToCart}>
                      <button className={styles.addToCart} onClick={() => addToCartHandler(product)}>
                        <i className="cube-shop-cart-outline" style={StyleForIcon}></i>
                      </button>
                    </div>}
              </div>
            );
          })}
        </ScrollDraggable>
      </div>
    </>
  );
}
export default Offer;
