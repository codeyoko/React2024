import useFetch from "."


export default function UseFetchHookTest() {

    const {data, error, pending} = useFetch('https://dummyjson.com/products?', {});

    console.log(data, error, pending);


    return (

        <div>
            <h1>Use Fetch Hook</h1>

            {
                pending ? <h3>Pending! Please wait...</h3> : null
            }
            {
                error ? <h3>Error! {error}</h3> : null
            }
            {
                data && data.products && data.products.length 
                    ?
                        data.products.map(item => 
                            <div key={item.key}>
                                <h3>Product: {item.title}</h3>
                                <p> Description: {item.description}</p>
                                <p> Price: {item.price}$</p>
                            </div>
   
                        )

                    : null
            }
        </div>
    )
}