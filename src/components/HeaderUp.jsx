import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectUser } from "../store/userSlice";
import { selectCartProducts } from "../store/cartSlice";
import ButtonCart from "./ButtonCart";
import { addCommas } from "../utils/addCommas";
import { toFarsiNumber } from "../utils/toFa";
import useLockBodyScroll from "../hooks/useLockBodyScroll";
import styles from '../styles/headerUp.module.css'


function HeaderUp() {
  const { name } = useSelector(selectUser);
  const cartProducts = useSelector(selectCartProducts);
  const [showDisplayNavbar, setShowDisplayNavbar] = useState(false);
  const [totalQuantity, setTotalQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [show, setShow] = useState(false);
  const containerSearchRef = useRef(null);

  useLockBodyScroll(showDisplayNavbar)

  useEffect(() => {
    function closeSearch(event) {
      if (
        (containerSearchRef.current &&
          !containerSearchRef.current.contains(event.target))
      ) {
        setShow(false);
      }
    }
    document.addEventListener("click", closeSearch);

    return () => {
      document.removeEventListener("click", closeSearch);
    }
  }, []);

  useEffect(() => {
    let totalQuantity = 0;
    let totalPrice = 0;
    Object.values(cartProducts).map(item => {
      totalQuantity += item.quantity;
      totalPrice += item.price * item.quantity;
    });

    setTotalQuantity(totalQuantity);
    setTotalPrice(totalPrice);
  }, [cartProducts]);

  function showDisplay() {
    setShowDisplayNavbar(true)
  }
  function hideDisplay() {
    setShowDisplayNavbar(false)
  }

  const stylesForSearch = {
    popup: {
      backgroundColor: show ? "white" : "#f1f1f1",
      border: show ? "1px solid #d5d5d5" : "",
      borderBottomRightRadius: show ? "0" : "",
      borderBottomLeftRadius: show ? "0" : "",
      borderBottom: show ? "0" : "",
    },
  };

  function openSearch() {
    setShow(true);
  }
  const StyleForSearchIcon = {
    fontSize: '24px',
    color: '#868686'
  };
  const StyleForCartIcon = {
    fontSize: '24px',
    color: '#000'
  };
  return (
    <>
      <div className={styles.upHeader}>
        <div className={styles.rightSideHeaderUp}>
          <div className={styles.logoDigikala}>
            <img src="../public/images/logo.svg" />
          </div>
          <div
            ref={containerSearchRef}
            className={styles.containerSearch}
            onClick={openSearch}
            style={stylesForSearch.popup}
          >
            <i className="cube-action-search" style={StyleForSearchIcon}></i>
            <input type="search" className={styles.inputSearch} placeholder="جستجو" />
            <div
              className={styles.bottomSearchFocus}
              style={{ display: show ? "block" : "none" }}
            ></div>
          </div>
        </div>
        <div className={styles.containerLogin}>
          <div>{
            name ?
              <button className={styles.btnLogin} style={{ overflow: 'hidden', justifyContent: 'space-between', fontSize: '11px' }}>
                <p>
                  {name}
                </p>
                <i className="cube-action-profile-outline" style={StyleForCartIcon}></i>
              </button>
              :
              <Link to='login' className={styles.btnLogin}>
                <i className="cube-action-sign-out" style={StyleForSignOutIcon}></i>
                <p className={styles.titleLogin}>ورود | ثبت نام</p>
              </Link>
          }
          </div>
          <span className="line-right"></span>
          <div className="container-add-products" onMouseOver={showDisplay} onMouseLeave={hideDisplay}>
            <div className="container-btn-cart">
              <i className="cube-shop-cart-outline" style={StyleForCartIcon}></i>
              <div className="quantity-number" style={{ display: totalQuantity !== 0 ? 'flex' : 'none' }}>{toFarsiNumber(totalQuantity)}</div>
            </div>
            <div className="add-products" style={{ display: showDisplayNavbar && totalQuantity !== 0 ? 'block' : 'none' }}>
              {Object.values(cartProducts).map((product) => {
                return (
                  <div className="modal-show-products">
                    <div style={{ display: 'flex' }}>
                      <img src={product.img} className="img-modal-products" />
                      <div>
                        <p className="title-modal-products">{product.title}</p>
                      </div>
                    </div>
                    <div className="container-bottom-products">
                      <ButtonCart product={product} />
                      <p className="price-modal-products">
                        {toFarsiNumber(addCommas(product.price * product.quantity))}
                      </p>
                    </div>
                  </div>
                )
              })}
              <div className="total-prices">
                <p>{toFarsiNumber(addCommas(totalPrice))} تومان</p>
                <button className="btn-total-prices">ثبت سفارش</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default HeaderUp;
