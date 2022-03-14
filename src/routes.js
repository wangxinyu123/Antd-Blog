import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import ProductPages from '@/pages/product'
import MaterialItem from '@/pages/material'
import HomePage from '@/pages/home'

const App = () => {
    const routes = useRoutes([
        { path: '/', element: <HomePage /> },
        { path: '/product', element: <ProductPages /> },
        { path: '/material', element: <MaterialItem /> }
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