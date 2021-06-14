import styles from './styles.module.scss'

export default function GridRecipes() {
    return (
        <div className={styles.grid}>
            <div className={styles.comida}>
                <img src="assets/comida_1.svg" alt="comida1"/>
                <div className={styles.description}>
                    <div className={styles.innerContainer}>
                        <span>Broccoli Salad<br/> with Bacon</span>
                        <button>See Recipe</button>
                    </div>
                </div>
            </div>
            <div className={styles.comida}>
                <img src="assets/comida_2.svg" alt="comida2"/>
                <div className={styles.description}>
                   <div className={styles.innerContainer}>
                        <span>Classic Beef<br/> Burgers</span>
                        <button>See Recipe</button>
                   </div>
                </div>
            </div>
            <div className={styles.comida}>
                <img src="assets/comida_3.svg" alt="comida3"/>
                <div className={styles.description}>
                   <div className={styles.innerContainer}>
                        <span>Classic Potato<br/> Salad</span>
                        <button>See Recipe</button>
                   </div>
                </div>
            </div>
            <div className={styles.comida}>
                <img src="assets/comida_4.svg" alt="comida4"/>
                <div className={styles.description}>
                    <div className={styles.innerContainer}>
                        <span>Cherry Cobbler<br/> on the Grill</span>
                        <button>See Recipe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}