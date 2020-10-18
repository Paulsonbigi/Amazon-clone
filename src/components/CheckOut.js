import React from 'react'
import { useStateValue } from "../components/store/StateProvider"
import "../css/checkout.css"
import CheckoutProduct from "../components/CheckoutProduct"
import Subtotal from "../components/Subtotal"


function CheckOut({id, title, image, price, rating}) {

    const [{basket}, dispatch] = useStateValue();
    console.log(price)

    return (
        <div className="checkout">
            <img className="checkout_ads" 
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ3Bce58se8vgmt53S5gINa4YGp4IVFPCCFnQ&usqp=CAU" 
                alt=""/>
            <div className="total_display">
                {basket?.length === 0 ?
                    (<h2>You have an empty basket</h2>)
                :(
                    <div>
                        <h2>Your Shopping Basket</h2>
                        <div className="product_display">
                            
                        </div>
                    {
                        basket.map((item) => 
                            <CheckoutProduct
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        )
                    }
                    </div>
                )
                }
                {
                    basket.length > 0 && (
                        <div className="checkout_right">
                            <Subtotal/>
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default CheckOut
