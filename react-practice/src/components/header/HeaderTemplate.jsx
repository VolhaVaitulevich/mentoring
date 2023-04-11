import { Link } from 'react-router-dom';
import { paths } from '../../paths';
import Menu from 'antd/lib/menu';
import Layout from 'antd/lib/layout';
import React from 'react';
import './styles.css';

const { Header } = Layout;
const { Item } = Menu;


const HeaderTemplate = ({selectedKey}) => {

  return (
    <Header className='header'>
      <div className='logo' />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={[selectedKey || '/']}>
        <Item key="/">
          <Link to={paths.home()} />
          Home
        </Item>
        <Item key="comments">
          <Link to={paths.comments()} />
          Comments
        </Item>
        <Item key="others">
          <Link to={paths.others()} />
          Others
        </Item>
      </Menu>
    </Header>
  )
}

export default HeaderTemplate