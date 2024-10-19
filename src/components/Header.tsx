import React, { useRef } from 'react'
import './Header.css'

// icons
import { SlSocialInstagram } from "react-icons/sl";
import { SiTiktok } from "react-icons/si";
import { SiWhatsapp } from "react-icons/si";
//icons
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoCloseCircleOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';




const Header:React.FC = () => {
const mobileMenyununReferansi = useRef<HTMLDivElement>(null)

const menyunuAch = () => {
  if(mobileMenyununReferansi.current) {
    mobileMenyununReferansi.current.classList.add("aktiv")
  }
}

const menyunubagla = () => {
  if(mobileMenyununReferansi.current) {
    mobileMenyununReferansi.current.classList.remove('aktiv')
  }
}


  return (

<>
<div className="mobile-menyu" ref={mobileMenyununReferansi}>

      <IoCloseCircleOutline className='baglamaiconu' onClick={menyunubagla}/>

<a href=""><img src="/images/header/logo1.png" alt="" /></a>
<div className="mobile-links">
<Link to="/" className='nav-link'>Home</Link>
    <Link to="/shop" className='nav-link'>Shop</Link>
    <Link to="/product" className='nav-link'>Product</Link>
    <Link to="/faq" className='nav-link'>FAQ</Link>
    <Link to="/collections" className='nav-link'>Collections</Link>
</div>
<div className="mobile-contact">
 <SlSocialInstagram className='contact-icon'/>
 <SiTiktok className='contact-icon'/>
 <SiWhatsapp className='contact-icon'/>
 </div>
</div>

<header className='header'>
<div className="header-img">
<img src="/images/header/logo1.png" alt="" />
</div>
<HiBars3BottomRight className='header-bars' onClick={(menyunuAch)} />

 <div className="nav-links">
    <Link to="/" className='nav-link'>Home</Link>
  <Link to='/shop' className='nav-link'>Shop</Link>
    <Link to="/product" className='nav-link'>Product</Link>
    <Link to="/faq" className='nav-link'>FAQ</Link>
    <Link to="/collections" className='nav-link'>Collections</Link>
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