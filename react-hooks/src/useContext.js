import React, { useState, createContext, useContext } from 'react'

const CountContext = createContext()

function Counter () {
  let count = useContext(CountContext)
  return (
    <div>
      <h2>{ count }</h2>
    </div>
  )
}

function useContextDemo() {
  const [ count, setCount ] = useState(0)
  return (
    <div>
      <p>You clicked { count } times.</p>
      <button onClick={ () => { setCount(count + 1 )} }>Cilck Me</button>
      <CountContext.Provider value={count}>
        <Counter />
      </CountContext.Provider>
    </div>
  )
}

export default useContextDemo