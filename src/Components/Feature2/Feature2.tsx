import styles from './Feature2.module.scss'

import Image from 'next/image'

export function Feature2 (){
    return(
        <section id='feature' className={styles.feature}>
            <div>
               <Image src='/iluslogin.jpg' alt='cristina' width={320} height={300}/>
            </div>
            <div className={styles.text}>
                <h1>How to design your site footer like we did</h1>
                <p>Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                <a href='Learn More' className='btn btn-primary'>Learn More</a>
            </div>
        </section>
    )
}