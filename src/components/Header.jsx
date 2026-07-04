import React from 'react'
import { FaArrowRight } from "react-icons/fa";
export default function Header() {
  return (
    <header id ="Header">
      <nav className='navbar'>
<a href='#' className='logo'>Edu Bridge</a>
<ul>
<li><a href='#' >Home</a></li>
<li><a href='#' >Product</a></li>
<li><a href='#' >Pricing</a></li>
<li><a href='#' >Contact</a></li>
</ul>
<div className='account'>
<a href='#'>Log in </a>
<a href='#' className='btn-jion'>Join Us <FaArrowRight /></a>
</div>
      </nav>
    </header>
  )
}
