import React from 'react';
import logo from "./New Zealand.png";
import "./style.css";

const Header = () => {
  return (
    <header>
      <img class="logo" src={logo} height={100} />
    </header>
  )
}

export default Header;