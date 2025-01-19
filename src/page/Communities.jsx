import React from 'react'
import Sidebar from '../components/Sidebar'
import CommunitiesContent from '../components/CommunitesContext'

const Communities = () => {
  return (
    <div className="flex bg-gray-50 min-h-screen">
          <Sidebar />
          <div className="flex-1">
            {/* < /> */}
            <CommunitiesContent/>
          </div>
        </div>
  )
}

export default Communities
