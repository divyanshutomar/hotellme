import React from 'react';
import { Row, Col, Typography } from 'antd';
import ActivityCard from './ActivityCard';

const { Title } = Typography;


function ScrollSection(props) {
    const { sectionName, items = [] } = props;
    return (
        <div>
            <Title style={{ margin: '1em' }} level={4}>{sectionName}</Title>
            <hr />
            <Row gutter={8} type='flex' style={{ flexFlow: 'row nowrap', overflowX: 'scroll' }}>
                {items.length ? items.map(({ image, name, slug }, idx) => (
                    <Col style={{ margin: '1em' }} xs={12} key={slug}>
                        <ActivityCard image={image} name={name} slug={slug} />
                    </Col>
                )) : null}
            </Row>
        </div >
    );
}

export default ScrollSection;

