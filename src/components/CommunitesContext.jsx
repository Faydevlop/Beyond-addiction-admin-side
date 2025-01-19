import React, { useState } from 'react';

// Community List Item Component
const CommunityListItem = ({ community, isActive, onClick }) => (
  <div 
    className={`flex items-center p-3 cursor-pointer hover:bg-gray-100 ${isActive ? 'bg-gray-200' : ''}`}
    onClick={() => onClick(community.id)}
  >
    <img src={community.icon || "/placeholder.svg"} alt={community.name} className="w-12 h-12 rounded-full mr-3" />
    <div>
      <h3 className="font-semibold text-[#008080]">{community.name}</h3>
      <p className="text-sm text-gray-600">{community.memberCount} members</p>
    </div>
  </div>
);

// Community Post Component
const CommunityPost = ({ post }) => (
  <div className="bg-white rounded-lg shadow-md p-4 mb-4">
    <h4 className="font-semibold mb-2">{post.title}</h4>
    <p className="text-gray-600 mb-2">{post.content}</p>
    {post.image && (
      <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-48 object-cover rounded-md" />
    )}
    <div className="flex justify-between items-center mt-2 text-sm text-gray-500">
      <span>{post.author}</span>
      <span>{post.likes} likes • {post.comments} comments</span>
    </div>
  </div>
);

// Main Communities Component
const CommunitiesContent = () => {
  const [activeCommunity, setActiveCommunity] = useState(null);

  // Sample data
  const communities = [
    { id: 1, name: "Sober Living", icon: "https://images.pexels.com/photos/3541916/pexels-photo-3541916.jpeg", memberCount: 1200, tags: ["recovery", "support"] },
    { id: 2, name: "Addiction Help", icon: "https://images.pexels.com/photos/4061216/pexels-photo-4061216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", memberCount: 3500, tags: ["resources", "therapy"] },
    { id: 3, name: "Family Support", icon: "https://images.pexels.com/photos/3101214/pexels-photo-3101214.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", memberCount: 2800, tags: ["family", "coping"] },
  ];

  const posts = [
    { id: 1, title: "My Recovery Journey", content: "Today marks 1 year of sobriety...", author: "RecoveryWarrior", likes: 120, comments: 25, image: "https://via.placeholder.com/400x300?text=Recovery+Journey" },
    { id: 2, title: "New Support Group", content: "Join our weekly meetings every...", author: "CommunityLeader", likes: 45, comments: 12, image: "https://via.placeholder.com/400x300?text=Support+Group" },
    { id: 3, title: "Coping Strategies", content: "Here are some techniques that helped me...", author: "HopefulFuture", likes: 89, comments: 30, image: "https://via.placeholder.com/400x300?text=Coping+Strategies" },
    { id: 4, title: "Success Story", content: "After years of struggle, I finally...", author: "Triumphant2023", likes: 200, comments: 50, image: "https://via.placeholder.com/400x300?text=Success+Story" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left side - Community List */}
      <div className="w-1/3 bg-white border-r border-gray-200 overflow-y-auto">
        <div className="p-4 border-b border-gray-200 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-[#008080]">Communities</h2>
          
        </div>
        {communities.map(community => (
          <CommunityListItem 
            key={community.id} 
            community={community} 
            isActive={activeCommunity === community.id}
            onClick={setActiveCommunity}
          />
        ))}
      </div>

      {/* Right side - Community Details */}
      <div className="w-2/3 overflow-y-auto p-6">
        {activeCommunity ? (
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <div className="flex items-center mb-4">
                <img 
                  src={communities.find(c => c.id === activeCommunity).icon || "/placeholder.svg"} 
                  alt={communities.find(c => c.id === activeCommunity).name} 
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h2 className="text-2xl font-bold text-[#008080]">
                    {communities.find(c => c.id === activeCommunity).name}
                  </h2>
                  <p className="text-gray-600">
                    {communities.find(c => c.id === activeCommunity).memberCount} members
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {communities.find(c => c.id === activeCommunity).tags.map(tag => (
                  <span key={tag} className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {posts.map(post => (
                <CommunityPost key={post.id} post={post} />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Select a community to view details
          </div>
        )}
      </div>
    </div>
  );
};

export default CommunitiesContent;

