
import { useContext } from 'react';
import { GlobalContext } from './../../context/index';
import RecipeItem from './../../recipe-item/index';

export default function Favorites() {

    const {favoritesList} = useContext(GlobalContext);
    return (
        <div className="recipe-list">
         
            {
                favoritesList && favoritesList.length > 0 
                    ? favoritesList.map((item) => <RecipeItem item={item} />)
                    : <div>
                        <p className="lg:text-4xl text-xl text-center ">Nothing is added in favorites.</p>
                      </div>
            }
        </div>
    )
}