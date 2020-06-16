import React, {useMemo, useState} from "react"
import {Button, Card, Form, Input, Typography} from "antd";
import {ValidateErrorEntity} from "rc-field-form/es/interface";
import {useHistory} from "react-router-dom";
import {AuthProvider, FirebaseHelper} from "../../auth/FirebaseHelper";
import s from "./styles.module.css"

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};
const tailLayout = {
    wrapperCol: {offset: 8, span: 16},
};

export const SignIn: React.FunctionComponent = () => {
    const [form] = Form.useForm();
    const history = useHistory();
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const onFinish = async ({email, password}: { email?: string, password?: string }) => {
        if (email && password) {
            setLoading(true)
            try {
                await FirebaseHelper.signIn(AuthProvider.EMAIL, {
                    email,
                    password
                })
            } catch (ex) {
                setError(ex.message)
                setLoading(false)
            }
        }
    };

    const onFinishFailed = (errorInfo: ValidateErrorEntity) => {
        console.log('Failed:', errorInfo);
    };

    const goToSignUp = () => {
        history.replace("/signUp");
    }

    const emailRules = useMemo(() => [{required: true, message: 'Please input your email!'}], [])
    const passwordRules = useMemo(() => [{required: true, message: 'Please input your password!'}], [])
    const initialValue = useMemo(() => {
        return {
            email: "",
            password: ""
        }
    }, [])

    return (
        <Card title="Sign In" className={s.card}>
            <Form
                {...layout}
                name="basic"
                form={form}
                initialValues={initialValue}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={emailRules}
                >
                    <Input/>
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={passwordRules}
                >
                    <Input.Password/>
                </Form.Item>
                {error && <Form.Item  {...tailLayout}>
                    <Typography.Text type="danger"> {error}</Typography.Text>
                </Form.Item>}
                <Form.Item   {...tailLayout}>
                    <div className={s.buttonBlock}>
                        <Button onClick={goToSignUp}>
                            Sign Up
                        </Button>
                        <Button type="primary" htmlType="submit" loading={loading}>
                            Sign In
                        </Button>
                    </div>
                </Form.Item>
            </Form>
        </Card>
    )
}
