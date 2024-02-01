
import { Outlet, Navigate } from 'react-router-dom'
import { useAuth } from '../../../lib/helpers/useAuth'


function PublicRoute() {
    const token = useAuth()
    return token ? <Navigate to='/' /> : <Outlet /> 
}

export default PublicRoute