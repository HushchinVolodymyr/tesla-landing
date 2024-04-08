import styles from './SecondBlock.module.scss'
import teslaCockpit from '../../../public/img/secondBlock/teslaBlock2.png'
import bagIcon from '../../../public/img/secondBlock/icons/bagIcon.svg'
import screenIcon from '../../../public/img/secondBlock/icons/screenIcon.svg'
import  wifiIcon from '../../../public/img/secondBlock/icons/wifiIcon.svg'
import infoIcon from '../../../public/img/secondBlock/icons/infoIcon.svg'
import Image from 'next/image'
import UIButton from "@/components/UI/Button/UIButton";

export default function SecondBlock() {
  return (
    <div className={styles.secondBlockContainer}>
      <div className={styles.photoContainer}>
        <h1 className={styles.text}>Model S</h1>
        <Image
          className={styles.teslaCockpit}
          src={teslaCockpit}
          alt="teslaCockpit"
        />
      </div>
      <div className={styles.descriptionContainer}>
        <div className={styles.info}>
          <div className={styles.mainText}>
            <h1>Будущее вождения</h1>
            <h2>
              Модель S обладает лучшей в своем классе вместимостью: в машине поместится до пяти взрослых и двух детей.
              Оснащена современным 17-дюймовым сенсорным экраном. Усовершенствованная шумовая инженерия создает динамику
              звука, сравнимую со студией звукозаписи, а стеклянная крыша обеспечивает просторный интерьер для каждого
              пассажира.
            </h2>
          </div>

          <div className={styles.specs}>
            <div className={styles.screen}>
              <Image src={screenIcon} alt="screenIcon"/>
              <div>
                <span>17<h1>дюймов</h1></span>
                <h2>Большой дисплей</h2>
              </div>
            </div>

            <div className={styles.wifi}>
              <Image src={wifiIcon} alt="wifiIcon"/>
              <div>
                <h1>Беспроводное
                  обновление ПО</h1>
                <h2>Повышенная функциональность</h2>
              </div>
            </div>

            <div className={styles.bag}>
              <Image src={bagIcon} alt="bagIcon"/>
              <div>
                <span>894<h1>литра</h1></span>
                <h2>Объем грузового пространства</h2>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.discover}>
          <div className={styles.more}>
            <Image src={infoIcon} alt="infoIcon"/>
            <h1 className={styles.moreText}>УЗНАТЬ БОЛЬШЕ</h1>
          </div>
          <button className={styles.btn}>ЗАКАЗАТЬ</button>
        </div>
      </div>
    </div>
  )
}