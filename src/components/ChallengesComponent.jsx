import React, { useState } from 'react';

const ChallengesComponent = () => {
  const [challenges, setChallenges] = useState([
    {
      id: 1,
      title: "30-Day Sobriety Challenge",
      description: "Stay sober for 30 days with daily tasks and support.",
      photo: "/placeholder.svg?height=200&width=400",
      subChallenges: [
        { id: 1, title: "Daily Meditation", description: "15 minutes of guided meditation" },
        { id: 2, title: "Weekly Counseling", description: "1-hour session with a certified therapist" },
        { id: 3, title: "Support Group Meeting", description: "Attend a local support group twice a week" }
      ]
    },
    {
      id: 2,
      title: "Mind and Body Wellness",
      description: "Focus on overall wellness to aid recovery.",
      photo: "/placeholder.svg?height=200&width=400",
      subChallenges: [
        { id: 1, title: "Daily Exercise", description: "30 minutes of physical activity" },
        { id: 2, title: "Nutrition Plan", description: "Follow a balanced diet plan" },
        { id: 3, title: "Sleep Hygiene", description: "Maintain a consistent sleep schedule" }
      ]
    }
  ]);

  const [leaderboard, setLeaderboard] = useState([
    { id: 1, name: "John Doe", points: 1200 },
    { id: 2, name: "Jane Smith", points: 1150 },
    { id: 3, name: "Bob Johnson", points: 1100 },
  ]);

  const [showAddForm, setShowAddForm] = useState(false);
  const [newChallenge, setNewChallenge] = useState({
    title: "",
    description: "",
    photo: "",
    subChallenges: []
  });

  const handleAddChallenge = () => {
    setChallenges([...challenges, { ...newChallenge, id: challenges.length + 1 }]);
    setNewChallenge({ title: "", description: "", photo: "", subChallenges: [] });
    setShowAddForm(false);
  };

  return (
    <div className="font-sans max-w-7xl mx-auto p-6 bg-white text-gray-800">
      <header className="flex justify-between items-center mb-8 p-6 bg-teal-600 text-white rounded-lg">
        <h1 className="text-3xl font-bold">Admin Challenges Dashboard</h1>
        <button 
          onClick={() => setShowAddForm(!showAddForm)}
          className="px-4 py-2 bg-white text-teal-600 rounded font-bold hover:bg-teal-100 transition duration-300"
        >
          {showAddForm ? 'Cancel' : 'Add Challenge'}
        </button>
      </header>

      {showAddForm && (
        <div className="mb-8 p-6 border-2 border-teal-600 rounded-lg bg-teal-50">
          <h2 className="text-2xl font-bold text-teal-600 mb-4">Add New Challenge</h2>
          <input
            type="text"
            placeholder="Challenge Title"
            value={newChallenge.title}
            onChange={(e) => setNewChallenge({...newChallenge, title: e.target.value})}
            className="w-full p-2 mb-4 rounded border border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
          <textarea
            placeholder="Challenge Description"
            value={newChallenge.description}
            onChange={(e) => setNewChallenge({...newChallenge, description: e.target.value})}
            className="w-full p-2 mb-4 rounded border border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
          <input
            type="text"
            placeholder="Photo URL"
            value={newChallenge.photo}
            onChange={(e) => setNewChallenge({...newChallenge, photo: e.target.value})}
            className="w-full p-2 mb-4 rounded border border-teal-300 focus:outline-none focus:ring-2 focus:ring-teal-600"
          />
          <button 
            onClick={handleAddChallenge} 
            className="px-4 py-2 bg-teal-600 text-white rounded font-bold hover:bg-teal-700 transition duration-300"
          >
            Submit New Challenge
          </button>
        </div>
      )}

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-2/3">
          <h2 className="text-2xl font-bold text-teal-600 border-b-2 border-teal-600 pb-2 mb-4">Challenges</h2>
          {challenges.map(challenge => (
            <div key={challenge.id} className="mb-6 p-6 border border-teal-200 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <img 
                src={challenge.photo || "/placeholder.svg"}
                alt={challenge.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold text-teal-600 mb-2">{challenge.title}</h3>
              <p className="text-gray-600 mb-4">{challenge.description}</p>
              <h4 className="font-bold text-teal-600 mb-2">Sub-challenges:</h4>
              <ul className="list-disc list-inside">
                {challenge.subChallenges.map(subChallenge => (
                  <li key={subChallenge.id} className="mb-1">
                    <span className="font-semibold">{subChallenge.title}:</span> {subChallenge.description}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="lg:w-1/3">
          <h2 className="text-2xl font-bold text-teal-600 border-b-2 border-teal-600 pb-2 mb-4">Leaderboard</h2>
          <table className="w-full">
            <thead>
              <tr className="bg-teal-600 text-white">
                <th className="text-left p-2 rounded-tl-lg">Name</th>
                <th className="text-right p-2 rounded-tr-lg">Points</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard.map(user => (
                <tr key={user.id} className="bg-teal-50 hover:bg-teal-100 transition duration-300">
                  <td className="p-2 border-b border-teal-200">{user.name}</td>
                  <td className="text-right p-2 border-b border-teal-200 font-bold">{user.points}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ChallengesComponent;

