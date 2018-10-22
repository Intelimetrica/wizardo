import React from 'react';
import { Router, Link } from 'react-static';
import { hot } from 'react-hot-loader';
//;
import Routes from 'react-static-routes';
import Navbar from './components/Navbar';

import 'antd/dist/antd.css';
import './app.css';

/* TODO: remove blog and request of blogs in compilation */

const App = () => (
  <Router>
    <div>
      <nav>
        <Link exact to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </nav>
      <Navbar />
      <div className="content">
        <Routes />
      </div>
    </div>
  </Router>
)

export default hot(module)(App)
