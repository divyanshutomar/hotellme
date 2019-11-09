import React from 'react';
import {
    useParams
} from "react-router-dom";
import { useHistory } from "react-router-dom";
import { PageHeader, Row, Col, Typography, Icon, Button } from 'antd';
import data from './data.json';

const { Text } = Typography;

function Experience() {
    const history = useHistory();
    const { slug } = useParams();
    const expData = data.find(ele => ele.slug === slug);
    if (expData) {
        const { image, name, description, time, duration, location, number_trails, open_times } = expData;
        return (<div>
            <PageHeader
                style={{
                    border: '1px solid rgb(235, 237, 240)',
                }}
                onBack={history.goBack}
                title={name}
            />
            <Row>
                <Col>
                    <img style={{ width: '100%' }} src={image} alt="experience" />
                </Col>
            </Row>
            <Row style={{ padding: '0.5em' }}>
                {location && <Col style={{ padding: '0.5em' }} xs={12}><Icon type="pushpin" /> <b>Location</b>
                    <Text style={{ paddingLeft: '5px' }}>{location}</Text></Col>}
                {time && <Col style={{ padding: '0.5em' }} xs={12}><Icon type="calendar" /> <b>On</b>
                    <Text style={{ paddingLeft: '5px' }}>{time}</Text></Col>}
                {duration && <Col style={{ padding: '0.5em' }} xs={12}><Icon type="clock-circle" /> <b>Duration</b>
                    <Text style={{ paddingLeft: '5px' }}>{duration}</Text></Col>}
                {open_times && <Col style={{ padding: '0.5em' }} xs={24}><Icon type="clock-circle" /> <b>Opening Hours</b>
                    <Text style={{ paddingLeft: '5px' }}>{open_times}</Text></Col>}
                {number_trails && <Col style={{ padding: '0.5em' }} xs={12}><Icon type="number" /> <b>Number of Trails</b>
                    <Text style={{ paddingLeft: '5px' }}>{number_trails}</Text></Col>}
            </Row>
            <Row style={{ padding: '0.5em' }}>
                <Col>
                    <Text>{description}</Text>
                </Col>
            </Row>
            <Row type='flex' style={{ padding: '1em', width: '100%' }} align='center' justify='center'>
                <Button type="primary" size='large'>Know More</Button>
            </Row>
        </div>)
    }
    return null;
}

export default Experience