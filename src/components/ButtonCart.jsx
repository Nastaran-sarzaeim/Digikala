import { decrement, increment, removeTheCart } from "../store/cartSlice"
import { useDispatch } from "react-redux"
import { toFarsiNumber } from "../utils/toFa"
import styles from '../styles/buttonCart.module.css'

function ButtonCart({ product }) {
    const dispatch = useDispatch()
    return (
        <div className={styles.containerBtnAddToCart}>
            <button className={styles.btnCart} onClick={() => {
                product.quantity === 1 ?
                    dispatch(removeTheCart(product.id)) :
                    dispatch(decrement(product.id))
            }}>-</button>
            <p>{toFarsiNumber(product.quantity)}</p>
            <button className={styles.btnCart} onClick={() => dispatch(increment(product.id))}>+</button>
        </div>
    )
}
export default ButtonCart