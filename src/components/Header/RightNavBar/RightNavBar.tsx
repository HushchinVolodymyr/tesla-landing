import React from "react";
import Image from "next/image";
import menu from '../../../../public/img/UI/menu.png'
import styles from "./RightNavBar.module.scss"

export default function RightNavBar() {
  return (
    <div className={styles.rightNavContainer}>
      <nav className={styles.navContainer}>
        <ul>Магазин</ul>
        <ul>Войти</ul>
      </nav>
      <Image src={menu} alt="menu-btn" className={styles.menuBtn}/>
    </div>
  )
}