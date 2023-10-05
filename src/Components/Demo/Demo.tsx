import styles from './Demo.module.scss'

export function Demo() {
    return(
        <section className={styles.demo}>
            <h1>Pellentesque suscipit fringilla libero eu.</h1>
            <a href='Learn More' className='btn btn-primary'>Learn More</a>
        </section>
    )
}