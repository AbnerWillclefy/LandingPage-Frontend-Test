import styles from './styles.module.scss'

export default function Footer() {
    return (
        <div className={styles.container}>
            <span>&copy; Copyrights 2019 Stack. All Rights Reserved.</span>
            <div className={styles.innerContainer}>
                <span>Privacy Policy</span>
                <span>Terms and Conditions</span>
            </div>
        </div>
    )
}