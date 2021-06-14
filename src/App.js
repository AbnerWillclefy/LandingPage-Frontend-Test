import Home from './pages/Home';
import Info from './pages/Info';
import Recipes from './pages/Recipes';
import styles from './styles/app.module.scss';


function App() {
  return (
    <main className={styles.wrapper}>
      <Home />
      <Recipes />
      <Info />
    </main>
  );
}

export default App;
