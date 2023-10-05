import Image from 'next/image'
import styles from './Service.module.scss'

export function Service() {
    return(
        <section id='service' className={styles.section}>
            <div>
                <h1>Manage your entire community in a single system</h1>
                <p>Who is Nextcent suitable for?</p>
            </div>
            <div className={styles.card}>
                <div>
                <Image src='peoplelogo.svg' alt='people' width={48} height={48} />
                <h1>Membership Organisations</h1>
                <p>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
            </div>
            <div className={styles.card}>
                <div>
                <Image src='casaicon.svg' alt='people' width={48} height={48} />
                <h1>National Associations</h1>
                <p>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
            </div>
            <div className={styles.card}>
                <div>
                <Image src='maoicon.svg' alt='people' width={48} height={48} />
                <h1>Clubs And Groups</h1>
                <p>Our membership management software provides full automation of membership renewals and payments</p>
                </div>
            </div>
        </section>
    )
}