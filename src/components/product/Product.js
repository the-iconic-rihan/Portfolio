import React from 'react'
import "./product.css"
const Product = (img,link) => {
    return (
        <div class='p'>
            <div className="p-browser">
                <div className="p-circle"></div>
                <div className="p-circle"></div>
                <div className="p-circle"></div>
            </div>
            <a href={link} target="_blank" rel="noopener noreferrer">
                <img src={img} alt="not supported" srcset="" className='p-img' />
            </a>
        </div>
    )
}
export default Product;