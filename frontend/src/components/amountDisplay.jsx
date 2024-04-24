import React, { useContext } from 'react'
import AddCoupon from './addCoupon'
import { CartContext } from '../context/cartContext'

const AmountDisplay = () => {

  const { state, dispatch } = useContext(CartContext);



  return (
    <div className='right-side'>
      <div className="container">
        <h4>Discount</h4>
        <p>Total: ${state.discount}</p>
        <h4>Total Amount</h4>
        <p>Total: ${state.totalAmount}</p>
        <AddCoupon />
      </div>
    </div>
  )
}

export default AmountDisplay