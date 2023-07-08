import React from 'react'
import { useFetcher} from 'react-router-dom'
const SignupForm = () => {
    const fetcher =useFetcher()
    console.log('using fetcher.data',fetcher.data)
  return ( 
    <fetcher.Form method='post' action='/form'>
      <label>Signup</label>
      <input name='email' type='text' />
      <button type='submit'>Submit</button>
    </fetcher.Form>
  )
}

export default SignupForm
