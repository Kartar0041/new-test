import React, { useContext, useEffect } from 'react';
import ProductCard from '../components/productCard';
import { getData, postData } from '../api/axiosInterceptor';
import { CartContext } from '../context/cartContext';

const Homepage = () => {

  const { state, dispatch } = useContext(CartContext);

  useEffect(() => {
    const fetchData = async () =>{
      try {
        const result = await getData('/getProducts');
        if(result.status === 200){
          dispatch({ type: 'products', payload: result.data })
        }
      } catch (error) {
        console.log('error in homepage', error)
      }
    }
    fetchData()
  },[])


  return (
    <>
      <div className='card-wrap'>
        {state.products.map((item) => (
            <ProductCard  
              key={item}
              inCart={false} 
              data={item}
            />
        ))}
      </div>
    </>
  )
}

export default Homepage