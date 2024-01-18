import { useDispatch } from "react-redux"
import { removeFromCart } from "../../store/slices/cart-slice";


export default function CartTitle({product}) {

    const dispatch = useDispatch();
    function handleRemoveFromCart() {
        dispatch(removeFromCart(product.id));
    }

    return (
        <div className="fex items-center p-5 justify-between bg-red-500 mt-2 mb-2 rounded-xl">
            <div className="flex p-3">
                <img src={product?.image} className="h-28 rounded-lg" alt={product?.title} />
            </div> 
            <div className="ml-10 self-start space-y-5">
                <h1 className="text-white text-xl">{product?.title}</h1>
                <p className="text-white">{product?.price}$</p>
                <button
                    onClick={handleRemoveFromCart}
                    className="bg-red-950 text-white border-2 p-2 "
                >
                    Remove
                </button>
            </div>
            
        </div>
    )
}