import GridRecipes from "../../components/GridRecipes";
import PageTitle from "../../components/PageTitle";

import styles from './styles.module.scss'

export default function Recipes() {
    return (
        <div className={styles.RecipePage} id="Healthy">
            <PageTitle title="Our Best Recipes">Far far away, behind the word mountains,  far from the countries Vokalia and Consonantia, there live the blind texts.</PageTitle>
            <GridRecipes />
        </div>
    )
}