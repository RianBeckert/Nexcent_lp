import Image from 'next/image'
import styles from './Data.module.scss'

export function Data() {
    return(
        <section className={styles.data}>
            <div className={styles.text}>
                <h1>Helping a local</h1>
                <span>business reinvent itself</span>
                <p>We reached here with our hard work and dedication</p>
            </div>
            <div className={styles.parte1}>
            <div className={styles.content}>
                <Image src={'/clickicon.svg'} alt='click' width={48} height={48} /> 
                <div>
                    <h1>828,867</h1>
                    <p>Event Bookings</p>
                </div>
            </div>
            <div className={styles.content1}>
                 <Image className={styles.test} src={'/merbericon.svg'} alt='member' width={48} height={48} />
                <div>
                    <h1 className={styles.test}>2,245,341</h1>
                    <p>Members</p>
                </div>
            </div>
            </div>
            <div className={styles.parte2}>
            <div className={styles.content2}>
                <Image src={'/cartao.svg'} alt='cartao' width={48} height={48} />
                <div>
                    <h1>1,926,436</h1>
                    <p>Payments</p>
                </div>
            </div>
            <div className={styles.content3}>
                <Image className={styles.test} src={'/think-green.png'} alt='man' width={48} height={48} />
                <div>
                    <h1 className={styles.test}>46,328</h1>
                    <p>Clubs</p>
                </div>
            </div>
            </div>
        </section>
    )
}