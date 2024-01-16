import {BsCartDashFill} from 'react-icons/bs'
import formatCurrency from '../../utils/formatCurrency'
import './CartItem.css'
import AppContext from '../../context/AppContext'
import { useContext } from 'react'
import propTypes from 'prop-types'

function CartItem({data}) {
    const {id, thumbnail, title, price} = data
    const {cartItems, setCartItems} = useContext(AppContext)

    const handleRemoveItem = () => {
        const updatedItems = cartItems.filter((item) => item.id != id)
        setCartItems(updatedItems)
    }
    return (
        <section className="cart_item">
            <img src={thumbnail} 
            alt='imagem do produto'
            className="cart_item_image"/>

            <div>
                <h3 className="cart_item_title">{title}</h3>
                <h3 className="cart_item_price">{formatCurrency(price)}</h3>

                <button
                type="button"
                className="button_remove_item"
                onClick={handleRemoveItem}>
                    <BsCartDashFill />
                </button>
            </div>
        </section>
    )
}

export default CartItem

CartItem.propTypes = {
    data: propTypes.object
}.isRequired;