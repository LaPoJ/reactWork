import React, { useReducer } from 'react'
function ReducerDemo () {
  const [count, dispatch] = useReducer( (state, action)=> {
    switch (action) {
      case 'ADD':
        return state + 1
      case 'SUB':
        return state - 1
      default:
        return state
    }
  }, 0)

  return(
    <div>
      <h2>count: { count }</h2>
      <button onClick={ () => { dispatch('ADD')}}>Increment</button>
      <button onClick={ () => { dispatch('SUB')}}>Decrement</button>
    </div>
  )
}

export default ReducerDemo