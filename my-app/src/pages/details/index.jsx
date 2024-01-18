import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { GlobalContext } from "../../context";
import './style.css'

export default function Details() {

    const {id} = useParams();
    const {recipeDetailsData, setRecipeDetailsData,favoritesList, handleAddToFavorite} = useContext(GlobalContext);

    const [error, setError] = useState('');
    

    useEffect(() => {

        try{
            async function getRecipeDetails(){

                const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes/${id}`);
                const data = await response.json();

                if(data.status !== 'success'){
                    throw new Error("Fetch data failed: " + data.status);
                } 
                
                if(data?.data && data?.data?.recipe) {
                    setRecipeDetailsData(data?.data?.recipe);
                    console.log(data?.data?.recipe);
                } 
    
            }

            getRecipeDetails();
        }catch(error){
            setError(error.message);
        }
       

        
   },[])

    return (
        <div>
            {error ? <div>{error}</div> : null}

            {
                recipeDetailsData && 
                    <div className="recipe-container" >
                         <div className="recipe-img">
                            <img src={recipeDetailsData?.image_url} alt={recipeDetailsData?.title} />
                        </div>
                        <div className="recipe-content">
                            <h1>{recipeDetailsData?.title}</h1>
                            <p>Publisher: {recipeDetailsData?.publisher}</p>
                            <p>Cooking Time: {recipeDetailsData?.cooking_time}</p>

                            <h4>ingredients: 
                                {
                                    recipeDetailsData?.ingredients.map(item => (
                                        <>
                                            <li>quantity:{item.quantity}</li>
                                            <li>unit: {item.unit}</li>
                                            <li>description: {item.description}</li>
                                        </>
                                      
                                    ))
                                }
                            </h4>

                            <button 
                                onClick={() => handleAddToFavorite(recipeDetailsData)}    
                            >{ favoritesList.findIndex((item) => item.id === recipeDetailsData.id) !== -1 ? "Remove from favorites" : "Add to favorites" }</button>
                        </div>
                    </div>
                   
            }
            
        </div>
    )
}