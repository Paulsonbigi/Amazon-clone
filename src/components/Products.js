import React from 'react'
import "../css/product.css"
import { useStateValue } from "../components/store/StateProvider"


function Products({id, title, image, price, rating}) {

    const [{basket}, dispatch] = useStateValue();

    const addToBasket =() => {
        dispatch({
            type: "ADD_TO_BASKET",
            item:{
                id,
                title,
                image,
                price,
                rating
            }
        })
    }
    return (
        <div className="product">
            <div className="product_info">
            <p>{title}</p>
            <p className="product_price">
                <small>$</small><strong>{price}</strong>
            </p>
            <p className="product_rating">
                {
                    Array(rating)
                    .fill()
                    .map(() =>(
                        <p>*</p>
                    ))
                }
            </p>
            </div>
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Products
