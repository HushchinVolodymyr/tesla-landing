import styles from './Header.module.scss'
import logo from '../../../public/img/header/logo.png'
import Image from "next/image";
import CenterNavBar from "@/components/Header/CenterNavBar/CenterNavBar";
import RightNavBar from "@/components/Header/RightNavBar/RightNavBar";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <Image
        src={logo}
        alt={"tesla-logo"}
        className={styles.logo}/>

      <CenterNavBar/>

      <RightNavBar/>

    </header>
  )
}