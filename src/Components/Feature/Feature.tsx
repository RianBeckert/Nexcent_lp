import styles from './Feature.module.scss'
import Image from 'next/image'

export function Feature (){
    return(
        <section id='feature' className={styles.feature}>
            <div>
               <Image src='/featureimg.jpg' alt='cristina' width={320} height={300}/>
            </div>
            <div className={styles.text}>
                <h1>The unseen of spending three years at Pixelgrade</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>
                <a href='Learn More' className='btn btn-primary'>Learn More</a>
            </div>
            
        </section>
    )
}