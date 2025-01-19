import React from 'react'
import MainContent from '../components/MainContent';
import Sidebar from '../components/Sidebar';

const AdminDashboard = () => {
    return (
        <div className="flex bg-gray-50 min-h-screen">
          <Sidebar />
          <div className="flex-1">
            <MainContent />
          </div>
        </div>
      );
}

export default AdminDashboard
