import React from 'react'
import DashboardStatsGrid from '../components/DashboardStatsGrid'
import TransactionChart from '../components/TransactionChart'
import BuyerChart from '../components/BuyerChart'
import RecentOrders from '../components/RecentOrders'
import FeaturedProducts from '../components/FeaturedProducts'

function Dashboard() {
  return (
    <div className='flex flex-col gap-4 ' >
      <DashboardStatsGrid />
      <div className='flex flex-row gap-4 w-full'>
        <TransactionChart />
        <BuyerChart />
      </div>
      <div className='flex flex-row gap-4 w-full ' >
        <RecentOrders />
        <FeaturedProducts />
      </div>
    </div>
  )
}

export default Dashboard