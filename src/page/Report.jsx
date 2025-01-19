import React from 'react'
import Sidebar from '../components/Sidebar'
import Reportcard from '../components/ReportCard'

const Report = () => {
  return (
    <div className="flex bg-gray-50 min-h-screen">
          <Sidebar />
          <div className="flex-1">
            {/* < /> */}
            <Reportcard/>
          </div>
        </div>
  )
}

export default Report
