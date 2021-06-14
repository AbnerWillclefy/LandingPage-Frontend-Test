import styles from './styles.module.scss'

export default function Info() {
    return (
        <div className={styles.background}>
            <div className={styles.innerText}>
                <h2>The best services ready To serve you</h2>
                <p>Far far away, behind the word mountains,  far from the countries Vokalia and Consonantia, there live the blind texts.
                <br/><br/>
                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                <br/><br/>
                A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                <button>Know More</button>
            </div>
        </div>
    )
}