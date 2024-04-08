import styles from './ThirdBlock.module.scss'
import starIcon from '../../../public/img/thirdBlock/icons/starIcon.svg'
import sheildIcon from '../../../public/img/thirdBlock/icons/sheildIcon.svg'
import infoIcon from '../../../public/img/secondBlock/icons/infoIcon.svg'
import teslaInfo from '../../../public/img/thirdBlock/teslaInfo.svg'
import Image from 'next/image'
import React from "react";

export default function ThirdBlock() {
  return (
    <div className={styles.thirdBlockContainer}>
      <div className={styles.infoContainer}>
        <div>
          <div className={styles.text}>
            <h1>Самый безопасный
              автомобиль в мире</h1>
            <h2>
              Модель S достигла наивысшей оценки безопасности любого автомобиля, когда-либо испытанного, и установила
              рекорд
              по наименьшей вероятности травмы пассажиров - от несчастных случаев на переднем, боковом, заднем сидении и
              в
              ДТП с переворотом авто.
            </h2>
          </div>

          <div className={styles.guardRate}>
            <h1>Оценка защиты:</h1>

            <div className={styles.marks}>
              <div className={styles.front}>
                <h1>СПЕРЕДИ</h1>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, index) => (
                    <Image key={index} src={starIcon} alt="starIcon"/>
                  ))}
                </div>
              </div>

              <div className={styles.side}>
                <h1>СБОКУ</h1>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, index) => (
                    <Image key={index} src={starIcon} alt="starIcon"/>
                  ))}
                </div>
              </div>

              <div className={styles.sideStand}>
                <h1>СБОКУ<span>(стойка)</span></h1>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, index) => (
                    <Image key={index} src={starIcon} alt="starIcon"/>
                  ))}
                </div>
              </div>

              <div className={styles.driver}>
                <h1>ВОДИТЕЛЬ</h1>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, index) => (
                    <Image key={index} src={starIcon} alt="starIcon"/>
                  ))}
                </div>
              </div>

              <div className={styles.passenger}>
                <h1>ПАССАЖИР</h1>
                <div className={styles.stars}>
                  {[...Array(5)].map((_, index) => (
                    <Image key={index} src={starIcon} alt="starIcon"/>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.shieldContainer}>
          <Image src={sheildIcon} alt="sheildIcon"/>
          <div className={styles.text}>
            <h1>5 звезд</h1>
            <h2>безопасности</h2>
          </div>
        </div>

        <div className={styles.orderContainer}>
          <div className={styles.text}>
            <Image src={infoIcon} alt="infoIcon"/>
            <h1>УЗНАТЬ БОЛЬШЕ</h1>
          </div>
          <button className={styles.btn}>Заказать</button>
        </div>

      </div>

      <div className={styles.photoContainer}>
        <h1>Model S</h1>
        <Image src={teslaInfo} alt="teslaInfo" className={styles.teslaImg}/>
      </div>
    </div>
  )
}