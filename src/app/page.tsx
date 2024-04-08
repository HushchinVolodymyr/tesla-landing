import styles from './MainPage.module.scss'
import FirstBlock from '../components/FirstBlock/FirstBlock'
import SecondBlock from "@/components/SecondBlock/SecondBlock";
import ThirdBlock from "@/components/ThirdBlock/ThirdBlock";


export default function Home() {
  return (
    <main className={styles.pageContainer}>
      <FirstBlock/>
      <SecondBlock/>
      <ThirdBlock/>
    </main>
  );
}
