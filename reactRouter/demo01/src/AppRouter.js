import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './pages/Index'
import List from './pages/List'
import Detail from './pages/Detail'
import Home from './pages/Home'


function AppRouter() {
  return (
    <Router>
      <ul>
        <li><Link to="/">首页</Link></li>
        <li><Link to="/list">列表</Link></li>
      </ul>
      <Route path="/" exact component={Index}></Route>
      <Route path="/list" component={List}></Route>
      <Route path="/detail/:id" component={Detail}></Route>
      <Route path="/home/" component={Home}></Route>
    </Router>
  )
}

export default AppRouter