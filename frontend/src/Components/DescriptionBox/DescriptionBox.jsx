import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews(122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>An e-commerce website is an online platform that facilitates buying and selling of products or services over the Internet serves As a virtual marketplace where businesses and individuals showcase their products, interact with customers, and conduct transactions without the need for the physical presence, e-commerce website have gained immense popularity due to their convenience accessibility, and the global reach they offer.</p>
        <p>E commerce website typically display products or services in detail description images prices and any available variation(eg., sizes, colors,etc). Each product usually has its own dedicated page with relevant information.</p>
      </div>
    </div>
  )
}

export default DescriptionBox
