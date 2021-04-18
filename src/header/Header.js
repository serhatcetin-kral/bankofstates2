import React from 'react';
import {Link} from "react-router-dom";
import logo from "../images/logo.png";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCart from "@material-ui/icons/ShoppingCart";



function Header() {
    return (
        
       <nav className="header">

{/*logo*/}
<Link to="/">
<img className="header__logo"  src={logo} alt="logo" />

</Link>
<div>
    <span className="header__title"> bank of states</span>
</div>

<div className="header__search">
<input type="text" className="header__searchInput"/>
<SearchIcon className="header__searchIcon"/>

</div>

<div className="header__nav">

<Link to="/login" className="header__link">
<div className="header__option">
<span className="header__lineone">Hello</span>
<span className="header_linetwo">Sign in</span>
</div>

</Link>



<Link to="/register" className="header__link">
<div className="header__option">
<span className="header__lineone">New Uer</span>
<span className="header_linetwo">Register</span>
</div>

</Link>

<Link to="/checkout" className="header__link">
<div className="header_optionBasket">
<ShoppingCart />


</div>

</Link>


</div>




    </nav>    



        
    )
}

export default Header;
