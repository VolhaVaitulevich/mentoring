import React from "react";
import { LoadingOutlined } from '@ant-design/icons';
import Spin from 'antd/lib/spin';


const Loader = () => {
    return (
        <div style={{
            position: "absolute",
            top: '10rem',
            width: '100%',
            display: 'flex',
            justifyContent: 'center'
        }}>
            <span>Loading... </span>
            <Spin indicator={<LoadingOutlined />}/>
        </div> 
    )
}

export default Loader
