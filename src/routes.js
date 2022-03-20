import { lazy } from 'react'
import Home from '@/pages/home'
import Product from '@/pages/product'
import Material from '@/pages/material'
import DataCenter from '@/pages/dataCenter'
import TableWithPagination from '@/components/TableWithPagination'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/product',
        component: Product
    },
    {
        path: '/material',
        component: Material,
        children: [
            {
                path: '/tableWithPagination',
                component: TableWithPagination
            }
        ]
    },
    {
        path: '/dataCenter',
        component: DataCenter
    }
]

export default routes