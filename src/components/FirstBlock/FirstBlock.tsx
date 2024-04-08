import styles from './FirstBlock.module.scss'
import Image from 'next/image'
import logo from '../../../public/img/header/logo.png'
import teslaPng from '../../../public/img/firstBlock/tesla-png.png'
import TestDrive from "@/components/FirstBlock/TestDrive/TestDrive";
import arrowIcon from '../../../public/img/firstBlock/icons/arrowIcon.svg'

export default function FirstBlock() {
  return (
    <div className={styles.firstBlockContainer}>
      <div className={styles.carContainer}>
        <div className={styles.nameContainer}>
          <h1 className={styles.modelName}>Model S</h1>
          <h2 className={styles.descriptionText}>Добро пожаловать в будущее!</h2>
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.logoImg}
            src={logo}
            alt={"logo"}/>
          <Image
            className={styles.teslaImg}
            src={teslaPng}
            alt={"teslaPng"}/>
        </div>
      </div>
      <TestDrive />
      <Image src={arrowIcon} alt="arrowIcon" className={styles.arrowIcon}/>
    </div>
  )

}