import React, { useState, useMemo, useEffect } from 'react'
import { Route, useLocation, Switch, Redirect } from 'react-router-dom'
import { Layout } from 'antd'
import routes from './routes'
import NavHeader from '@/components/NavHeader'
import SideNav from '@/components/SideNav'
import { materialConfig, productConfig, dataCenterConfig } from '@/constants/menuConfig'

const { Header, Content, Sider } = Layout

const App = () => {
    const [status, setStatus] = useState('light');
    const [menuList, setMenuList] = useState<any>([])
    const [sideStatus, setSideStatus] = useState(true)
    const materialMenu = materialConfig.map((item) => item.path)
    const productMenu = productConfig.map((item) => item.path)
    const dataCenterMenu = dataCenterConfig.map((item) => item.path)
    const location = useLocation()

    useEffect(() => {
        if (location.pathname === '/') {
            setSideStatus(false)
        } else {
            setSideStatus(true)
        }
    }, [location])

    useEffect(() => {
        if (materialMenu.concat(["/material"]).includes(location.pathname)) {
            setMenuList(materialConfig)
        } else if (productMenu.concat(["/product"]).includes(location.pathname)) {
            setMenuList(productConfig)
        } else if (dataCenterMenu.concat(['/dataCenter']).includes(location.pathname)) {
            setMenuList(dataCenterConfig)
        }
    }, [location])

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
                {
                    sideStatus ? (
                        <Sider>
                            <SideNav menu={menuList} />
                        </Sider>
                    ) : null
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