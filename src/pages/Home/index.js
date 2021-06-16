import Search from '../../components/Search'
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
            <Search />
        </div>
    )
}