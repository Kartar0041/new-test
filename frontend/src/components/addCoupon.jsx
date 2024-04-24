import React, { useContext, useEffect, useState } from 'react'
import { getData } from '../api/axiosInterceptor'
import { CartContext } from '../context/cartContext';

const AddCoupon = () => {
  const [coupons, setCoupons] = useState([]);
  const { state, dispatch } = useContext(CartContext);

  useEffect(() => {
    async function fetchCoupon() {
      try {
        const res = await getData('/getCoupon');
        if (res.status === 200) {
          setCoupons(res.data)
        }
      } catch (error) {
        throw new Error();
      }
    }
    fetchCoupon()
  }, [])

  // Handle Calculate discount
  const handleCalc = (disPer) => {
    const  { totalAmount } = state
    const discount = (disPer/100) * totalAmount;
    const data = { total: (totalAmount - discount.toFixed(2)), discount: discount }
    dispatch({ type: 'couponCode', payload: data })
  }

  return (
    <>
      <div>
        {coupons.map((item) => (
          <div>
            <span>{item.code}</span>
            <span>{item.discount}% OFF</span>
            {!state.discount && <button className="apply-btn" onClick={() => handleCalc(item.discount)}>Apply Coupon</button>}
          </div>
        ))}
      </div>
    </>
  )
}

export default AddCoupon