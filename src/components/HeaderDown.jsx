import React, { useEffect, useState } from "react";
import useLockBodyScroll from "../hooks/useLockBodyScroll";
import styles from '../styles/headerDown.module.css'


function HeaderDown() {
  const [menu, setMenu] = useState([]);
  const [showDisplayNavbar, setShowDisplayNavbar] = useState(false);
  const [activeMenuItemIndex, setActiveMenuItemIndex] = useState(0);

  useLockBodyScroll(showDisplayNavbar)

  useEffect(() => {
    const url =
      "https://api.digikala.com/v1/dictionaries/?types%5B0%5D=states&types%5B1%5D=cities&types%5B2%5D=user_jobs&types%5B3%5D=mega_menu&types%5B4%5D=universal&types%5B5%5D=category_tree&types%5B6%5D=districts&types%5B7%5D=seo_content&types%5B8%5D=superapp_services&hashes%5B0%5D=1d037800a9fa9936893f7fde3dbed12d&hashes%5B1%5D=bdce19da9880f85850eb707573eeb57c&hashes%5B2%5D=4ee2c70608fae0b62a7aefe875e714e1&hashes%5B3%5D=&hashes%5B4%5D=94fbeef374349e9c40b4943e0bc3f7c5&hashes%5B5%5D=90c1cc68f84c58fd3c14b6cc885105d3&hashes%5B6%5D=359fcfd07ce7ca2db46e242cfa56db22&hashes%5B7%5D=fb766fb463a92eee243729bf0eb0e962&hashes%5B8%5D=1ef2eab7c7443015dfafa133924ff517";
    const abortController = new AbortController();
    const signal = abortController.signal;
    async function fetchNavbar() {
      const response = await fetch(url, { signal });
      const data = await response.json();
      setMenu(data.data[3].data.data);
    }
    fetchNavbar();
    function scrollWindow() {
      if (showDisplayNavbar) {
        window.scrollTo(0, 0)
      }
    }
    scrollWindow()
    return () => {
      abortController.abort()
    }
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

      <svg style={{ display: "none" }}>
        {/* <symbol id="chevronLeft" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.414 12l4.293 4.293-1.414 1.414-5-5a1 1 0 010-1.414l5-5 1.414 1.414L11.414 12z"></path></symbol> */}
        {/* <symbol id="hamburgerMenu" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M19 8V6H5v2h14zm0 3v2H5v-2h14zm0 5v2H5v-2h14z" clip-rule="evenodd"></path></symbol> */}
        {/* <symbol id="amazing" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M15.112 2.234c.687.231 1.153.525 1.895 1.171l.536.474.109.09.142.104.653.42c.837.54 1.244.9 1.663 1.495.381.542.579 1 .794 1.841l.226.941.053.185.049.142.285.719c.36.914.483 1.457.483 2.184 0 .728-.124 1.27-.483 2.184l-.246.615-.08.22-.06.211-.227.941c-.215.842-.413 1.3-.795 1.843-.416.59-.822.95-1.646 1.483l-.67.431-.14.104-.176.147-.471.417c-.742.646-1.208.94-1.898 1.172-.688.23-1.206.272-2.224.199l-.687-.052-.197-.006-.086.001-.212.01-.586.047c-1.018.073-1.537.03-2.23-.201-.686-.231-1.152-.524-1.893-1.17l-.594-.522-.144-.111-.103-.072-.619-.395c-.821-.532-1.229-.894-1.643-1.483-.417-.593-.614-1.085-.855-2.085l-.146-.621-.061-.225-.06-.179-.285-.719C2.123 13.27 2 12.729 2 12c0-.727.124-1.27.483-2.184l.285-.717.082-.258.039-.147.146-.621.118-.46c.195-.707.39-1.131.737-1.624.414-.59.82-.95 1.643-1.483l.552-.352.153-.104.16-.123.124-.105.47-.417c.743-.646 1.209-.94 1.897-1.171.69-.232 1.209-.274 2.227-.2l.7.052.228.005.275-.013.564-.044c1.02-.074 1.539-.031 2.229.2zm-1.931 1.784l-.89.065c-.105.006-.2.008-.291.008l-.275-.007-.156-.009-.563-.044-.385-.024c-.514-.024-.767.012-1.094.122l-.108.039c-.35.132-.62.313-1.138.767l-.55.486-.155.125-.142.107-.23.158-.72.462c-.517.343-.733.545-.958.866-.23.326-.347.596-.51 1.247l-.193.815-.05.19-.05.17-.094.271-.345.87C4.061 11.287 4 11.594 4 12l.002.12c.012.35.082.65.282 1.18l.37.934.07.21.074.257.219.914c.162.65.28.92.51 1.247.247.352.485.564 1.121.973l.559.356c.118.077.204.138.296.207l.073.056.241.2.464.411c.569.5.839.67 1.241.805.404.135.694.159 1.484.1l.306-.025.555-.034.133-.002c.09 0 .186.003.291.008l.166.01.536.043c.79.059 1.08.035 1.478-.098.407-.138.678-.308 1.247-.807l.387-.344.212-.182.181-.142.186-.133.108-.073.721-.462c.518-.342.735-.546.96-.866.25-.357.367-.644.554-1.431l.091-.391c.032-.138.059-.245.084-.34l.075-.26.094-.273.345-.869c.223-.587.284-.894.284-1.299 0-.405-.061-.712-.284-1.299l-.37-.934-.095-.293-.075-.274-.149-.631-.098-.39c-.109-.402-.203-.64-.34-.865l-.115-.175c-.226-.32-.441-.523-.96-.866l-.624-.4a7.664 7.664 0 01-.255-.17l-.212-.157-.155-.126-.697-.613c-.42-.357-.669-.516-.977-.634l-.218-.074c-.322-.098-.603-.12-1.195-.081zM16 15.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0zm-1.8-8.1l1.6 1.2-6 8-1.6-1.2 6-8zM11 8.5a1.5 1.5 0 10-3 0 1.5 1.5 0 003 0z" clip-rule="evenodd"></path></symbol>
        <symbol id="giftCard" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18"><path d="M11.25 10.5H15V12h-3.75v-1.5z"></path><path fill-rule="evenodd" d="M3 3h12a2.25 2.25 0 012.25 2.25v7.5A2.25 2.25 0 0115 15H3a2.25 2.25 0 01-2.25-2.25v-7.5A2.25 2.25 0 013 3zm0 1.5a.75.75 0 00-.75.75v7.5c0 .414.336.75.75.75h3v-2.69l-.97.97-1.06-1.06.988-.989A2.25 2.25 0 116 5.378V4.5H3zm3 3.75V7.5a.75.75 0 10-.75.75H6zm1.5-2.872V4.5H15a.75.75 0 01.75.75v7.5a.75.75 0 01-.75.75H7.5v-2.69l.97.97 1.06-1.06-.988-.989A2.25 2.25 0 107.5 5.378zm0 2.872h.75a.75.75 0 10-.75-.75v.75z" clip-rule="evenodd"></path></symbol>
        <symbol id="cubeBadgeEndSoon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M10 5.333V7.92L8.79 9.613l1.086.774 1.21-1.693c.16-.226.247-.497.247-.775V5.333H10z"></path><path fill-rule="evenodd" d="M10.668 13.333a5.333 5.333 0 10-.001-10.668 5.333 5.333 0 000 10.668zm0-1.333a4 4 0 10-.001-7.999 4 4 0 000 7.999z" clip-rule="evenodd"></path><path d="M2 4.67h2.668v1.333H2V4.669zM0 7.333h4.668v1.334H0V7.333zM2 10.001h2.668v1.334H2V10z"></path></symbol>
        <symbol id="searchTrend" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12.015 9.105c.222.397.41.73.466.842.361.724.519 1.31.519 2.053a2 2 0 01-4 0l.003-4.557c0-.953-1.206-1.367-1.79-.613C5.087 9.572 4 11.906 4 13.889 4 18.365 7.578 22 12 22c4.422 0 8-3.635 8-8.111 0-2.968-2.45-6.78-7.295-11.598a1 1 0 00-1.6.262c-.807 1.615-.807 3.28 0 4.894.178.356.582 1.076.91 1.658zM7 12a4 4 0 108 0c0-1.078-.238-1.962-.73-2.947-.079-.156-.31-.569-.566-1.024a50.532 50.532 0 01-.81-1.476c-.273-.546-.404-1.079-.393-1.612C16.18 8.811 18 11.834 18 13.889 18 17.267 15.31 20 12 20s-6-2.733-6-6.111c0-.87.33-1.925 1-3.154V12z" clip-rule="evenodd"></path></symbol>
        <symbol id="pin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M4 9.611C4 5.391 7.59 2 12 2s8 3.39 8 7.611c0 2.818-1.425 5.518-3.768 8.034a23.496 23.496 0 01-2.514 2.322c-.517.413-.923.706-1.166.867L12 21.2l-.552-.366c-.243-.16-.65-.454-1.166-.867a23.499 23.499 0 01-2.514-2.322C5.425 15.129 4 12.428 4 9.61zm8.47 8.794c.784-.627 1.569-1.34 2.298-2.124C16.8 14.101 18 11.827 18 9.611 18 6.521 15.33 4 12 4S6 6.522 6 9.611c0 2.215 1.2 4.49 3.232 6.67A21.536 21.536 0 0012 18.769c.148-.111.305-.233.47-.364zM12 14a4.001 4.001 0 010-8 4.001 4.001 0 010 8zm0-2a2.001 2.001 0 000-4 2.001 2.001 0 000 4z" clip-rule="evenodd"></path></symbol> */}
      </svg>
      <div className={styles.downHeader}>
        <div className={styles.rightSideHeaderDown}>
          <div className={`${styles.itemNavbar} ${styles.kala}`} onMouseOver={showDisplay} onMouseLeave={hideDisplay}>
            <i className="cube-nav-menu" style={StyleForMenuIcon}></i>
            <p className={styles.titleNavbarKala}>دسته بندی کالاها</p>
            <div className={styles.displayKala} style={{ display: showDisplayNavbar ? 'block' : 'none' }}>
              <div className={styles.navbarModal}>
                <div className={styles.rightSideNavbarModal}>
                  {menu.map((item, index) => {
                    return (
                      <div className={styles.containerNavbarModal} key={item.id}>
                        <div className={styles.itemsNavbarModal} onMouseOver={handleMouseOver(index)} onMouseOut={handleMouseOut} style={{
                          backgroundColor: activeMenuItemIndex === index ? '#fff' : '',
                          color: activeMenuItemIndex === index ? 'red' : '',
                          cursor: 'pointer',
                          border: activeMenuItemIndex == index ? '1px solid #d5d5d5' : '1px solid transparent',
                        }}>
                          <i className={item.icon} style={{color: activeMenuItemIndex === index ? 'red' : ''}}></i>
                          <p className={styles.itemNavbarModal} >
                            {item.title}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="left-side-navbar-modal">
                  <div className="title-navbar-item">همه محصولات {menu.length > 0 && menu[activeMenuItemIndex].title}</div>
                  <div className="parent-navbar-item">
                    {menu.length > 0 && menu[activeMenuItemIndex].children.map((child, index) => {
                      return (
                        <div className="children-navbar-modal" key={child.id}>
                          <div className="container-child-navbar">
                            <p className="child-navbar">{child.title}</p>
                            <i className="cube-nav-chevron-left" style={StyleForIcon}></i>
                          </div>
                          <div>
                            {child.children !== null && child.children.map((lastChild, index) => {
                              return (
                                <p className="last-child-navbar" key={lastChild.id}>{lastChild.title}</p>
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
