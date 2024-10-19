import React from 'react'
import './Productcategories.css'


const Productcategories:React.FC = () => {
  return (
    <>
   <div className="productcategories">
  <div className="container">
    <div className="row">
      <h1 className="text-uppercase animate__animated animate__infinite animate__slower animate__bounceIn">Categories</h1>
      <div className="category">
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <h2>Knits for Babies</h2>
            </div>
            <div className="card-back">
              <h2>Baby Collection</h2>
              <img src="/images/categories/card1.jpeg" alt="" />
              <button className="category-button">Explore</button>
            </div>
          </div>
        </div>
      </div>
      <div className="category">
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <h2>Home Decor Products</h2>
            </div>
            <div className="card-back">
              <h2>Decor Ideas</h2>
              <img src="/images/categories/card2.jpeg" alt="" />

              <button className="category-button">Explore</button>
            </div>
          </div>
        </div>
      </div>
      <div className="category">
        <div className="card">
          <div className="card-inner">
            <div className="card-front">
              <h2>Accessories</h2>
            </div>
            <div className="card-back">
              <h2>Stylish Accessories</h2>
              <img src="/images/categories/card3.jpeg" alt="" />

              <button className="category-button">Explore</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}

export default Productcategories