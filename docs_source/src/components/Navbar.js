import { Menu, Icon, Button } from 'antd';
import React from 'react';
import { Link } from 'react-static';

const {SubMenu, ItemGroup, Item} = Menu;

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
            <ItemGroup key='g1' title={<Link to='/guides#first-steps'>First steps      </Link>} >
              <Item key='gg11'> <Link to='/guides#first-steps-installation'>Installation</Link> </Item>
              <Item key='gg12'> <Link to='/guides#first-steps-init'>Wizardo Init</Link> </Item>
              <Item key='gg13'> <Link to='/guides#first-steps-about-git'>About Git & Wizardo</Link> </Item>
              <Item key='gg14'> <Link to='/guides#first-steps-cant-find-wizardo'>Can't find .wizardo</Link> </Item>
            </ItemGroup>
            <ItemGroup key='g2' title={<Link to='/guides#generators'>Create a generator</Link>} >
              <Item key='gg21'> <Link to='/guides#generators-setup'>Setup</Link> </Item>
              <Item key='gg22'> <Link to='/guides#generators-create-command'>Wizardo Init</Link> </Item>
              <Item key='gg23'> <Link to='/guides#generators-list-command'>About Git & Wizardo</Link> </Item>
            </ItemGroup>
            <ItemGroup key='g3' title={<Link to='/guides#templates'>Templates</Link>} >
              <Item key='gg31'> <Link to='/guides#templates-folder'>Templates Folder</Link> </Item>
              <Item key='gg32'> <Link to='/guides#templates-structure-in-config'>Templates structure in config file</Link> </Item>
              <Item key='gg33'> <Link to='/guides#templates-run-generator'>Run generator </Link> </Item>
            </ItemGroup>
          </SubMenu>
          <Menu.Item key='4'> <Link to='/contribute'>Contribute</Link> </Menu.Item>
        </Menu>
    );
  }
}

export default App;

      {/*
            <MenuItemGroup key='7'  title={<Link to='/guides#variables'>Variables          </Link>} >
              <Menu.Item key='4'> <Link to='/contribute'>Contribute</Link> </Menu.Item>
            </MenuItemGroup>
            <MenuItemGroup key='9'  title={<Link to='/guides#modifiers'>Modifiers          </Link>} >
              <Menu.Item key='4'> <Link to='/contribute'>Contribute</Link> </Menu.Item>
            </MenuItemGroup>
      */}
