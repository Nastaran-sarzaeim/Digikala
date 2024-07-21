import React from "react";
import styles from '../styles/menuBottom.module.css'

function MenuBottom() {
    const items = [{ name: 'خانه', icon: 'cube-action-home' },
    { name: 'دسته بندی', icon: 'cube-cloud-status-outline' },
    { name: 'سبد خرید', icon: 'cube-cat-all' },
    { name: 'دیجی کالای من', icon: 'cube-action-profile-outline' }
    ]
    const StyleForIcon = {
        fontSize: '24px',
        color: '#a1a3a8'
    };
    return (
        <>
            <svg style={{ display: "none" }}>
                <symbol id="home1Fill" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 11.586v6.586a3 3 0 01-3 3H7a3 3 0 01-3-3v-6.586l-1.293 1.293-1.414-1.415L9.879 2.88a3 3 0 014.242 0l8.586 8.585-1.414 1.415L20 11.586z"></path></symbol>
                <symbol id="cartOff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M20 4h2V2h-3a1 1 0 00-1 1v1H3a1 1 0 00-.995 1.1l1 10A1 1 0 004 16h15a1 1 0 001-1V4zm-2 17a2 2 0 110-4 2 2 0 010 4zM5 21a2 2 0 110-4 2 2 0 010 4zm13-7V6H4.105l.8 8H18z" clip-rule="evenodd"></path></symbol>
                <symbol id="profileOff" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2a5 5 0 015 5v1A5 5 0 017 8V7a5 5 0 015-5zm9.996 18.908C21.572 16.318 18.096 14 12 14c-6.095 0-9.572 2.318-9.996 6.908A1 1 0 003 22h18a1 1 0 00.996-1.092zM4.188 20c.728-2.677 3.231-4 7.812-4 4.58 0 7.084 1.323 7.812 4H4.188zM9 7a3 3 0 116 0v1a3 3 0 01-6 0V7z" clip-rule="evenodd"></path></symbol>
                <symbol id="categoryOutline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M10 2H3a1 1 0 00-1 1v7a1 1 0 001 1h7a1 1 0 001-1V3a1 1 0 00-1-1zM4 9V4h5v5H4zm17 4a1 1 0 011 1v7a1 1 0 01-1 1h-7a1 1 0 01-1-1v-7a1 1 0 011-1h7zm-3.5-2a4.5 4.5 0 110-9 4.5 4.5 0 010 9zM20 6.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zM6.5 22a4.5 4.5 0 110-9 4.5 4.5 0 010 9zM9 17.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0zm6 2.5v-5h5v5h-5z" clip-rule="evenodd"></path></symbol>
            </svg>
            <div className={styles.containerMenuBottom}>
                {items.map((item, index) => {
                    return (
                        <div className={styles.menuBottom} key={index}>
                            <i className={item.icon} style={StyleForIcon}></i>
                            <p className={styles.nameMenuBottom}>{item.name}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}
export default MenuBottom