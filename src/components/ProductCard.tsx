import React from 'react'
import './ProductCard.css'


interface ProductProps {
  imgProps:string;
}

const ProductCard:React.FC<ProductProps> = (props) => {
  return (
<>
<div className="product-card mb-5">
    <img className='card-img' src={props.imgProps} alt="" />
    <h5 className='card-name px-2 pt-2'>Mehsulun adi</h5>
<p className='card-title p-1'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, asperiores?</p>
<small className='product-price px-2 py-3'>50 Azn</small>
<button className='order-btn ms-5 my-2'>Order Now</button>
</div>
</>
  )
}

export default ProductCard