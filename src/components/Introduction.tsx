import React from 'react'
import './Introduction.css'



const Introduction:React.FC = () => {
  return (
    <>
<div className="introduction">
   <div className="container">
   <div className="row">
        <div className="intro-left col-12 col-md-6">
        <h5 className='intro-text'>Each stitch tells a story<span className='pt-2 pb-3 intro-span'> bringing joy <br /> to little hearts</span></h5>
<p className='intro-p'>We craft unique, handcrafted crochet products with love. From delightful toys to stylish accessories, each item is made with care to bring joy and comfort into your life.</p>
        <button className="shop my-3">SHOP</button>
        
        </div>
        <div className="intro-right col-12 col-md-6">
            <img src="/images/introduction/intro2.png" alt="" className='introphoto' />
        </div>
    </div>
   </div>
    </div>   
     </>
  )
}

export default Introduction