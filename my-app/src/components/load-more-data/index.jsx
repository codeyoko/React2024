import { useEffect, useState } from "react"
import './style.css'


export default function LoadMoreData() {

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]); // data array object
    const [count, setCount] = useState(0);
    const [disableButton, setDisableButton] = useState(false);

    //call API
    async function fetchProducts() {
        try{
            setLoading(true);
            const response = await fetch(`https://dummyjson.com/products?limit=20&skip=${count === 0 ? 0 : count * 20}`);
            const data = await response.json();

            if(data && data.products && data.products.length) {
                setProducts((prevData) => [...prevData, ...data.products]);
                setLoading(false);
                console.log(data)
            }

        }catch(err){
            console.log(err.message);
        }
    }

    useEffect(() => {
        fetchProducts();
    },[count]);

    useEffect(() => {
        if(products && products.length === 100){
            setDisableButton(true);
        }
    },[products]);

    if(loading) {return <div>Loading...</div>}


    return(
        <div className="wrapper-products">
            <div className="product-content">
                {
                    products && products.length > 0 
                    ? products.map((item,index) => {
                        return (
                            <div className="product" key={item.id}>
                                <img src={item.thumbnail} alt={item.title}  />
                                <h4>{item.title}</h4>
                            </div>
                        )  
                        
                    })   
                    : null
                }

            </div>
            <div className="product-button">
                <button 
                    disabled={disableButton} onClick={() => setCount(count + 1)}>Load more</button>
                {
                    disableButton ? 
                    <>
                        <p>You have reached to 100 products.</p>
                    </>
                    : null
                }
            </div>

            
        </div>
    )
}