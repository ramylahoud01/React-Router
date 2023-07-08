import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { counterActions } from '../store';
import { useLocation } from 'react-router-dom';
const Counter = () => {
  const location = useLocation()
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter)
  return (
    <div>
      <button onClick={() =>dispatch(counterActions.increment())}>click</button>
      {counter}
      {location.hash}
    </div>
  )
}

export default Counter
