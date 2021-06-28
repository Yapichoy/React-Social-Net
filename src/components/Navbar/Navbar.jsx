import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {Layout, Menu} from "antd";
import {LaptopOutlined, NotificationOutlined, UserOutlined} from "@ant-design/icons";


const {SubMenu} = Menu;
const {Sider} = Layout;
const nav = [
  {id: 1, link: '/profile', text: 'Profile'},
  {id: 2, link: '/dialogs', text: 'Message'},
  {id: 3, link: '/chat', text: 'Chat'},
  {id: 4, link: '/users', text: 'Users'},
  {id: 5, link: '/', text: 'News'},
  {id: 6, link: '/', text: 'Music'},
  {id: 7, link: '/', text: 'Settings'}
]
const Navbar = () => (
  <nav className={s.nav}>
    <Sider className="site-layout-background" width={200}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{height: '100%'}}
      >
        {nav.map((n => (<Menu.Item key={n.id}><NavLink key={n.id} to={n.link} className={`${s.item}`}
                                                       activeClassName={'active'}>{n.text}</NavLink></Menu.Item>)))}
        {/* <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
            <Menu.Item key="1">option1</Menu.Item>
            <Menu.Item key="2">option2</Menu.Item>
            <Menu.Item key="3">option3</Menu.Item>
            <Menu.Item key="4">option4</Menu.Item>
          </SubMenu>*/}
      </Menu>
    </Sider>
  </nav>
);

export default Navbar;