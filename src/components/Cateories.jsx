import React from "react";
import { useState, useRef } from "react";
import useLockBodyScroll from "../hooks/useLockBodyScroll";
import styles from '../styles/categories.module.css'

function Categories({ data }) {
  const initialBadges = data.slice(0, 7);
  const [open, setOpen] = useState(false);
  const containerSearchRef = useRef(null);
  const closeSearchRef = useRef(null)

  useLockBodyScroll(open);

  function showMore() {
    setOpen(true);
  }
  function closeMore(e) {
    if (
      (containerSearchRef.current &&
        !containerSearchRef.current.contains(e.target)) ||
      closeSearchRef.current.contains(e.target)
    ) {
      setOpen(false);
    }
  }
  return (
    <>
    <svg style={{display : 'none'}}>
    <symbol id="close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M18.364 7.05L16.95 5.636 12 10.586l-4.95-4.95L5.636 7.05l4.95 4.95-4.95 4.95 1.414 1.414 4.95-4.95 4.95 4.95 1.414-1.414-4.95-4.95 4.95-4.95z" clip-rule="evenodd"></path></symbol>
    <symbol id="moreHoriz" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M16 12c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2-2 .9-2 2zm-4-2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm-8 2c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2z" clip-rule="evenodd"></path></symbol>
    </svg>
      <div className={styles.categories}>
        {initialBadges.map((category) => {
          return (
            <div className={styles.containerCategory} key={category.id}>
              <div>
                <img
                  src={category.icon}
                  className={styles.category}
                />
              </div>
              <p>{category.title}</p>
            </div>
          );
        })}
        <div className={styles.containerCategory}>
          <div className={`${styles.category} ${styles.moreCategory}`} onClick={showMore}>
            <div className={styles.containerMore}>
            <svg style={{ width: '32px', height: '32px', fill: '#d5d5d5' }} ><use href='#moreHoriz'></use></svg>
            </div>
          </div>
          <div className={styles.modal} style={{ display: open ? "flex" : "none" }} onClick={closeMore}>
            <div className={styles.modalContent} ref={containerSearchRef}>
              <div className={styles.containerCloseModal}>
              <svg style={{ width: '32px', height: '32px', fill: 'red' }} className={styles.closeModal} onClick={closeMore} ref={closeSearchRef}><use href='#close'></use></svg>
              </div>
              <hr />
              <div className={styles.categoriesModal}>
                {data.map((category) => {
                  return (
                    <div className={styles.containerModalCategory} key={category.id}>
                      <div>
                        <img
                          src={category.icon}
                          className={styles.categoryModal}
                        />
                      </div>
                      <p>{category.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <p>بیشتر</p>
        </div>
      </div>
    </>
  );
}
export default Categories;
