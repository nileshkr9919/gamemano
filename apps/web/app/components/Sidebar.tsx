// packages/ui/Sidebar.tsx
import Image from 'next/image';
import React from 'react';
import Logo from '../assets/images/GQ.png';

const Sidebar = () => {
  return (
    // sidebar
      <aside className="relative">
        <div className="group h-screen bg-transparent text-white w-16 hover:w-64 transition-all duration-300 ease-in-out">
          <div className="flex flex-col justify-between ">
            {/* Sidebar Header */}
            <div className="p-4">
              <div className="py-4 group-hover:block">
              <Image src={Logo} alt='LOGO' width="100" height="100" />
              </div>
            </div>

            {/* Sidebar Links */}
            <ul className="space-y-4 mt-8">
              <li className="p-4 hover:bg-gray-700">
                <span className="hidden group-hover:block">Dashboard</span>
                <i className="fas fa-tachometer-alt"></i>
              </li>
              <li className="p-4 hover:bg-gray-700">
                <span className="hidden group-hover:block">Settings</span>
                <i className="fas fa-cog"></i>
              </li>
              <li className="p-4 hover:bg-gray-700">
                <span className="hidden group-hover:block">Profile</span>
                <i className="fas fa-user"></i>
              </li>
            </ul>

            {/* Sidebar Footer */}
            <div className="p-4">
              <span className="hidden group-hover:block">Logout</span>
              <i className="fas fa-sign-out-alt"></i>
            </div>
          </div>
        </div>
      </aside>
  );
};

export default Sidebar;
