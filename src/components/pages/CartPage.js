import React from 'react'
import CartItem from '../CartItem'
import { Outlet } from 'react-router-dom'

const CartPage = () => {
  return (
    <>
    <CartItem />
    <Outlet />
    </>
    )
}

export default CartPage

export const loader = async ({request,params}) =>{
    //const response = await fetch('http://localhost:8000/cart/content',{headers:{ Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImxhaG91ZDEyM0BnbWFpbC5jb20iLCJpZCI6IjY0ODFhMmIwZGUyYjYyMjFiYjExOGIwYiIsImlhdCI6MTY4ODcxMzUxNiwiZXhwIjoxNjg4NzE3MTE2fQ.12QQNt11wVdIFjoYQ1KKqBFWFocVkxpqwhGyr5dA8U0`}})
    //const resjson = await response.json()
    return null
}
