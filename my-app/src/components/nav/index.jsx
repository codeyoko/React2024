import {NavLink} from "react-router-dom"
import './style.css'
import { useContext } from "react";
import { GlobalContext } from './../../context/index';

export default function Nav() {

    const {searchParam, setSearchParam, handleOnSubmit} = useContext(GlobalContext);

    //console.log(searchParam);

    return (
        <nav className="nav-container">
            <h2 >FoodRecipe</h2>

            <form onSubmit={handleOnSubmit}>
                <input 
                    type="text"
                    name="search"
                    value={searchParam}
                    onChange={(event) => setSearchParam(event.target.value)}
                    placeholder="Enter Search Items..."
                    className="bg-white/75 p-3 px-8 rounded-full" 
                />
            </form>
            <ul className="flex gap-5">
                <li>
                    <NavLink 
                        to={"/"}
                        className='text-black hover:text-gray-700 duration-300'
                    >Home</NavLink>    
                </li> 

                <li>
                    <NavLink 
                        to={"/favorites"}
                        className='text-black hover:text-gray-700 duration-300'
                    >favorites</NavLink>    
                </li> 

            </ul>
        </nav>
    )
}