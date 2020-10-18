import React from 'react'
import "../css/checkout.css"
import { useStateValue } from "../components/store/StateProvider"


function CheckoutProduct({id, title, rating, price, image, key}) {
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id
        });
    }
    return (
            <div className="checkoutProduct" key={key}>
                <img className="checked_img"src={image} alt=""/>
                <div className="details">
                    <p className="product_title">{title}</p>
                    <p>
                        <small>$</small>
                        <strong>{price}</strong></p>
                    <div className="product_rating">
                        {
                            Array(rating)
                            .fill()
                            .map(_ => (
                            <p>*</p>
                            ))
                        }
                    </div>

                    <button onClick={removeFromBasket}>Remove from basket</button>
                </div>
            </div>
    )
}

export default CheckoutProduct
