import React, { useState, useMemo } from 'react'
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import routes from './routes'
import NavHeader from '@/components/NavHeader'
import SideNav from '@/components/SideNav'
import { materialConfig } from '@/constants/menuConfig'

const { Header, Content, Sider } = Layout

const App = () => {
    const [status, setStatus] = useState('light');

    const theme = useMemo(() => {
        return localStorage.getItem('dark_theme')
    }, [status])

    const getTheme = (val: boolean) => {
        setStatus(val ? "dark" : "light")
    }

    return (
        <Layout>
            <Header>
                <NavHeader theme={theme!} getTheme={getTheme} />
            </Header>
            <Layout>
                <Sider>
                    <SideNav menu={materialConfig} />
                </Sider>
                <Content>
                    {
                        routes?.map((item: any) => {
                            return (
                                <Route exact key={item.path} path={item.path} component={item.component} />
                            )
                        }
                        )
                    }
                </Content>
            </Layout>
        </Layout>
    )
}

export default App