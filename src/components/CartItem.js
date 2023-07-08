import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { CartActions } from '../store'
const CartItem = () => {
    const dispatch = useDispatch()
    const items = useSelector(state => state.cart.items)

  return (
    <div>
        <button onClick={()=> dispatch(CartActions.addItem({title:"hello"}))}>fetch items</button>
        {items.map((item,index) => <li key={index}>{item.newItem.title}</li>)}
    </div>
  )
}

export default CartItem
