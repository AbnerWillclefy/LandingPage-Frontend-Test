import styles from './styles.module.scss';

export default function Home() {
    return (
        <div className={styles.homepage}>
            <header className={styles.headerContainer}>
                <h1 className={styles.logo}>
                    Healthy Foods
                </h1>
                <nav className={styles.menu}>
                    <span>HEALTHY RECIPES</span>
                    <span>BLOG</span>
                    <span>JOIN</span>
                    <span>REGISTER</span>
                </nav>
            </header>

            <div className={styles.innerContainer}>
                <h1>Ready for<br/> Trying a new recipe?</h1>
                <div className={styles.sendText}>
                    <input type="text" placeholder="Search healthy recipes"/>
                    <button><img src="assets/search.png" alt="search icon" /></button>
                </div>
            </div>
        </div>
    )
}