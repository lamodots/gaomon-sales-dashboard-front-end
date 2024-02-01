
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../../../lib/helpers/useAuth'

function PrivateRoutes() {
    const token = useAuth()
    return token ? <Outlet /> : <Navigate to='/login' />
}

export default PrivateRoutes