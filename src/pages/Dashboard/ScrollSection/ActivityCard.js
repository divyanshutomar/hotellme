import React from 'react';
import { Card } from 'antd';
import { useHistory } from "react-router-dom";

export default function ActivityCard({ image, name, slug }) {
    const history = useHistory();
    function handleCardclick() {
        history.push(`/experience/${slug}`)
    }
    return (
        <Card
            onClick={handleCardclick}
            hoverable
            cover={<img style={{ height: 150 }} src={image}
                alt='activity' />}
            bodyStyle={{ padding: '0.5em' }}
        >
            {name}
        </Card>)
}