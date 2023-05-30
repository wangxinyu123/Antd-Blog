import { lazy } from 'react'
import Home from '@/pages/home'
import Product from '@/pages/product'
import cssPage from './pages/product/CSS'
import TsPage from './pages/product/Typescript'
import ReactPage from './pages/product/React'
import Material from '@/pages/material'
import DataCenter from '@/pages/dataCenter'
import TableWithPagination from '@/components/TableWithPagination'
import NotFound from '@/components/NotFound'
import StatusStep from '@/components/StatusStep'

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
        path: '/product/css',
        component: cssPage
    },
    {
        path: '/product/ts',
        component: TsPage
    },
    {
        path: '/product/react',
        component: ReactPage
    },
    {
        path: '/material',
        component: Material,
    },
    {
        path: '/material/tableWithPagination',
        component: TableWithPagination
    },
    {
        path: '/material/notFound',
        component: NotFound
    },
    {
        path: '/material/statusStep',
        component: StatusStep
    },
    {
        path: '/dataCenter',
        component: DataCenter
    }
]

export default routes