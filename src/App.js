import Footer from './pages/Footer';
import Home from './pages/Home';
import Info from './pages/Info';
import Join from './pages/Join';
import Recipes from './pages/Recipes';
import Slider from './pages/Slider';
import styles from './styles/app.module.scss';


function App() {
  return (
    <main className={styles.wrapper}>
      <Home />
      <Recipes />
      <Info />
      <Slider />
      <Join />
      <Footer />
    </main>
  );
}

export default App;
