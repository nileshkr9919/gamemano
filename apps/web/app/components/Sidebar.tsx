// // // packages/ui/Sidebar.tsx
import Image from 'next/image';
import Logo from '../assets/images/GQ.png';
import BgLogo from "../assets/images/GameQuest.png";
import React, { useState } from 'react';
import { CreditCard, House, LogOut, Mail, Settings, Store, Trophy } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

const Sidebar: React.FC = () => {
    const { logout } = useAuth();
    const [isOpen, setIsOpen] = useState(false); // State to track if the sidebar is open or closed

    // Function to handle mouse entering the sidebar (opens it)
    const handleMouseEnter = () => {
        setIsOpen(true);
    };

    // Function to handle mouse leaving the sidebar (closes it)
    const handleMouseLeave = () => {
        setIsOpen(false);
    };

    const logoutUser = () => {
        const isUserExist = !!localStorage.getItem('user');
        if (isUserExist)
            logout();
    }

    return (
        //   {/* Sidebar */}
        <aside
            className={`relative bg-transparent h-auto text-white transition-all duration-300 ease-in-out ${isOpen ? 'w-64' : 'w-24'
                }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            style={{ borderRight: "1px solid #736E69", borderBottom: '1px solid #736E69' }}
        >
            <div className="flex flex-col h-full">
                {/* LOGO */}
                <div className="p-4 group-hover:block mt-4">
                    <Image src={isOpen ? BgLogo : Logo} alt='LOGO' width={isOpen ? "200" : "50"} height={isOpen ? "200" : "50"} />
                </div>

                {/* SIDEBAR MENU */}
                <div className='flex flex-col h-full py-4'>
                    <ul className="space-y-4 mt-6 pb-6 transition-all duration-300 ease-in-out px-4" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.3)' }}>
                        <li>
                            <a className="p-4 flex items-center hover:text-gray-400 transition-colors" href='/'>
                                <House />
                                <span className={`transition-all duration-300 ease-in-out ml-4 ${isOpen ? 'block' : 'hidden'}`}>Home</span>
                            </a>
                        </li>
                        <li>
                            <a className="p-4 flex items-center hover:text-gray-400 transition-colors" href="javascript:void(0);">
                                <div className="relative">
                                    <Mail />
                                    <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                                </div>
                                <span className={`transition-all duration-300 ease-in-out ml-4 ${isOpen ? 'block' : 'hidden'}`}>Messages</span>
                            </a>
                        </li>
                        <li>
                            <a className="p-4 flex items-center hover:text-gray-400 transition-colors" href="/products">
                                <Store />
                                <span className={`transition-all duration-300 ease-in-out ml-4 ${isOpen ? 'block' : 'hidden'}`}>Game Store</span>
                            </a>
                        </li>
                        <li>
                            <a className="p-4 flex items-center hover:text-gray-400 transition-colors" href="javascript:void(0);">
                                <CreditCard />
                                <span className={`transition-all duration-300 ease-in-out ml-4 ${isOpen ? 'block' : 'hidden'}`}>Payments</span>
                            </a>
                        </li>
                        <li>
                            <a className="p-4 flex items-center hover:text-gray-400 transition-colors" href="javascript:void(0);">
                                <Trophy />
                                <span className={`transition-all duration-300 ease-in-out ml-4 ${isOpen ? 'block' : 'hidden'}`}>Leaderboard</span>
                            </a>
                        </li>
                    </ul>

                    <ul className="space-y-4 mt-6 pb-6 transition-all duration-300 ease-in-out px-4">
                        <li>
                            <a className="p-4 flex items-center hover:text-gray-400 transition-colors" href="javascript:void(0);">
                                <Settings />
                                <span className={`transition-all duration-300 ease-in-out ml-4 ${isOpen ? 'block' : 'hidden'}`}>Settings</span>
                            </a>
                        </li>
                        <li>
                            <a className="p-4 flex items-center hover:text-gray-400 transition-colors" onClick={() => logoutUser()}>
                                <LogOut />
                                <span className={`transition-all duration-300 ease-in-out ml-4 ${isOpen ? 'block' : 'hidden'}`}>Logout</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </aside>
    );
}

export default Sidebar;






// import Image from 'next/image';
// import Logo from '../assets/images/GQ.png';
// import BgLogo from "../assets/images/GameQuest.png";
// import React, { useState } from 'react';
// import { CreditCard, House, LogOut, Mail, Settings, Store, Trophy } from 'lucide-react';
// import { useAuth } from '../context/AuthContext';

// const Sidebar: React.FC = () => {
//     const { logout } = useAuth();
//     const [isOpen, setIsOpen] = useState(false); // State to track if the sidebar is open or closed

//     // Function to handle mouse entering the sidebar (opens it)
//     const handleMouseEnter = () => {
//         setIsOpen(true);
//     };

//     // Function to handle mouse leaving the sidebar (closes it)
//     const handleMouseLeave = () => {
//         setIsOpen(false);
//     };

//     const logoutUser = () => {
//         const isUserExist = !!localStorage.getItem('user');
//         if (isUserExist)
//             logout();
//     }

//     return (
//         <aside
//             className={`relative bg-transparent h-auto text-white transition-all duration-300 ease-in-out
//                 ${isOpen ? 'w-56' : 'w-16'}  // Adjusted for smaller default width
//                 sm:w-20 md:w-28 lg:w-36 xl:w-56`} // Responsive width for larger screens
//             onMouseEnter={handleMouseEnter}
//             onMouseLeave={handleMouseLeave}
//             style={{ borderRight: "1px solid #736E69", borderBottom: '1px solid #736E69' }}
//         >
//             <div className="flex flex-col h-full">
//                 {/* LOGO */}
//                 <div className="p-4 mt-4">
//                     <Image src={isOpen ? BgLogo : Logo} alt='LOGO' width={isOpen ? "150" : "40"} height={isOpen ? "150" : "40"} />
//                 </div>

//                 {/* SIDEBAR MENU */}
//                 <div className='flex flex-col h-full py-4'>
//                     <ul className="space-y-4 mt-6 pb-6 transition-all duration-300 ease-in-out px-4" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.3)' }}>
//                         <li>
//                             <a className="p-4 flex items-center hover:text-gray-400 transition-colors" href='/'>
//                                 <House className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9" /> {/* Responsive Icon Size */}
//                                 <span className={`ml-4 ${isOpen ? 'block' : 'hidden'} sm:block`}>Home</span>
//                             </a>
//                         </li>
//                         <li>
//                             <a className="p-4 flex items-center hover:text-gray-400 transition-colors" href="javascript:void(0);">
//                                 <div className="relative">
//                                     <Mail className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9" /> {/* Responsive Icon Size */}
//                                     <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
//                                 </div>
//                                 <span className={`ml-4 ${isOpen ? 'block' : 'hidden'} sm:block`}>Messages</span>
//                             </a>
//                         </li>
//                         <li>
//                             <a className="p-4 flex items-center hover:text-gray-400 transition-colors" href="/products">
//                                 <Store className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9" /> {/* Responsive Icon Size */}
//                                 <span className={`ml-4 ${isOpen ? 'block' : 'hidden'} sm:block`}>Game Store</span>
//                             </a>
//                         </li>
//                         <li>
//                             <a className="p-4 flex items-center hover:text-gray-400 transition-colors" href="javascript:void(0);">
//                                 <CreditCard className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9" /> {/* Responsive Icon Size */}
//                                 <span className={`ml-4 ${isOpen ? 'block' : 'hidden'} sm:block`}>Payments</span>
//                             </a>
//                         </li>
//                         <li>
//                             <a className="p-4 flex items-center hover:text-gray-400 transition-colors" href="javascript:void(0);">
//                                 <Trophy className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9" /> {/* Responsive Icon Size */}
//                                 <span className={`ml-4 ${isOpen ? 'block' : 'hidden'} sm:block`}>Leaderboard</span>
//                             </a>
//                         </li>
//                     </ul>

//                     <ul className="space-y-4 mt-6 pb-6 transition-all duration-300 ease-in-out px-4">
//                         <li>
//                             <a className="p-4 flex items-center hover:text-gray-400 transition-colors" href="javascript:void(0);">
//                                 <Settings className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9" /> {/* Responsive Icon Size */}
//                                 <span className={`ml-4 ${isOpen ? 'block' : 'hidden'} sm:block`}>Settings</span>
//                             </a>
//                         </li>
//                         <li>
//                             <a className="p-4 flex items-center hover:text-gray-400 transition-colors" onClick={() => logoutUser()}>
//                                 <LogOut className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 xl:w-9 xl:h-9" /> {/* Responsive Icon Size */}
//                                 <span className={`ml-4 ${isOpen ? 'block' : 'hidden'} sm:block`}>Logout</span>
//                             </a>
//                         </li>
//                     </ul>
//                 </div>
//             </div>
//         </aside>
//     );
// }

// export default Sidebar;
