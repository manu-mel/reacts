import { useContext } from 'react'
import CartItem from '../CartIten/CartItem'
import AppContext from "../../context/AppContext"
import './Cart.css'
import formatCurrency from '../../utils/formatCurrency'

function Cart() {
    const {cartItems, isCartVisible} = useContext(AppContext)
    const totalPrice = cartItems.reduce((acc, item) => {return item.price + acc}, 0)
    
    return (
        <section className={`cart ${isCartVisible ? 'cart_active' : ''}`}>
            <div className="cart_items">
                {cartItems.map((cartItem) => <CartItem key={cartItem.id} data={cartItem}/>)}
            </div>
            <div className="cart_resumo">
                {formatCurrency(totalPrice)}
            </div>
        </section>
    )
}

export default Cart