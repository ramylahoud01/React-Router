import React from 'react'
import ExpenseForm from '../ExpenseForm'

const ExpenseFormPage = () => {
  return (
   <ExpenseForm />
  )
}

export default ExpenseFormPage

export const action = async ({request,params}) =>{
  const data = await request.formData()
  console.log(data.get('email'));
  if(data.get('email')){
    return data.get('email')
  }
  return null
}