import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'
import { Button } from 'antd';

import 'antd/dist/antd.css';
import './app.css'

const App = () => (
  <Router>
    <div>
      <nav>
        <Link exact to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <div className="content">
        <Button>default</Button>
        <Routes />
      </div>
    </div>
  </Router>
)

export default hot(module)(App)
