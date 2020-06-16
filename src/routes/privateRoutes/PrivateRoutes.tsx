import React from "react";
import {Link, Redirect, Route, Switch, useLocation} from "react-router-dom";
import {Dashboard} from "../../components/Dashboard/Dashboard";
import {Settings} from "../../components/Settings/Settings";
import {UserInfo} from "../../auth/FirebaseHelper";
import NavBar from "../../components/Layout/NavBar";
import {Layout, Menu} from "antd";
import s from "./PrivateRoutes.module.css"

const {Footer, Sider, Content} = Layout;

interface PrivateRouteProps {
    user: UserInfo
}

export const PrivateRoutes: React.FC<PrivateRouteProps> = ({user}) => {
    const location = useLocation();

    return <Layout className={s.container}>
        <NavBar user={user}/>
        <Layout>
            <Sider className={s.sider} theme="light">
                <Menu
                    mode="inline"
                    selectedKeys={[location.pathname]}
                    className={s.siderMenu}
                >
                    <Menu.Item key="/dashboard">
                        <Link to="/dashboard">Dashboard </Link>
                    </Menu.Item>
                    <Menu.Item key="/settings">
                        <Link to="/settings">Settings </Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Layout className={s.contentLayout}>
                    <Content>
                        <Switch>
                            <Route path="/dashboard" component={Dashboard} exact/>
                            <Route path="/settings" component={Settings}/>
                            <Redirect to="/dashboard"/>
                        </Switch>
                    </Content>
                </Layout>
                <Footer>denakol08@gmail.com</Footer>
            </Layout>

        </Layout>

    </Layout>
}
