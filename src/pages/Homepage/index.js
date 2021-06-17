import Footer from '../../components/Footer';
import Home from '../../components/Home';
import Info from '../../components/Info';
import Join from '../../components/Join';
import Recipes from '../../components/Recipes';
import Slider from '../../components/Slider';
import styles from './styles.module.scss'

export default function Homepage() {
    return (
    <div className={styles.wrapper}>
        <Home />
        <Recipes />
        <Info />
        <Slider />
        <Join />
        <Footer />
    </div>
        )
}