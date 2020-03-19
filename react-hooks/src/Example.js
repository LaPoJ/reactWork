import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

function Index () {
  useEffect( () => {
    console.log('useEffect => Index Page: 鸡你太美')
  })
  return <h2>CXK-鸡你太美</h2>
}

function List () {
  useEffect( () => {
    console.log('useEffect => List Page: 我会打篮球，唱跳，rap')
    return () => {
      console.log('我是CXK的黑粉')
    }
  }, [])
  return <h2>鸡你太美 -- page</h2>
}

function Example() {
  const [ count, setCount ] = useState(0)
  useEffect( () => {
    console.log(`useEffect => You clicked ${ count } times`)
  })
  return (
    <div>
      <p>You clicked { count } times.</p>
      <button onClick={ () => { setCount(count + 1 )} }>Cilck Me</button>
      <Router>
        <ul>
          <li> <Link to="/">首页</Link> </li>
          <li> <Link to="/list">列表</Link> </li>
          <Route path="/" exact component={ Index }></Route>
          <Route path="/list" exact component={ List }></Route>
        </ul>
      </Router>
    </div>
  )
}

export default Example