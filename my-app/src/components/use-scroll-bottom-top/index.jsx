import { useEffect, useState } from "react";


export default function useFetchData(url, options = {}) {

    const [data, setData] = useState(null);
    const [pending, setPending] = useState(false);
    const [error, setError] = useState(null);


    async function fetchData() {
        try {
            setPending(true);
            const response = await fetch(url, {...options});

            if(!response.ok){
                throw new Error(`${response.statusText}! Could not fetch data`);
            }
            const data = await response.json();

            if(data && data.products && data.products.length > 0) {
                setData(data.products);
                setPending(false);
                setError(null);
            }
            
        } catch (error) {
            setError(error.message);
        }
    }

    useEffect(() => {
        fetchData();
    }, [url]);

    return {data, pending, error};
}