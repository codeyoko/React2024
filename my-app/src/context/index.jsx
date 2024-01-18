
import { createContext } from 'react';
import { useState } from 'react';
import { useNavigate, useNavigation } from 'react-router-dom';


export const GlobalContext = createContext(null);


export default function GlobalState({children}) {


    const [searchParam, setSearchParam] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [recipeList, setRecipeList] = useState([]);
    const [recipeDetailsData, setRecipeDetailsData] = useState(null);
    const [favoritesList, setFavoritesList] = useState([]);

    const navigate = useNavigate();

    async function handleOnSubmit(event) {

        event.preventDefault();
        setLoading(true);
        try{
            const response = await fetch(`https://forkify-api.herokuapp.com/api/v2/recipes?search=${searchParam}`);

            const data = await response.json();

            if(data.status !== 'success'){
                throw new Error('Fetch data failed');
            } 
            if(data?.data?.recipes){
                setRecipeList(data?.data?.recipes);
                setLoading(false);
                navigate('/');
            }
            console.log(data?.data?.recipes);
            

        }catch(error){
            setError(error.message);
            setLoading(false);

        }
    }

    function handleAddToFavorite(getCurrentIndex){
        console.log(getCurrentIndex);
        let copyFavoritesList = [...favoritesList];
        const index = copyFavoritesList.findIndex(item => item.id === getCurrentIndex.id);

        if(index === -1) {
            copyFavoritesList.push(getCurrentIndex);
        }else{
            copyFavoritesList.splice(index);
        }

        setFavoritesList(copyFavoritesList);
    }
    console.log("favoritesList", favoritesList);

    return (
        <GlobalContext.Provider 
            value={
                {
                    searchParam,
                    loading,
                    error,
                    recipeList, 
                    setSearchParam, 
                    handleOnSubmit,
                    recipeDetailsData, 
                    setRecipeDetailsData,
                    handleAddToFavorite,
                    favoritesList
                }
            }>
            {children}
        </GlobalContext.Provider>
    )
}