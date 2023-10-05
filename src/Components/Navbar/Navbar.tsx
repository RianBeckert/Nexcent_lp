import Link from 'next/link'
import styles from './Navbar.module.scss'
import Image from 'next/image'

interface Link {
    url: string;
    name: string;
  }

  const links: Link[] = [
    { name: 'Home', url: '#home' },
    { name: 'Service', url: '#service' },
    { name: 'Feature', url: '#feature' },
    { name: 'Product', url: '#product' },
    { name: 'Testimonial', url: '#testimonial' },
    { name: 'FAQ', url: '#faq' },
];

export function Navbar() {
    const renderLinks = links.map((link,i) => (<li key={i}><Link href={link.url}>{link.name}</Link></li>))

    return (
        <section className={styles.navbar}>
            <div className={styles.logo}>
                <Link href='/'>
                    <Image className={styles.iconlogo} src='/Icon.svg' alt='icone' width={35} height={24} />
                    <Image src='/Nexcent.svg' alt='nextcent' width={111.49} height={20.662} />
                </Link>
            </div>
            <nav className={styles.navigation}>
                <ul>
                    {renderLinks}
                </ul>
            </nav>
            <div className={styles.btn}>
                <button className={styles.login}>Login</button>
                <button className={styles.signup}>Sign up</button>
            </div>
        </section>
    )
}