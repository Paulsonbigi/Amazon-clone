import React from 'react'
import Banner from "../components/Banner"
import "../css/home.css"
import Products from "../components/Products"
import img4 from "../images/img4.png"
import img10 from "../images/img10.png"
import img11 from "../images/img11.png"
import img9 from "../images/img9.png"


function Home() {
    return (
        <>
            <Banner/>
            <div className="show_products">
                <Products
                    id="12312334"
                    title="The best product offers for our esteemed customers"
                    price="11.96"
                    rating={5}
                    image={img11}/>    
                <Products
                    id="12312334"
                    title="The best product offers for our esteemed customers"
                    price="11.96"
                    rating={5}
                    image={img4}/>
            </div>

                <div className="show_products">
                <Products
                        id="12312334"
                        title="The best product offers for our esteemed customers"
                        price="11.96"
                        rating={5}
                        image={img9}/>
                    <Products
                        id="12312334"
                        title="The best product offers for our esteemed customers"
                        price="20.06"
                        rating={4}
                        image={img10}/>
                    <Products
                        id="12312334"
                        title="The best product offers for our esteemed customers"
                        price="15.96"
                        rating={3}
                        image={img11}/>
            </div>
            <div className="show_products">
                <Products
                        id="12312334"
                        title="The best product offers for our esteemed customers"
                        price="11.96"
                        rating={5}
                        image={img4}/>
            </div>
        </>
    )
}

export default Home
