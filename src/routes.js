import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import ProductPages from '@/pages/product'
import MaterialItem from '@/pages/material'
import HomePage from '@/pages/home'
import DataCenter from '@/pages/dataCenter'

const App = () => {
    const routes = useRoutes([
        { path: '/', element: <HomePage /> },
        { path: '/product', element: <ProductPages /> },
        { path: '/material', element: <MaterialItem /> },
        { path: '/dataCenter', element: <DataCenter /> }
    ])
    return routes
}

const AppWrapper = () => {
    return (
        <Router>
            <App />
        </Router>
    )
}

export default AppWrapper