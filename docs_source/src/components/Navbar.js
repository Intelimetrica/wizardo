import { Menu, Icon, Button } from 'antd';
import React from 'react';
import { Link } from 'react-static';

const {SubMenu, Item} = Menu;

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
            <SubMenu key='g1' title={<Link to='/guides#first-steps'>First steps      </Link>} >
              <Item key='gg11'> <Link to='/guides#first-steps-installation'>Installation</Link> </Item>
              <Item key='gg12'> <Link to='/guides#first-steps-init'>Wizardo Init</Link> </Item>
              <Item key='gg13'> <Link to='/guides#first-steps-about-git'>About Git & Wizardo</Link> </Item>
              <Item key='gg14'> <Link to='/guides#first-steps-cant-find-wizardo'>Can't find .wizardo</Link> </Item>
            </SubMenu>
            <SubMenu key='g2' title={<Link to='/guides#generators'>Create a generator</Link>} >
              <Item key='gg21'> <Link to='/guides#generators-setup'>Setup</Link> </Item>
              <Item key='gg22'> <Link to='/guides#generators-create-command'>Create command</Link> </Item>
              <Item key='gg23'> <Link to='/guides#generators-list-command'>List command</Link> </Item>
            </SubMenu>
            <SubMenu key='g3' title={<Link to='/guides#templates'>Templates</Link>} >
              <Item key='gg31'> <Link to='/guides#templates-folder'>Templates Folder</Link> </Item>
              <Item key='gg32'> <Link to='/guides#templates-structure-in-config'>Templates structure in config file</Link> </Item>
              <Item key='gg33'> <Link to='/guides#templates-run-generator'>Run generator </Link> </Item>
              </SubMenu>
              <SubMenu key='g4' title={<Link to='/guides#variables'>Variables</Link>} >
              <Item key='gg41'> <Link to='/guides#variables-types'>Variable types</Link> </Item>
              <Item key='gg42'> <Link to='/guides#variables-in-config'>Variables in config</Link> </Item>
              <Item key='gg43'> <Link to='/guides#variables-run-generator'>Run generator </Link> </Item>
              <Item key='gg44'> <Link to='/guides#variables-in-templates'>Variables in templates </Link> </Item>
              <Item key='gg45'> <Link to='/guides#variables-limitations'>Limitations and workaround</Link> </Item>
              </SubMenu>
              <SubMenu key='g5' title={<Link to='/guides#modifiers'>Modifiers</Link>} >
              <Item key='gg51'> <Link to='/guides#modifiers-structure'>Modifiers structure</Link> </Item>
              <Item key='gg52'> <Link to='/guides#modifiers-use'>Use modifiers</Link> </Item>
              <Item key='gg53'> <Link to='/guides#modifiers-execute'>Execute modifiers </Link> </Item>
              <Item key='gg54'> <Link to='/guides#modifiers-warning'>Warning on modifiers</Link> </Item>
            </SubMenu>
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
