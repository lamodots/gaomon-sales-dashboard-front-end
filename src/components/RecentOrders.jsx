import React from 'react'
import { Link } from 'react-router-dom'
const recentOrdersData =[
    {
        id: '1',
        product_id: '72282',
        customer_id: '98989',
        customer_name:'Mandy A. Pauline',
        order_date: '2001-5-17108:25:00',
        order_total: '$656.67',
        current_order_status: 'PLACED',
        shipment_address: 'Colledge Road, Glass House'
    },
    {
        id: '2',
        product_id: '72282',
        customer_id: '98989',
        customer_name:'Sunda Mike',
        order_date: '2001-5-17108:25:00',
        order_total: '$656.67',
        current_order_status: 'SHIPPED',
        shipment_address: 'Colledge Road, Glass House'
    },
    {
        id: '2',
        product_id: '72282',
        customer_id: '98989',
        customer_name:'Sunda Mike',
        order_date: '2001-5-17108:25:00',
        order_total: '$656.67',
        current_order_status: 'CONFRIRMED',
        shipment_address: 'Colledge Road, Glass House'
    },
]

function RecentOrders() {
  return (
    <div className='bg-white px-4 pt-3 pb-4 rounded-sm border border-gray-200 flex-1'>
        <strong className='text-gray-700 font-medium'>Recent Ordres</strong>
        <div className='mt-3'>
            <table className='w-full text-gray-700'>
                <thead>
                    <tr>
                     
                        <td class="text-sm">Product ID</td>
                        <td class="text-sm">Customer ID</td>
                        <td class="text-sm">Customer Name</td>
                        <td class="text-sm">Order Date </td>
                        <td class="text-sm">Order Total</td>
                        <td class="text-sm">Current Order Status</td>
                        <td class="text-sm">Shipment Address</td>
                       
                    </tr>
                </thead>
                <tbody>
                        
                    {recentOrdersData.map((order)=>(
                    <tr key={order.id}>
                        <td class="text-xs"><Link to="/product/${order.product_id}">{order.product_id}</Link></td>
                        <td class="text-xs">{order.customer_id}</td>
                        <td class="text-xs">{order.customer_name}</td>
                        <td class="text-xs">{new Date(order.order_date).toDateString()}</td>
                        <td class="text-xs">{order.order_total}</td>
                        <td class="text-xs">{order.current_order_status}</td>
                        <td class="text-xs">{order.shipment_address}</td>
                    </tr>
                    
                    ))}
                </tbody>
            </table>
        </div>

    </div>
  )
}

export default RecentOrders