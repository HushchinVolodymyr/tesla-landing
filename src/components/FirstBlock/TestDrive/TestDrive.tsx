import styles from './TestDrive.module.scss'
import Image from "next/image";
import speedIcon from '../../../../public/img/firstBlock/icons/speedIcon.svg'
import roadIcon from '../../../../public/img/firstBlock/icons/roadIcon.svg'
import steeringWheelIcon from '../../../../public/img/firstBlock/icons/steeringWheelIcon.svg'
import steeringWheelIconRed from '../../../../public/img/firstBlock/icons/steeringWheelRed.svg'
import UIButton from "@/components/UI/Button/UIButton";


export default function TestDrive() {
  return (
    <>
      <div className={styles.testDriveContainer}>
        <div className={styles.infoContainer}>

          <div className={styles.speedContainer}>
            <Image src={speedIcon} alt="speedIcon" className={styles.speedIcon}/>
            <div className={styles.InfoContainer}>
              <h1 className={styles.MainText}>2.7<span className={styles.SmallText}>сек</span></h1>
              <h2 className={styles.AdditionalText}>0-100 км/час</h2>
            </div>
          </div>

          <div className={styles.distanceContainer}>
            <Image src={roadIcon} alt="roadIcon" className={styles.distanceIcon}/>
            <div className={styles.InfoContainer}>
              <h1 className={styles.MainText}>632<span className={styles.SmallText}>км</span></h1>
              <h2 className={styles.AdditionalText}>запас хода</h2>
            </div>
          </div>
        </div>

        <div className={styles.orderContainer}>

          <div className={styles.textContainer}>
            <div className={styles.iconContainer}>
              <Image src={steeringWheelIcon} alt="steeringWhilIcon" className={styles.icon}/>
              <Image src={steeringWheelIcon} alt="steeringWhilIcon" className={styles.iconShadow}/>
              <Image src={steeringWheelIconRed} alt="stearingWhileIconRed" className={styles.iconRed}/>
            </div>
            <h1 className={styles.text}>тест драйв</h1>
          </div>

          <div className={styles.buttonContainer}>
            <UIButton placeholder={"заказать"}/>
          </div>
        </div>
      </div>
    </>
  )
}