import styles from './styles.module.scss'
import history from '../../services/history'

export default function Register() {
    return (
        <div className={styles.page}>
            <header>
                <h1>Healthy Foods</h1>
                <span onClick={() => history.push('/')}>HOMEPAGE</span>
            </header>

            <div className={styles.registro}>
                <h1>
                    Register now
                </h1>

                <input type='text' placeholder='Nome'/>
                

                <div className={styles.grid}>
                    <input type='text' placeholder='Email' className={styles.short}/>
                    <input type='date' className={styles.short}/>
                    <input type='text' placeholder='CEP' className={styles.short} required maxLength='9'/>
                    <input type='text' placeholder='Estado' className={styles.short}/>
                    <input type='text' placeholder='Cidade' className={styles.short}/>
                    <input type='text' placeholder='Bairro' className={styles.short}/>
                    <input type='text' placeholder='Rua' className={styles.short}/>
                    <input type='text' placeholder='Numero' className={styles.short}/>
                </div>

                <button>Submit</button>
            </div>
        </div>
    )
}