import React from "react";
import { Link } from "react-router-dom";

import './Header.css'

function Header() {
  return (
    <header className='section header'>
      <Link to='/'>
        <div className='logo' />
      </Link>

    </header>
  )
}

export default Header;
