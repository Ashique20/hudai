import React from "react";
import logo from '../../images/Logo.svg'
import './header.css'

const Header=()=>{
   return(
    <nav className="header">
    <img src={logo} alt="" />
    <div>
        <a href="">shop</a>
        <a href="">order</a>
        <a href="">inventory</a>
        <a href="">about</a>
    </div>
</nav>
   )
}

export default Header;