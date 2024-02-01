
import './App.css'

import { Routes, Route } from 'react-router-dom'
import Layout from './components/shared/Layout'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import Orders from './pages/Orders'
import Customers from './pages/Customers'
import Transactions from './pages/Transactions'
import Messages from './pages/Messages'
import Settings from './pages/Settings'
import HelpandSupport from './pages/HelpandSupport'
import Login from './pages/Login'
import CreateAccount from './pages/CreateAccount'
import PrivateRoutes from './components/shared/ProtectRoutes/PrivateRoutes'
import PublicRoute from './components/shared/ProtectRoutes/PublicRoute'
function App() {


  return (
    <Routes>
      <Route element={<PrivateRoutes />}>

          <Route path='/' element={<Layout />}>
            <Route index   element={<Dashboard />} />
            <Route path='products' element={<Products />} />
            <Route path='orders' element={<Orders />} />
            <Route path='customers' element={<Customers />} />
            <Route path='transactions' element={<Transactions />} />
            <Route path='messages' element={<Messages />} />
            <Route path='settings' element={<Settings />} />
            <Route path='support' element={<HelpandSupport/>} />
          </Route>
      </Route>
      <Route element={<PublicRoute />}>

          <Route path='login' element={<Login />}/>
          <Route path='create-account' element={<CreateAccount />}/>
      </Route>
    </Routes>
  )
}

export default App
