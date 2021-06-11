import styles from './styles.module.scss';

export default function Home() {
    return (
        <div className={styles.homepage}>
            <header className={styles.headerContainer}>
                <span className={styles.logo}>
                    Healthy Foods
                </span>
                <nav className={styles.menu}>
                    <a>HEALTHY RECIPES</a>
                    <a>BLOG</a>
                    <a>JOIN</a>
                    <a>REGISTER</a>
                </nav>
            </header>
        </div>
    )
}