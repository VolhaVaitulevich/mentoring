import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import Menu from 'antd/lib/menu';
import Layout from 'antd/lib/layout';
import Button from 'antd/lib/button';

import ThemeContext from '../../context/themeContext';
import OrientationContext from '../../context/orientationContext';

import { paths } from '../../paths';

import './styles.css';

const { Header } = Layout;
const { Item } = Menu;

const HeaderTemplate = ({selectedKey}) => {
  const { isDarkTheme, toggleTheme } = useContext(ThemeContext)
  const { isHorizontal, toggleOrientation} = useContext(OrientationContext)

  const dataTheme = isDarkTheme ? 'dark' : 'light';
  const dataOrientation = isHorizontal ? 'horizontal' : 'vertical';

  return (
    <Header 
      className='header'
      data-theme={dataTheme}
      data-orientation={dataOrientation}
    >
      <div className='logo' />
      <Menu
        className='header-menu'
        data-theme={dataTheme}
        theme='dark'
        mode={dataOrientation}
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
      <div 
        className="header-options"
        data-theme={dataTheme}
        data-orientation={dataOrientation}
      >
        <Button 
          className='button'
          type="primary" 
          onClick={toggleTheme}
        >
          Switch theme
        </Button>
        <Button 
          className='button'
          type="primary" 
          onClick={toggleOrientation}
        >
          Switch orientation
        </Button>  
      </div>  
    </Header>
  )
}

export default HeaderTemplate