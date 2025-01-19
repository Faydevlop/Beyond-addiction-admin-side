import React from 'react'
import Sidebar from '../components/Sidebar'
import ChallengesComponent from '../components/ChallengesComponent'

const Challenges = () => {
  return (
    <div className="flex bg-gray-50 min-h-screen">
          <Sidebar />
          <div className="flex-1">
            {/* < /> */}
            <ChallengesComponent/>
          </div>
        </div>
  )
}

export default Challenges
