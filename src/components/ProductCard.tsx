import React from 'react'
import './ProductCard.css'


interface ProductProps {
  imgProps:string;
  mehsulAdi:string;
  Desc:string;
  Price:string;
}

const ProductCard:React.FC<ProductProps> = (props) => {
  return (
<>
<div className="product-card m-1 py-4">
    <img className='card-img' src={props.imgProps} alt="" />
    <h5 className='card-name px-2 pt-2'>{props.mehsulAdi}</h5>
<p className='card-title p-1'>{props.Desc}</p>
<small className='product-price px-2 py-3'>{props.Price}</small>
<button className='order-btn ms-5 my-2'>Order Now</button>
</div>
</>
  )
}

export default ProductCard