import React from 'react';
import styles from './Menu.module.scss';

function Menu({
    options,
    shouldShowMenu,
    maxHeight,
    onResultClick,
    wrapperClassName,
}) {


    return (
        <ul className={`${styles.wrapper} ${wrapperClassName}`} style={{ maxHeight: maxHeight, display: shouldShowMenu ? 'block' : 'none' }}>
            {
                options.length ?
                    options.map((item, i) => (
                        <li onClick={(e) => { onResultClick(e) }} key={i} className={styles.menuItem}>{item.label}</li>
                    )) : <li className={styles.menuItem}>No result found </li>
            }
        </ul>
    )
}

export default Menu;