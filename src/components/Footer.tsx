import React from 'react'
import './Footer.css'
import { FaInstagram, FaWhatsapp } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa6'
import { MdCopyright } from 'react-icons/md'
import { IoMdCall } from 'react-icons/io'
import { CiTwitter } from 'react-icons/ci'

const Footer:React.FC = () => {
  return (
<>
<div className="footer">
    <div className="footer-links">
    <a href=""> <FaInstagram /> </a>
    <a href=""> <FaWhatsapp /> </a>
    <a href=""> <FaFacebook /> </a>
<a href=""><CiTwitter /> </a>
<a href=""> <IoMdCall /> </a>
    </div>
    <p><MdCopyright />Copyright. All rights reserved
    </p>
</div>
</>
  )
}

export default Footer