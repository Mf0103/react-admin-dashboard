import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { products, productsData } from '../../data';
import './Product.css';

export default function Product() {
  // Get productID from URL params
  const { productID } = useParams();
  
  // Find the specific product from products array using the productID
  const product = products.find(p => p.id === parseInt(productID));

  // If product is not found, show a message
  if (!product) {
    return (
      <div className='product'>
        <div className="productTitleContainer">
          <h1 className="productTitle">Product Not Found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className='product'>
      <div className="productTitleContainer">
        <h1 className="productTitle">Product</h1>
        <Link to='/new-product'>
          <button className='productAddButton'>Create</button>
        </Link>
      </div>

      <div className="productTop">
        <div className="productTopLeft">
          <Chart title='Sale In Month' data={productsData} dataKey='sales'/>
        </div>

        <div className="productTopRight">
          <div className="productInfoTop">
            <img src={product.avatar} alt={product.title} className='productInfoImg'/>
            <span className="productName">{product.title}</span>
          </div>

          <div className="productInfoBottom">
            <div className="productInfoItem">
              <div className="productInfoKey">ID: </div>
              <div className="productInfoValue">{product.id}</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Name: </div>
              <div className="productInfoValue">{product.title}</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Sales: </div>
              <div className="productInfoValue">${product.sales}</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Active: </div>
              <div className="productInfoValue">{product.active}</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">In Stock: </div>
              <div className="productInfoValue">{product.inStock}</div>
            </div>
            <div className="productInfoItem">
              <div className="productInfoKey">Price: </div>
              <div className="productInfoValue">${product.price}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}