import React from 'react'
import '../productList/productList.css';
import { products } from "../../Data"
import Product from '../product/Product';
const ProductList = () => {
    return (
        <div className='pl'>
            <div className="pl-texts">
                <h1 className="pl-title">
                    Create & inspire. It's Me
                </h1>
                <p className="pl-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero iste explicabo repellat debitis sunt incidunt quo dolorem odio obcaecati necessitatibus illo officiis repellendus praesentium doloremque possimus numquam dolores, a eaque consequuntur reiciendis atque inventore perspiciatis!
                </p>
            </div>
            <div className="pl-list">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} />
                ))}
            </div>
        </div>


    );
};
export default ProductList;