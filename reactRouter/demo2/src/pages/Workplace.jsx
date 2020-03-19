import React from 'react'
import { Route, Link } from 'react-router-dom'
import Getup from './workplace/Getup'
import Money from './workplace/Money'

function Workpalce() {
  return (
    <div>
      <div className="topNav">
        <ul>
          <li><Link to="/workplace/getup">Get Up</Link></li>
          <li><Link to="/workplace/money">money</Link></li>
        </ul>
      </div>
      <div className="videoContent">
        <div><h3>文字</h3></div>
        <Route path="/workplace/getup/" component={Getup} />
        <Route path="/workplace/money/" component={Money} />
      </div>
    </div>
  )
}

export default Workpalce