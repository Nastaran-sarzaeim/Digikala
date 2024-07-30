import React from "react";
import HeaderUp from "./HeaderUp";
import HeaderDown from "./HeaderDown";
import MenuBottom from "./MenuBottom";
import styles from '../styles/header.module.css'
import image from '../assets/images/2e92fe027b295c400947fa9dad93dd1fc33dd1a0_1720880178.gif'

function Header({data}) {
    return (
        <>
            <header className={styles.header}>
                <img className={styles.advertise} src={image} alt="" />
                <HeaderUp />
                <HeaderDown data={data}/>
                <MenuBottom />
            </header>
        </>
    )
}
export default Header