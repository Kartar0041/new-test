import React, { useContext } from 'react'
import { postData } from '../api/axiosInterceptor'
import { CartContext } from '../context/cartContext'


const ProductCard = ({ inCart, data }) => {
  const { state, dispatch } = useContext(CartContext)

  // Handle Add to cart
  const handleAddToCart = async (id) => {
    try {
      const res = await postData('/addToCart', { id: id });
      if(res.status === 200){
        alert(res.data)
      }
    } catch (error) {
      console.log('errr', error)
    }
  }

  // Handle Remove to cart 
  const handleRemoveToCart = async (id) => {
    try {
      const res = await postData('/removeFromCart', { id: id });
      if(res.status === 200){
        dispatch({ type: 'updateCart' })
        alert(res.data)
      }
    } catch (error) {
      console.log('err', error)
    }
  }

  return (
    <div className="product-card">
      <img src="https://picsum.photos/id/237/200/300" alt="Product" className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{data.name}</h3>
        <p className="product-price">${data.price}</p>
        {inCart ?
          <button className="add-to-cart-btn" onClick={() => handleRemoveToCart(data.pid)}>Remove to Cart</button>
          :
          <button className="add-to-cart-btn" onClick={() => handleAddToCart(data._id)}>Add to Cart</button>
        }
      </div>
    </div>
  )
}

export default ProductCard;