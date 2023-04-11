import { Layout } from 'antd';
import HeaderTemplate from '../header/HeaderTemplate';
import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';
const { Content, Footer } = Layout;

const GeneralTemplate = ({ children }) => {

    const { pathname } = useLocation()
    const page = useMemo(() => {
        return pathname.replaceAll('/', '')
    }, [])

    return (
        <Layout style={{ minHeight: '100hv' }}>
        <HeaderTemplate selectedKey={page}/>
        <Content style={{ padding: '0 50px' }}>
            {children}
        </Content>
        <Footer className='footer'
            style={{
            position: 'fixed',
            bottom: 0,
            width: '100%',
            textAlign: 'center',
            }}
        >
            Created by ___
        </Footer>
        </Layout>
    );
};

export default GeneralTemplate