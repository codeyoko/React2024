
import { useRef } from 'react';
import useFetchData from './index';

export default function UseScrollTopToBottom() {

    const {data, pending, error} = useFetchData(
        'https://dummyjson.com/products?limit=100', {}
    );
    //console.log(data, error, pending);

    const bottomRef = useRef(null);

    function handleScrollToBottom(){
        bottomRef.current.scrollIntoView({behavior: "smooth"})
    }

    function handleScrollToTop(){
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        })
    }

    return (
        <>
            <h1>Products Infomation</h1>
            <button onClick={() => handleScrollToBottom()}>Bottom ↓</button>
            { error ? <div style={{color: 'red'}}> Error! {error}</div> : null }
            {pending ? <div style={{color: 'lightgreen'}}>Loading...</div> : null}

            {
                data && data.length > 0 
                    ? data.map((item) => {
                        return (
                            <div key={item.id}>
                                <h3>Product: {item.title}</h3>
                                <p>Price: {item.price}</p>
                                <p>Description: {item.description}</p>
                                <img src={item.thumbnail} alt={item.title} />
                            </div>
                        )
                    })
                    : null
            }

            <button onClick={handleScrollToTop}>Top ↑</button>
            <div ref={bottomRef}></div>
        </>
    )
}