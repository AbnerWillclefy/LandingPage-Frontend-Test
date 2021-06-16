import styles from './styles.module.scss'

export default function Join() {
    return (
        <div className={styles.container}>
            <div className={styles.innerContainer}>
                <h2>Join our membership to get special offer</h2>
                <div className={styles.join}>
                    <input type='text' placeholder='Enter your email adress'/>
                    <button>Join</button>
                </div>
            </div>
        </div>
    )
}