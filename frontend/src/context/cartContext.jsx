import { createContext, useReducer } from "react";
import { getData } from "../api/axiosInterceptor";


export const CartContext = createContext();

const initialState = {
  cartCount: 0,
  products: [],
  cartProducts: [],
  actionTaken: false,
  totalAmount: 0,
  discount: 0,
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'products':
      return {
        ...state,
        products: [...action.payload]
      }
    case 'getCart':
      return {
        ...state,
        cartProducts: [...action.payload]
      }
    case 'updateCart':
      return {
        ...state,
        actionTaken: !state.actionTaken
      }
    case 'totalAmount':
      return {
        ...state,
        totalAmount: action.payload
      }
    case 'couponCode':
      return {
        ...state,
        totalAmount: action.payload.total,
        discount: action.payload.discount.toFixed(2)
      }
    default:

      break;
  }
}

async function getCartData() {
  try {
    const res = await getData('/getCart');
    console.log('resz >', res)
    return res
  } catch (error) {
    console.log('error', error)
    return false
  }
}

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{
      state,
      dispatch
    }}>
      {children}
    </CartContext.Provider>
  )
}