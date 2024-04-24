import React, { useContext, useEffect, useState } from 'react'
import ProductCard from '../components/productCard'
import AmountDisplay from '../components/amountDisplay'
import { getData } from '../api/axiosInterceptor'
import { CartContext } from '../context/cartContext'

const Cart = () => {
  const { state, dispatch } = useContext(CartContext);

  useEffect(() => {
    async function getCartData() {
      try {
        const res = await getData('/getCart');
        if(res.status === 200){
          dispatch({ type: 'getCart', payload: res.data[0]})
          dispatch({ type: 'totalAmount', payload: res.data[1]})
        }
      } catch (error) {
        console.log('error', error)
        return false
      }
    }
    getCartData();
  },[state.actionTaken])

  return (
    <>
      <div className='checkout-wrap'>
        <div className='card-side'>
          <div className='card-wrap'>
            {state.cartProducts.length === 0 && <h1>No products</h1>}
            {state.cartProducts.map((item) => (
              <ProductCard
                key={item}
                inCart={true}
                data={item}
              />
            ))}
          </div>
        </div>
        <AmountDisplay />
      </div>
    </>
  )
}

export default Cart