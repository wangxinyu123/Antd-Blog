import { lazy } from 'react'

const routes = [
    {
        path: '/',
        component: lazy(() => import('@/pages/home'))
    },
    {
        path: '/product',
        component: lazy(() => import('@/pages/product/index'))
    },
    {
        path: '/material',
        component: lazy(() => import('@/pages/material/index')),
    },
    {
        path: '/dataCenter',
        component: lazy(() => import('@/pages/dataCenter/index'))
    }
]

export default routes