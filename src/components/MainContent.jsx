import React from 'react'

const MainContent = () => {
    return (
      <div className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-[#008080]">Welcome to Beyond Addiction Admin</h2>
        <p className="mb-4 text-gray-600">
          Select a section from the sidebar to manage your drug prevention program.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-2 text-[#008080]">Active Communities</h3>
            <p className="text-3xl font-bold text-teal-600">24</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-2 text-[#008080]">Ongoing Challenges</h3>
            <p className="text-3xl font-bold text-teal-600">7</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-2 text-[#008080]">Total Participants</h3>
            <p className="text-3xl font-bold text-teal-600">1,250</p>
          </div>
          <div className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold mb-2 text-[#008080]">Success Rate</h3>
            <p className="text-3xl font-bold text-teal-600">78%</p>
          </div>
        </div>
      </div>
    );
  };

export default MainContent
