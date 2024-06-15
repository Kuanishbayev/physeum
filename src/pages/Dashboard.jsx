import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Dashboard = () => {
  return (
    <div className='flex flex-col h-screen'>
        <Navbar />
        <Sidebar />
    </div>
  )
}

export default Dashboard