import { useEffect, useState } from "react";



export default function ScrollIndicator ({url}) {


    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [scrollPercentage, setScrollPercentage] = useState(0);

    async function fetchData(getUrl) {

        try{
            setLoading(true);
            const response = await fetch(`${getUrl}`);
            const data = await response.json();
    
            if(data && data.length > 0) {
                setData(data);
                setLoading(false);
                console.log(data);
            }

        }catch(err){
            console.log(err.message);
        }

       
    }

    useEffect(() => {
        if(url !== ''){
            fetchData(url);
        }
        
    }, [url]);

    function handleScrollPercentage(){
        console.log(
            document.body.scrollTop,
            document.documentElement.scrollTop,
            document.documentElement.scrollHeight,
            document.documentElement.clientHeight
        )
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage);

        return () => {
            window.removeEventListener('scroll', ()=> {})
        }
    })

    if(loading) {return <p>Data Loading ...</p>}

    return(
        <>
            <div className="container-data">
                {data && data.length > 0 
                    ? 
                        data.map((item, index) => {
                            return (
                                <div className="">
                                    <p>{item.question} </p>
                                    
                                 </div>
                            )   
                        })
                    :null
                
                }
            </div>
        </>
    )
}