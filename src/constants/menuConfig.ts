import { TableOutlined, BugOutlined, FastForwardOutlined, ClockCircleOutlined } from '@ant-design/icons'
export const materialConfig = [
    {
        name: '表格分页',
        path: '/material/tableWithPagination',
        key: 'tablePage',
        icon: TableOutlined
    },
    {
        name: "NotFound",
        path: '/material/notFound',
        key: 'notFound',
        icon: BugOutlined
    },
    {
        name: 'StatusStep',
        path: '/material/statusStep',
        key: 'StatusStep',
        icon: FastForwardOutlined
    }
]
export const productConfig = [
    {
        name: 'CSS',
        path: '/product/css',
        key: 'css',
        icon: TableOutlined
    },
    {
        name: "T/Js",
        path: '/product/ts',
        key: 'ts',
        icon: BugOutlined
    },
    {
        name: 'React',
        path: '/product/react',
        icon: ClockCircleOutlined
    },
]
export const dataCenterConfig = [
    {
        name: "饼图",
        path: '/dataCenter/pie',
        key: 'pie',
        icon: BugOutlined
    },
    {
        name: "折线图",
        path: '/dataCenter/line',
        key: 'line',
        icon: TableOutlined
    }
]