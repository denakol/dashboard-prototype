import React, {useState} from "react"
import {Form, Input, Button, Card, Typography} from "antd";
import {ValidateErrorEntity} from "rc-field-form/es/interface";
import {useHistory} from "react-router-dom";
import {AuthProvider, FirebaseHelper} from "../../auth/FirebaseHelper";
import s from "./styles.module.css";

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 16},
};
const tailLayout = {
    wrapperCol: {offset: 8, span: 16},
};

export const SignUp: React.FunctionComponent = () => {
    const [form] = Form.useForm();
    const history = useHistory();
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const onFinish = async ({email, password}: { email?: string, password?: string }) => {
        if (email && password) {
            setLoading(true)
            try {
                await FirebaseHelper.signUp(AuthProvider.EMAIL, {email, password})
            } catch (ex) {
                setError(ex.message)
                setLoading(false)
            }
        }
    };

    const onFinishFailed = (errorInfo: ValidateErrorEntity) => {
        console.log('Failed:', errorInfo);
    };

    const goToSignIn = () => {
        history.replace("/signIn");
    };

    return <Card title="Sign Up" className={s.card}>
        <Form
            {...layout}
            name="basic"
            form={form}
            initialValues={{
                email: "",
                password: ""
            }
            }
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Email"
                name="email"
                rules={[{required: true, message: 'Please input your email!'}]}
            >
                <Input/>
            </Form.Item>
            <Form.Item
                label="Password"
                name="password"
                rules={[{required: true, message: 'Please input your password!'}]}
            >
                <Input.Password/>
            </Form.Item>
            {error && <Form.Item  {...tailLayout}>
                <Typography.Text type="danger"> {error}</Typography.Text>
            </Form.Item>}
            <Form.Item  {...tailLayout}>
                <div className={s.buttonBlock}>
                    <Button type="link" onClick={goToSignIn}>
                        Back to Sign In
                    </Button>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        Sign Up
                    </Button>
                </div>
            </Form.Item>
        </Form>
    </Card>
}
