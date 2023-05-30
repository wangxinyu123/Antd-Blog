import React, { useState, useMemo, useEffect, useRef } from 'react'
import { Route, useLocation, Switch, Redirect } from 'react-router-dom'
import { Layout } from 'antd'
import routes from './routes'
import { IMenuConfig } from './interface/NavMenu'
import NavHeader from '@/components/NavHeader'
import SideNav from '@/components/SideNav'
import { materialConfig, productConfig, dataCenterConfig } from '@/constants/menuConfig'

const { Header, Content, Sider } = Layout

const App = () => {
    const [status, setStatus] = useState('light');
    const [menuList, setMenuList] = useState<any>([])
    const [sideStatus, setSideStatus] = useState(true)
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === '/') {
            setSideStatus(false)
        } else {
            const currentPath = location.pathname.split('/')[1]
            handleMenu(`/${currentPath}`)
            setSideStatus(true)
        }
    }, [location])

    const handleMenu = (path: string) => {
        switch (path) {
            case '/product':
                setMenuList(productConfig)
                break;
            case '/material':
                setMenuList(materialConfig)
                break;
            case '/dataCenter':
                setMenuList(dataCenterConfig)
                break;
        }
    }

    const theme = useMemo(() => {
        return localStorage.getItem('dark_theme')
    }, [status])

    const getTheme = (val: boolean) => {
        setStatus(val ? "dark" : "light")
    }

    return (
        <Layout>
            <Header>
                <NavHeader theme={theme!} getTheme={getTheme} changMenu={(value: string) => handleMenu(value)} />
            </Header>
            <Layout>
                {
                    sideStatus && <Sider>
                        <SideNav menu={menuList} />
                    </Sider>
                }
                <Content>
                    <Switch>
                        {
                            routes?.map((item: any) => {
                                return (
                                    <Route exact key={item.path} path={item.path} component={item.component} />
                                )
                            }
                            )
                        }
                        <Redirect to='/' />
                    </Switch>
                </Content>
            </Layout>
        </Layout>
    )
}

export default App