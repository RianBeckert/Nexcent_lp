import Image from 'next/image'
import styles from './Testimonials.module.scss'

export function Testimonials() {
    return (
        <section id='testimonial' className={styles.testimonials}>
            <div>
                <Image src='/testimonialsimg.png' alt='testiimg' width={326} height={326} />
            </div>
            <div className={styles.text}>
                <p>Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                <span>Tim Smith</span>
                <p className={styles.secp}>British Dragon Boat Racing Association</p>
                <div className={styles.img}>
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
              <span>Meet all customers</span>
              </div>
            </div>
            
        </section>
    )
}