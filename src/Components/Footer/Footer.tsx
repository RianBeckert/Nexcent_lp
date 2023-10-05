import Image from 'next/image'
import styles from './Footer.module.scss'
import Link from 'next/link'
import { AiOutlineInstagram, AiFillFacebook, AiFillTwitterCircle, AiFillYoutube } from 'react-icons/ai'

export function Footer() {
    return(
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <Link href='/'>
                    <Image src='/Icon.svg' alt='icone' width={43} height={30} />
                    <Image src='/Nexcentbranco.svg' alt='next' width={130} height={30}/>
                </Link>
                <p>Copyright © 2020 Nexcent ltd.</p>
                <p>All rights reserved</p>
                <div className={styles.socials}>
                <a href="#"><AiOutlineInstagram /></a>
                <a href="#"><AiFillFacebook /></a>
                <a href="#"><AiFillTwitterCircle /></a>
                <a href="#"><AiFillYoutube /></a>
            </div>
            </div>
            <div className={styles.test}>
                <h2>Company</h2>
                <ul>
                    <li>About us</li>
                    <li>Blog</li>
                    <li>Contact us</li>
                    <li>Pricing</li>
                    <li>Testimonials</li>
                </ul>
            </div>
            <div className={styles.test1}>
                <h2>Company</h2>
                <ul>
                    <li>Help center</li>
                    <li>Terms of service</li>
                    <li>Legal</li>
                    <li>Privacy policy</li>
                    <li>Status</li>
                </ul>
            </div>
            <div className={styles.test3}>
                <h2>Stay up to date</h2>
                <input type="text" value="Your email address"/>
                <button className={styles.btn}>Enviar</button>
            </div>
        </footer>
    )
}
