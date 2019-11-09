import React from 'react'
import { PageHeader, Typography } from 'antd';
import ScrollSection from './ScrollSection';
import data from './data.json'

const { Title, Text } = Typography;

function Dashboard() {
    return (
        [<PageHeader
            style={{
                borderBottom: '1px solid rgb(235, 237, 240)',
            }}
            title="hotell.me"
        />,
        <div style={{ padding: '1em' }}><Title level={3}>Welcome Lisa</Title>
            <Text type="secondary">Enjoy your time in Salzburg - let us help you to make it an unforgettable EXPERIENCE!</Text></div>,
        <div>
            {data.map(({ sectionName, items }) => (<ScrollSection key={sectionName} sectionName={sectionName} items={items} />))}
        </div>

        ]
    );
}

export default Dashboard;