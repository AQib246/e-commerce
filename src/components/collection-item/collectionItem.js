import React, { Component } from 'react'
import './collection-item.styles.scss';
import CustomButton from '../custom-button/customButton';
import {connect} from 'react-redux'
import { addToCart } from '../../Redux/Actions/cartAction';

const CollectionItem =({item,addItem})=> {
  const {imageUrl,name,price} =item
  return (
  <div className="collection-item">

      <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />

          <div className="collection-footer">
              <span className="name">{name}</span>
              <span className="price">{price}</span>
          </div>
<CustomButton  onClick={()=>addItem(item)}   inverted >Add to Cart</CustomButton>
  </div>

)}

const mapDispatchToProps =(dispatch)=>({
addItem:(item)=>dispatch(addToCart(item))
})

export default connect(null,mapDispatchToProps)(CollectionItem)