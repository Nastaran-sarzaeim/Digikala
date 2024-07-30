import React, { useEffect, useState } from "react";
import useLockBodyScroll from "../hooks/useLockBodyScroll";
import styles from '../styles/headerDown.module.css'


function HeaderDown({ data }) {
  const [showDisplayNavbar, setShowDisplayNavbar] = useState(false);
  const [activeMenuItemIndex, setActiveMenuItemIndex] = useState(0);

  useLockBodyScroll(showDisplayNavbar)

  useEffect(() => {
    function scrollWindow() {
      if (showDisplayNavbar) {
        window.scrollTo(0, 0)
      }
    }
    scrollWindow()
  }, []);
  const navbarTitle = [{ title: "شگفت انگیزها", icon: 'cube-badge-amazing' }, { title: "سوپرمارکت", icon: 'cube-badge-end-soon' }, { title: "کارت هدیه", icon: 'cube-action-gift-card' }, { title: "پرفروش ترین ها", icon: 'cube-action-search-trend' },]
  const navbarTitle2 = ["سوالی دارید", "در دیجی کالا بفروشید"];
  const handleMouseOver = index => () => {
    setActiveMenuItemIndex(index);
  };
  const handleMouseOut = index => () => {
    setActiveMenuItemIndex(index);
  };
  function showDisplay() {
    setShowDisplayNavbar(true)
  }
  function hideDisplay() {
    setShowDisplayNavbar(false)
  }
  const StyleForIcon = {
    fontSize: '24px',
  };
  const StyleForMenuIcon = {
    fontSize: '18px',
    color: '#000'
  };
  const StyleForNavbarIcon = {
    fontSize: '18px',
    color: '#868686'
  };
  return (
    <>
      <div className={styles.downHeader}>
        <div className={styles.rightSideHeaderDown}>
          <div className={`${styles.itemNavbar} ${styles.kala}`} onMouseOver={showDisplay} onMouseLeave={hideDisplay}>
            <i className="cube-nav-menu" style={StyleForMenuIcon}></i>
            <p className={styles.titleNavbarKala}>دسته بندی کالاها</p>
            <div className={styles.displayKala} style={{ display: showDisplayNavbar ? 'block' : 'none' }}>
              <div className={styles.navbarModal}>
                <div className={styles.rightSideNavbarModal}>
                  {data.map((item, index) => {
                    return (
                      <div className={styles.containerNavbarModal} key={item.id}>
                        <div className={styles.itemsNavbarModal} onMouseOver={handleMouseOver(index)} onMouseOut={handleMouseOut} style={{
                          backgroundColor: activeMenuItemIndex === index ? '#fff' : '',
                          color: activeMenuItemIndex === index ? 'red' : '',
                          cursor: 'pointer',
                          border: activeMenuItemIndex == index ? '1px solid #d5d5d5' : '1px solid transparent',
                        }}>
                          <i className={item.icon} style={{ color: activeMenuItemIndex === index ? 'red' : '' }}></i>
                          <p className={styles.itemNavbarModal} >
                            {item.title}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className={styles.leftSideNavbarModal}>
                  <div className={styles.titleNavbarItem}>همه محصولات {data.length > 0 && data[activeMenuItemIndex].title}</div>
                  <div className={styles.parentNavbarItem}>
                    {data.length > 0 && data[activeMenuItemIndex].children.map((child, index) => {
                      return (
                        <div className={styles.childrenNavbarModal} key={child.id}>
                          <div className={styles.containerChildNavbar}>
                            <p className={styles.childNavbar}>{child.title}</p>
                            <i className="cube-nav-chevron-left" style={StyleForIcon}></i>
                          </div>
                          <div>
                            {(child.children !== null && child.children) && child.children.map((lastChild, index) => {
                              return (
                                <p className={styles.lastChildNavbar} key={lastChild.id}>{lastChild.title}</p>
                              )
                            })}
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span className="line-right"></span>
          {navbarTitle.map((navbar, index) => {
            return (
              <div className={`${styles.itemNavbar} ${styles.fade}`} key={index}>
                <i className={navbar.icon} style={StyleForNavbarIcon}></i>
                <p className={styles.titleNavbar}>{navbar.title}</p>
              </div>
            );
          })}
          <span className="line-right"></span>
          {navbarTitle2.map((title, index) => {
            return (
              <div className={styles.itemNavbar} key={index}>
                <div className={styles.titleNavbar}>{title}</div>
              </div>
            );
          })}
        </div>

        <div className={styles.itemNavbarLoc}>
          <i className="cube-location-pin" style={StyleForMenuIcon}></i>
          <div className={styles.titleNavbarLoc}>
            <p>لطفا شهر خود را انتخاب کنید</p>
            <p className={styles.titleNavbarLocHover}>
              لطفا شهر خود را انتخاب کنید
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default HeaderDown;
