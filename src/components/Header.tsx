import React from 'react'
import './Header.css'

// icons
import { SlSocialInstagram } from "react-icons/sl";
import { SiTiktok } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";




const Header:React.FC = () => {
  return (
 <>
<header className='header'>
<div className="header-img">
<img src="/images/header/logo1.png" alt="" />
</div>
 <div className="nav-links">
    <a href="" className='nav-link'>Home</a>
    <a href="" className='nav-link'>Shop</a>
    <a href="" className='nav-link'>Product</a>
    <a href="" className='nav-link'>FAQ</a>
    <a href="" className='nav-link'>Collections</a>
 </div>
 <div className="contact">
 <SlSocialInstagram className='contact-icon'/>
 <SiTiktok className='contact-icon'/>
 <SiWhatsapp className='contact-icon'/>
 </div>
</header>
 </>
  )
}

export default Header