import { useContext } from "react"
import { GlobalContext } from "../../context"
import RecipeItem from "../../recipe-item";
import './style.css'

export default function Home() {

    const {loading, error, recipeList} = useContext(GlobalContext);
    return (
        <div className="recipe-list">
            {loading ? <div>Loading...</div> : null}
            {error   ? <div>{error}</div> : null}

            {
                recipeList && recipeList.length > 0 
                    ? recipeList.map((item) => <RecipeItem item={item} />)
                    : <div>
                        <p className="lg:text-4xl text-xl text-center ">Nothing to show. Please search something.</p>
                      </div>
            }
        </div>
    )
}