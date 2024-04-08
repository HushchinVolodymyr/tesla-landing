'use client'

import styles from './CenterNavBar.module.scss'
import {useState} from "react";

export default function CenterNavBar() {
  const [ activeItem, setActiveItem ] = useState(null);

  const handleClick = ({item}: { item: any }) => {
    setActiveItem(item);
  }

  return (
    <nav className={styles.navBarContainer}>
      <ul
        className={activeItem === "Model S" ? styles.active : ""}
        onClick={() => handleClick({item: "Model S"})}
      >Models S</ul>
      <ul
        className={activeItem === "Model X" ? styles.active : ""}
        onClick={() => handleClick({item: "Model X"})}
      >Models X</ul>
      <ul
        className={activeItem === "Model 3" ? styles.active : ""}
        onClick={() => handleClick({item: "Model 3"})}
      >Model 3</ul>
      <ul
        className={activeItem === "Roadster" ? styles.active : ""}
        onClick={() => handleClick({item: "Roadster"})}
      >Roadster</ul>
      <ul
        className={activeItem === "Energy" ? styles.active : ""}
        onClick={() => handleClick({item: "Energy"})}
      >Energy</ul>
    </nav>
  )
}