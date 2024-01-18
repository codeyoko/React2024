import { useEffect, useState } from "react"
import ProductTitle from './../components/product-title/index';



export default function Home() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    async function fetchListOfProducts() {

        try {
            setLoading(true);
            const response = await fetch('https://fakestoreapi.com/products');
            if(!response.ok) {
                throw new Error('Fetch data failed');
            }

            const data = await response.json();
            if(data && data.length > 0) {
                setProducts(data);
                setLoading(false);
                setError('');
            }
            console.log(data);

        } catch (error) {
            setLoading(false);
            setError(error.message);
        }
      
    }

    useEffect(() => {

        fetchListOfProducts();
    }, [])

    return(
        <div>
            {error ? <div>{error}</div> :null }

            {
                loading ? <div>Loading ....</div> :
                    <div className=" grid sm:grid-cols-2 md:grid-cols-3 space-x-5  lg:grid-cols-4 max-w-6xl mx-auto py-3" >
                        {
                            products && products.length && 
                            products.map((item, index) =>  <ProductTitle product={item} />)
                        }
                                
                    </div> 
   
            }
        </div>
    )
}