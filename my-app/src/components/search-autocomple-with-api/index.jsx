import { useEffect, useState } from "react"
import Suggestion from "./suggestions";


export default function SearchAutoComplete() {

    const [loading, setLoading] = useState(false);
    const [users, setUsers] = useState([]);
    const [errMessage, setErrorMessage] = useState('');
    const [searchParam, setSearchParam] = useState('');
    const [showDropdown, setShowdropdown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);




    function handleOnChange(event) {
        const query = event.target.value.toLowerCase();
        setSearchParam(query);

        //query
        if(query.length  > 1) {
            const filterredData = users && users.length
                ? users.filter((item) => item.toLowerCase().indexOf(query) > -1)
                : [];
            setFilteredUsers(filterredData);
            setShowdropdown(true);
        }else {
            setShowdropdown(false);
        }
    }

    //handleDropdownClick
    function handleDropdownClick(event){
        setSearchParam(event.target.innerText);
        setShowdropdown(false);
        setFilteredUsers([]);

    }


    // call API
    async function fetchUsers() {

        try{
            setLoading(true);
            const response = await fetch('https://dummyjson.com/users');
            const data = await response.json();

            if(data && data.users && data.users.length) {
                setUsers(data.users.map((userItem) => userItem.lastName));
                //console.log(data.users);
                setLoading(false);
                setErrorMessage('')
            }

        }catch(err){
            setErrorMessage(err.message);
            setLoading(false);
        }

        
    }

    // useEff
    useEffect(() => {
        fetchUsers();
    }, []);

    

    if(errMessage) {return <p>Error : ${errMessage}</p>}

    console.log('user = ', users);
    console.log('filter = ',  filteredUsers);

    return (

        <>
            <div className="search-autocomplete-conatainer">
                <h3>Search User</h3>
                {loading ? <h4>Loading ...</h4> : 
                    <input 
                        value={searchParam}
                        name="search-users"
                        placeholder="Enter Search User here"
                        onChange={handleOnChange}

                    />
                }
            </div>
            <div className="result">
                {showDropdown && <Suggestion handleClick={handleDropdownClick} data = {filteredUsers} />}

            </div>
        </>
    )
}