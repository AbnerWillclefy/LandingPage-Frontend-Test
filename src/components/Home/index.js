import Search from '../../components/Search'
import styles from './styles.module.scss';
import history from '../../services/history';

export default function Home() {
    return (
        <div className={styles.homepage}>
            <header className={styles.headerContainer}>
                <h1 className={styles.logo}>
                    Healthy Foods
                </h1>
                <nav className={styles.menu}>
                    <a href="#Healthy"><span>HEALTHY RECIPES</span></a>
                    <a href="#Blog"><span>BLOG</span></a>
                    <a href="#Join"><span>JOIN</span></a>
                    <span onClick={() => history.push('/register')}>REGISTER</span>
                </nav>
            </header>
            <Search />
        </div>
    )
}