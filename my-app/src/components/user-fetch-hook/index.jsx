import { useEffect, useState } from "react";


export default function useFetch(url, options = {}) {

    const [data, setData] = useState(null);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(null);


    async function fetchData(){

        try{
            setPending(true);
            const response = await fetch(url, {...options});

            if(!response.ok){
                throw new Error(`${response.statusText}! Could not fetch data`);
            }

            const data = await response.json();
            setData(data);
            setPending(false);
            setError(null);


        }catch(err){
            setError(err);
            setPending(false);
        }
        

    }

    useEffect(() => {
        fetchData();
    },[url]);


    return {data, error, pending}
}