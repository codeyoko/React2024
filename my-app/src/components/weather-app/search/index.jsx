import { useState } from "react"
import './style.css'


export default function Search({search, setSearch, handleSearch}) {

    
    return (
        <div className="search-engine">
            <input 
                type="text"
                name="search"
                value={search}
                placeholder="Enter City Name"
                onChange={(event) => setSearch(event.target.value)} 
            />
            <button className="search-btn" onClick={handleSearch}>Search</button>
        </div>
    )
}