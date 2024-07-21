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
    const img = product.images.main.url[0]
    const { id, title_fa } = product
    dispatch(addToCart({ id, title: title_fa, price, img }))
  }

  const StyleForIcon = {
    fontSize: '18px',
    color: '#fff'
  };
  return (
    <>
      <svg style={{ display: 'none' }}>
        <symbol id="cartOff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M20 4h2V2h-3a1 1 0 00-1 1v1H3a1 1 0 00-.995 1.1l1 10A1 1 0 004 16h15a1 1 0 001-1V4zm-2 17a2 2 0 110-4 2 2 0 010 4zM5 21a2 2 0 110-4 2 2 0 010 4zm13-7V6H4.105l.8 8H18z" clip-rule="evenodd"></path></symbol>
        <symbol id="chevronLeft" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></symbol>
      </svg>
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
                    src={product.images.main.url[0]}
                    className={styles.imgOffer}
                  />
                </div>
                <p className={styles.titleOffer}>{product.title_fa}</p>
                <div className={styles.priceOffer}>
                  <div className={styles.persentOffer}>
                    {toFarsiNumber(product.default_variant.price.discount_percent)}٪
                  </div>
                  <p>
                    {toFarsiNumber(addCommas(product.default_variant.price.selling_price))}
                    <span className={styles.toman}>تومان</span>
                  </p>
                </div>
                <p className={styles.offOffer}>
                  {toFarsiNumber(addCommas(product.default_variant.price.rrp_price))}
                </p>
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
