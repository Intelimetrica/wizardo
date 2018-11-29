import React, { Component } from "react";
import { Link, Router, Switch, Route } from "react-static";
import Routes from "react-static-routes";
import { hot } from "react-hot-loader";
import { Layout } from "antd";
const { Sider, Content, Footer } = Layout;

import classNames from "classnames";
//;
import Navbar from "./components/Navbar";
import MenuIcon from "./components/MenuIcon";
import Guides from "./containers/Guides";
import logo_horizontal from "./images/logo_horizontal.svg";

import "antd/dist/antd.css";
import "./app.css";
import "../node_modules/highlight.js/styles/atom-one-dark.css";

/* TODO: remove blog and request of blogs in compilation */

class App extends Component {
  state = {
    isMenuHide: true
  };

  onClickIcon = () => {
    this.setState({ isMenuHide: !this.state.isMenuHide });
  };

  render() {
    return (
      <Router>
        <Layout>
          <MenuIcon
            isMenuHide={this.state.isMenuHide}
            onClick={this.onClickIcon}
          />

          <Sider
            width={250}
            className={classNames({
              sider: this.state.isMenuHide,
              "js-sider": !this.state.isMenuHide
            })}
          >
            <Link to="/">
              <img className="logo" src={logo_horizontal} alt="logo" />
            </Link>
            <Navbar />
          </Sider>
          <Layout className="layout">
            <Content style={{ minHeight: "calc(100vh - 70px)" }}>
              <Router>
                <Switch>
                  <Route path="/guides" component={Guides} />
                  <Routes />
                </Switch>
              </Router>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              {`Wizardo ©${new Date().getFullYear()} Created by Intelimétrica`}
            </Footer>
          </Layout>
        </Layout>
      </Router>
    );
  }
}

export default hot(module)(App);
