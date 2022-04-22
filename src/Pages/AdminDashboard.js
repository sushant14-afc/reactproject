import React from 'react'
import Nav from '../layout/Nav'
import Bots from './Bots'

const AdminDashboard = () => {
  return (
    <div>
        <Nav/>
        <div className='row'>
            <div className='col-md-3'>
                
            </div>
            <div className='col-md-9'>
                <Bots/>
            </div>
        </div>


    </div>
  )
}

export default AdminDashboard