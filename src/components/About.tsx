import React from 'react'
import './About.css'


const About: React.FC = () => {
    return (
        <>
            <div className="about d-flex">
                <div className="about-left">
                    <img src="/images/about/about1.png" alt="" className='about-img'/>
                </div>
                <div className="about-text">
                    <h1 className='mt-lg-5 m-5'>About Us</h1>
                  <p className='text-center my-lg-5'>  Welcome to our world of delightful toys and accessories crafted from organic materials! <br /> Since 2018, we have been dedicated to creating high-quality, eco-friendly products that bring joy to both children and adults. <br /> Our handmade creations include charming plush toys, beautiful accessories, and stylish home decor baskets, all made with love and care. We believe in the importance of sustainability, which is why we use only the finest organic materials in our products.
<br />
                    With thousands of satisfied customers, we take pride in the positive feedback we receive from our community. Our toys are not just gifts; they are cherished companions that spark imagination and creativity. <br /> Whether you’re looking for the perfect gift for a little one or a unique addition to your home, we have something special for everyone.
                    <br />
                    Join us on our journey to promote eco-friendly living while providing beautiful and functional items. Thank you for supporting our mission to create a better world, one toy at a time!
                    <br />
                    Feel free to adjust any part of the text to better fit your brand’s voice or add any specific details you might want to include!
               </p>
                   </div>
                   <div className="about-right">
                    <img src="/images/about/about2.png" alt="" />
                   </div>
            </div>
        </>
    )
}

export default About