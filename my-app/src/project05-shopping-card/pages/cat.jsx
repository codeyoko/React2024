import { useEffect, useState } from "react";
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CartTitle from "../components/cart-title";


export default function Cart() {

    const [totalCart, setTotalCart] = useState(0);

    const {cart} = useSelector(state => state);

    useEffect(() => {
        setTotalCart(cart.reduce((acc,curr) => acc + curr.price, 0))
    },[cart]);
    console.log(cart, totalCart);

    return(
        <div>
            {
                cart && cart.length
                ?
                <div className="flex justify-between ">
                     <div className=" grid md:grid-cols-2 max-w-6xl mx-auto">
                        <div className="flex flex-col justify-center items-center p-3">
                            {
                                cart.map(item => <CartTitle product={item} /> )
                            }
                        </div>
                        
                    </div>
                    <div className="mt-10">
                        <div className="flex flex-col justify-center items-end p-5 space-y-5 -mt-14">
                            <h1 className="font-bolb text-lg text-red-800 px-10 mx-10">
                                Your Cart Summary
                            </h1>
                            <p className="px-10 mx-10">
                                <span >Total Item:</span>
                                <span>{cart.length}</span>
                            </p>
                            <p className="px-10 mx-10">
                                <span>Total Amouth:</span>
                                <span>{totalCart}$</span>
                            </p>

                        </div>
                    </div>

                </div>
               
                :
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-gray-800 font-bold text-xl">
                        Your cart is empty
                    </h1>
                    <Link to={"/"}>
                        <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4">Shop now</button>
                    </Link>
                </div>
            }

        </div>
    )
}