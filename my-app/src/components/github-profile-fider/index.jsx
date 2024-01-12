import { useEffect, useState } from "react";
import User from "./user";
import './style.css'



export default function GithubProgileFinder() {

    const [username, setUsername] = useState(['codeyoko']);
    const [userData, setUserData] = useState(null)
    const [errorMessage, setErrorMessage] = useState('');
    const [loading, setLoading] = useState(false);
    

    async function fetchGithubUserData() {

        try{
            setLoading(true);

            const response = await fetch(`https://api.github.com/users/${username}`);
            const data = await response.json();

            if(data) {
                setUserData(data);
                setLoading(false);
                setUsername('');
                
            }
            
        }catch(err){
            setErrorMessage(err.message);
        }
    }

    useEffect(() => {
        fetchGithubUserData();
    }, []);

    if(errorMessage) {return <p>Error ! ${errorMessage}</p>}

    if(loading) {return <p>Loading...</p>}

    function handleSubmit() {
        fetchGithubUserData();
    }


    return (

        <>
            <div className="profile-container">
                <div className="input-wrapper">
                    <input 
                        type="text"
                        name="search-by-username"
                        placeholder="Enter Github UserName..."
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    
                    />

                    <button
                        onClick={handleSubmit}
                    >
                    Search    
                    </button>

                </div>
                <div className="user-data">
                    {userData !== null 
                        ? <User user={userData} /> 
                        : <div>Data not found</div>
                    }
                </div>

            </div>
        </>
    )
}