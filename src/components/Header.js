import React, {useState, useEffect } from 'react'
import { Link } from "react-router-dom"
import "../css/Header.css"
import SearchIcon from "@material-ui/icons/Search"
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket"
import { useStateValue } from "../components/store/StateProvider"
import onClickOutside from "react-onclickoutside"
import { Menu } from '@material-ui/core'

function Header({id}) {
    const [{basket}, dispatch] = useStateValue();
    const [open, setOpen] =useState(false)
    const [isOpen, setIsOpen] = useState(false)
    

    // useEffect(() => {
    //     const clickHandler = ({ target }) => {
    //         const container = document.getElementById(`container=${id}`)   
    //         if (container.contains(target)) return;
    //         setOpen(false)
    //     };
    //     document.addEventListener("click", clickHandler);

    //     return () =>document.removeEventListener("click", clickHandler)
    // }, [])

    const toggle = () => setIsOpen(!isOpen);
    Header.handleClickOutside =()=> setIsOpen(false)
    
    return (
        <nav className={`header_container ${open ? "show" : ""}` } onClick={toggle}>
            <Link to="/">
            <img className="header_logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="/"/>
            </Link>
            <div className="header_search">
                <input type="text" className="header_input"/>
                <SearchIcon className="header_searchIcon"/>
            </div>
            <div className="header_nav">
                <Link to="/login" className="header_link">
                    <div className="header_option first">
                        <span className="option_lineOne">Hello Paul</span>
                        <span className="option_lineTwo">Sign In</span>
                    </div>
                </Link>
                <Link to="/login" className="header_link">
                    <div className="header_option first">
                        <span className="option_lineOne">Returns</span>
                        <span className="option_lineTwo">Orders</span>
                    </div>
                </Link>
                <Link to="/login" className="header_link">
                    <div className="header_option first">
                        <span className="option_lineOne">Your</span>
                        <span className="option_lineTwo">Prime</span>
                    </div>
                </Link>
                <Link to="/checkout" className="header_link">
                    <div className="header_basket">
                        <ShoppingBasketIcon className="shopping_basket"/>
                        <span className="option_lineTwo basket_count">{basket?.length}</span>
                    </div>
                </Link>
            </div>
            <div className={`side_bar ${open ? "show" : ""}`}>
            <div className="header_nav">
                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className="option_lineOne">Hello Paul</span>
                        <span className="option_lineTwo">Sign In</span>
                    </div>
                </Link>
                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className="option_lineOne">Returns</span>
                        <span className="option_lineTwo">Orders</span>
                    </div>
                </Link>
                <Link to="/login" className="header_link">
                    <div className="header_option">
                        <span className="option_lineOne">Your</span>
                        <span className="option_lineTwo">Prime</span>
                    </div>
                </Link>
            </div>
            </div>

            <div className="menu" onClick={()=>setOpen(!open)}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
        </nav>
    )
}

const onClickOutsideConfig ={
    handleClickOutside: () => Header.handleClickOutside
}

export default onClickOutside(Header, onClickOutsideConfig);
