import { Menu, Icon, Button } from 'antd';
import React from 'react';
import { Link } from 'react-static';

const SubMenu = Menu.SubMenu;

class App extends React.Component {
  render() {
    return (
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode='inline'
          theme='dark'
        >
          <Menu.Item key='1'> <Link to='/'>Home</Link> </Menu.Item>
          <SubMenu key='sub1' title={<Link to='/guides'>Guides</Link>} >
            <Menu.Item key='11'>  <Link to='/guides#first-steps'>First steps</Link></Menu.Item>
            <Menu.Item key='5'>  <Link to='/guides#generators'>Create a generator</Link></Menu.Item>
            <Menu.Item key='6'>  <Link to='/guides#templates'>Templates </Link></Menu.Item>
            <Menu.Item key='7'>  <Link to='/guides#variables-config'>Variables in config</Link></Menu.Item>
            <Menu.Item key='8'>  <Link to='/guides#variables-templates'>Variables in templates</Link></Menu.Item>
            <Menu.Item key='9'>  <Link to='/guides#modifiers'>Modifiers</Link></Menu.Item>
            <Menu.Item key='10'> <Link to='/guides#run-the-generator'>Run the generator</Link></Menu.Item>
          </SubMenu>
          <Menu.Item key='3'> <Link to='docs'>Docs</Link> </Menu.Item>
          <Menu.Item key='4'> <Link to='/contribute'>Contribute</Link> </Menu.Item>
        </Menu>
    );
  }
}

export default App;
