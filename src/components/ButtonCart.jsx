import { decrement, increment, removeTheCart } from "../store/cartSlice"
import { useDispatch } from "react-redux"
import { toFarsiNumber } from "../utils/toFa"

function ButtonCart({ product }) {
    const dispatch = useDispatch()
    return (
        <div className="container-btn-add-to-cart">
            <button className="btn-cart" onClick={() => {
                product.quantity === 1 ?
                    dispatch(removeTheCart(product.id)) :
                    dispatch(decrement(product.id))
            }}>-</button>
            <p>{toFarsiNumber(product.quantity)}</p>
            <button className="btn-cart" onClick={() => dispatch(increment(product.id))}>+</button>
        </div>
    )
}
export default ButtonCart