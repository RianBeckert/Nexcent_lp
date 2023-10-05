import Image from 'next/image'
import styles from './Clients.module.scss'


export function Clients() {
    return (
        <section className={styles.container}>
            <div>
                <h1>Our Clients</h1>
                <p>We have been working with some Fortune 500+ clients</p>
            </div>
            <div className={styles.clients}>
                <Image
                src='client1.svg'
                alt='teste'
                width={40}
                height={40}
              />
              <Image
                src='client2.svg'
                alt='teste'
                width={40}
                height={40}
              />
              <Image
                src='client3.svg'
                alt='teste'
                width={40}
                height={40}
              />
              <Image
                src='client4.svg'
                alt='teste'
                width={40}
                height={40}
              />
              <Image
                src='client5.svg'
                alt='teste'
                width={40}
                height={40}
              />
              <Image
                src='client6.svg'
                alt='teste'
                width={40}
                height={40}
              />
              <Image
                src='client7.svg'
                alt='teste'
                width={40}
                height={40}
              />
            </div>
        </section>
    )
}