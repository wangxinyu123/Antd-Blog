import Home from '@/pages/home'
import cssPage from './pages/product/CSS'
import TsPage from './pages/product/Typescript'
import ReactPage from './pages/product/React'
import TableWithPagination from '@/components/TableWithPagination'
import NotFound from '@/components/NotFound'
import StatusStep from '@/components/StatusStep'
import PiePage from './pages/dataCenter/pie'
import LinePage from './pages/dataCenter/line'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/product',
        component: cssPage
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
        component: TableWithPagination,
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
        component: PiePage
    },
    {
        path: '/dataCenter/pie',
        component: PiePage
    },
    {
        path: '/dataCenter/line',
        component: LinePage
    }
]

export default routes