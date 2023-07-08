import React from 'react'
import { useDispatch } from 'react-redux'
import { CartActions } from '../store'
const Cart = () => {
    const dispatch = useDispatch()
  return (
    <div>
      <button onClick={()=> dispatch(CartActions.addItem({id:"1"}))}>fetch items</button>
    </div>
  )
}

export default Cart
