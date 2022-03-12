import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import ProductPages from '@/pages/product'
import MaterialItem from '@/pages/material'

const App = () => {
    const routes = [useRoutes([
        { path: '/', element: <ProductPages /> },
        { path: '/product', element: <ProductPages /> },
        { path: '/material', element: <MaterialItem /> }
    ])]
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