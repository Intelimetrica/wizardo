import React from 'react';
import { Link, Router, Switch, Route } from 'react-static';
import Routes from 'react-static-routes';
import { hot } from 'react-hot-loader';
import { Layout } from 'antd';
const { Sider, Content, Footer } = Layout;
//;
import Navbar from './components/Navbar';
import Guides from './containers/Guides';
import logo_horizontal from './images/logo_horizontal.svg';

import 'antd/dist/antd.css';
import './app.css';
import '../node_modules/highlight.js/styles/atom-one-dark.css';

/* TODO: remove blog and request of blogs in compilation */

const App = () => (
  <Router>
    <Layout>
      <Sider style={{  height: '100%', overflowY:'scroll', position: 'fixed', left: 0 }} width={250}>
        <Link to='/'><img className='logo' src={logo_horizontal} alt="logo" /></Link>
        <Navbar />
      </Sider>
      <Layout style={{ marginLeft: 250 }}>
        <Content style={{minHeight: 'calc(100vh - 70px)'}}>
          <Router>
            <Switch>
              <Route path='/guides' component={Guides} />
              <Routes />
            </Switch>
          </Router>
        </Content>
        <Footer style={{ textAlign: 'center' }}>

          {`Wizardo ©${(new Date).getFullYear} Created by Intelimétrica`}
        </Footer>
      </Layout>
    </Layout>
  </Router>
)

export default hot(module)(App)
