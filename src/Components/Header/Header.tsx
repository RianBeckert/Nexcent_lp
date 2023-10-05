import Image from 'next/image'
import styles from './Header.module.scss'

export function Header(){
    return(
        <header className={styles.header}>
        <div className={styles.content}>
          <div>
            <h1>Lessons and insights</h1>
            <span>from 8 years</span>
            <p>Where to grow your business as a photographer site or social media?</p>
          </div>
          <div className={styles.button}>
            <button className={styles.register}>Register</button>
          </div>
        </div>
        <div className={styles.image}>
          <Image src="/ilustration.png" alt="ilustration" width={391} height={407} />
        </div>
      </header> )
}