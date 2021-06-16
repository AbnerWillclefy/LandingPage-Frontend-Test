import styles from './styles.module.scss'
import PageTitle from "../../components/PageTitle";
import { useState } from 'react';

export default function Slider() {
    const [display, setDisplay] = useState(false);

    return (
        <div className={styles.SliderPage}>
            <PageTitle title="Read Our Blog">Far far away, behind the word mountains,  far from the countries Vokalia and Consonantia, there live the blind texts.</PageTitle>
            <a href="#primeiro" className={display ? styles.arrowLeft : styles.noDisplay} onClick={() => setDisplay(false)}>
                <img src="assets/right-arrow.png" alt=''/></a>
            <a href="#ultimo" className={display ? styles.noDisplay : styles.arrowRight} onClick={() => setDisplay(true)}>
                <img src="assets/right-arrow.png" alt=''/></a>

            <div className={styles.slideContainer}>
                <div className={styles.slide}>
                    <div className={styles.cards} id="primeiro">
                        <img src="assets/blog_image_1.svg" alt=''/>
                        <div className={styles.description}>
                            <div className={styles.innerContainer}>
                                <h2>Quick-start guide to nuts and seeds</h2>
                                <span>Kevin Ibrahim</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.cards}>
                        <img src="assets/bloco_image_2.svg" alt=''/>
                        <div className={styles.description}>
                            <div className={styles.innerContainer}>
                                <h2>Nutrition: Tips for Improving Your Health</h2>
                                <span>Mike Jackson</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.cards}>
                        <img src="assets/bloco_image_3.svg" alt=''/>
                        <div className={styles.description}>
                            <div className={styles.innerContainer}>
                                <h2>The top 10 benefits of eating healthy</h2>
                                <span>Bryan McGregor</span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.cards} id="ultimo">
                        <img src="assets/bloco_image_4.svg" alt=''/>
                        <div className={styles.description}>
                            <div className={styles.innerContainer}>
                                <h2>What Makes a Healthy Diet?</h2>
                                <span>Jashua</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}