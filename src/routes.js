import { Suspense, lazy, useState, useMemo } from 'react'
import { Layout, Spin } from 'antd'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import NavHeader from '@/components/NavHeader'

const { Header, Content } = Layout

const routes = [
    {
        path: '/',
        component: lazy(() => import('@/pages/home'))
    },
    {
        path: '/product',
        component: lazy(() => import('@/pages/product'))
    },
    {
        path: '/material',
        component: lazy(() => import('@/pages/material'))
    },
    {
        path: '/dataCenter',
        component: lazy(() => import('@/pages/dataCenter'))
    }
]

// 处理路由
const changeRouter = (routes) => {
    return routes?.map((item) => {
        if (item.children) {
            item.children = changeRouter(item.children)
        }
        item.element = <Suspense fallback={<Spin spinning={true} />}>
            <item.component />
        </Suspense>
        return item
    })
}

const Routes = () => useRoutes(changeRouter(routes))

const AppWrapper = () => {
    const [status, setStatus] = useState('light');

    const theme = useMemo(() => {
        return localStorage.getItem('dark_theme')
    }, [status])

    const getTheme = (val) => {
        setStatus(val ? "dark" : "light")
    }
    return (
        <Router>
            <Header>
                <NavHeader theme={theme} getTheme={getTheme} />
            </Header>
            <Content>
                <Routes />
            </Content>
        </Router>
    )
}

export default AppWrapper