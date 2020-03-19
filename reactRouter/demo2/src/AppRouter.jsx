import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Index from './pages/Index';
import Video from './pages/Video';
import Workpalce from './pages/Workplace';
import './index.css';

function AppRouter() {
  return (
    <Router>
      <div className="mainDiv">
      <div className="leftNav">
        <h3>一级导航</h3>
        <ul>
          <li><Link to="/">首页</Link></li>
          <li><Link to="/video">视频</Link></li>
          <li><Link to="/workplace">文字</Link></li>
        </ul>
      </div>
      <div className="rightMain">
        <Route path="/" exact component={Index} />
        <Route path="/video" component={Video} />
        <Route path="/workplace" component={Workpalce} />
      </div>
    </div>
    </Router>
  )
}

export default AppRouter;