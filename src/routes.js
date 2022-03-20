import { Suspense, lazy, useState, useMemo } from 'react'
import { Spin } from 'antd'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import NavHeader from '@/components/NavHeader'

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
        path: '/material/*',
        component: lazy(() => import('@/pages/material')),
        children: [
            {
                path: 'tableWithPagination',
                component: lazy(() => import('@/components/TableWithPagination'))
            },
            {
                path: 'notFound',
                component: lazy(() => import('@/components/NotFound'))
            },
            {
                path: 'statusStep',
                component: lazy(() => import('@/components/StatusStep'))
            },
        ]
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
            <header>
                <NavHeader theme={theme} getTheme={getTheme} />
            </header>
            <div>
                <Routes />
            </div>
        </Router>
    )
}

export default AppWrapper