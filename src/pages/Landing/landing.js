import React from 'react';
import { Typography } from 'antd';
import { Row, Col } from 'antd';
import './landing.css'
import Login from './login';

const { Title } = Typography;


function LandingPage() {
    return (
        <div className="landingRoot">
            <Row type="flex" justify="center">
                <Col>
                    <Title level={3}>Weclome to Salzburg</Title>
                    <Title level={4}>Your experience starts here</Title>
                </Col>
            </Row>
            <Row type="flex" align='center' justify="center">
                <Col>
                    <Login />
                </Col>
            </Row>
        </div>
    )
}

export default LandingPage;