import React from 'react'
import { Link } from 'react-router-dom';


const Sidebar = () => {
    const navItems = [
      { name: 'Dashboard', icon: '' },
      { name: 'Reports', icon: '' },
      { name: 'Communities', icon: '' },
      { name: 'Challenges', icon: '' },
    ];
  
    return (
      <div className="bg-[#008080] text-white w-64 min-h-screen p-4">
        <h1 className="text-2xl font-bold mb-6">Beyond Addiction</h1>
        <nav>
          <ul>
            {navItems.map((item) => (
                <Link to={`/${item.name}`} key={item.name}>
              <li key={item.name} className="mb-4">
                <a
                  href={`${item.name.toLowerCase()}`}
                  className="flex items-center text-lg hover:bg-teal-900 hover:rounded-lg  p-2 rounded transition duration-200"
                >
                  <span className="mr-2">{item.icon}</span>
                  {item.name}
                </a>
              </li></Link>
            ))}
          </ul>
        </nav>
      </div>
    );
  };

export default Sidebar
