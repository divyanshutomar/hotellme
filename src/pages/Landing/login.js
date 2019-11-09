import React from 'react';
import { Form, Icon, Input, Button, Row, Col } from 'antd';
import { useHistory } from "react-router-dom";


function LoginForm(props) {
    const { getFieldDecorator } = props.form;
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault();
        props.form.validateFields((err, values) => {
            if (!err) {

                console.log('Received values of form: ', values);
                history.push('/dashboard')
            }
        });
    }


    return (
        <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item>
                {getFieldDecorator('roomnumber', {
                    rules: [{ required: true, message: 'Please input your room number!' }],
                })(
                    <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Room Number"
                    />,
                )}
            </Form.Item>
            <Form.Item>
                {getFieldDecorator('lastname', {
                    rules: [{ required: true, message: 'Please input your family name!' }],
                })(
                    <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Last Name"
                    />,
                )}
            </Form.Item>
            <Row type='flex' align='center' justify='center'><Col><Button type="primary" htmlType="submit">
                Check In
                </Button></Col></Row>
        </Form>

    )
}


const WrappedLoginForm = Form.create({ name: 'landing_login' })(LoginForm);


export default WrappedLoginForm;