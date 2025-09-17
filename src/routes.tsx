import { Route, BrowserRouter as Router, Routes } from 'react-router'
import Layout from '@/pages/Layout'
import Cadastro from '@/pages/Cadastro'

const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Cadastro />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default AppRoutes
