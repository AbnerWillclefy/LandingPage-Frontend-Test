import styles from './styles.module.scss'

export default function Search() {
    return (
        <div className={styles.innerContainer}>
                <h1>Ready for Trying a new recipe?</h1>
                <div className={styles.sendText}>
                    <input type="text" placeholder="Search healthy recipes"/>
                    <button><img src="assets/search.png" alt="search icon" /></button>
                </div>
            </div>
    )
}