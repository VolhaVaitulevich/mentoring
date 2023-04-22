import { Layout } from 'antd'
import HeaderTemplate from '../headerTemplate/HeaderTemplate'
import { useLocation } from 'react-router-dom'
import { useContext } from 'react'
import ThemeContext from '../../context/themeContext'
import OrientationContext from '../../context/orientationContext'
import './styles.css'

const { Content, Footer } = Layout;

const GeneralTemplate = ({ children }) => {
    const { pathname } = useLocation()
    const page = pathname.replaceAll('/', '')
    const { isDarkTheme } = useContext(ThemeContext)
    const { isHorizontal } = useContext(OrientationContext)
    
    const dataTheme = isDarkTheme ? 'dark' : 'light';
    const dataOrientation = isHorizontal ? 'horizontal' : 'vertical';

    return (
        <Layout style={{ minHeight: '100hv' }}>
            <HeaderTemplate selectedKey={page} />
            <Content 
                className='content'
                style={{ padding: '0 50px' }}
                data-orientation={dataOrientation}
            >
                {children}
            </Content>
            <Footer 
                className='footer'
                data-theme={dataTheme}
            >
                Created by Olya
            </Footer>
        </Layout>
    );
};

export default GeneralTemplate