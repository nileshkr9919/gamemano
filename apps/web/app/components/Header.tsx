// packages/ui/Header.tsx
import React from 'react';
import {Bell, ShoppingBag, Search} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@repo/ui/components/ui/dropdown-menu';
import Logo from '../assets/images/GQ.png';
import Image from 'next/image';
import {usePathname} from 'next/navigation';

const Header: React.FC = () => {
  const pathname = usePathname();

  return (
    <div
      className="flex items-center justify-between py-4 px-4 topbar-bg text-white sticky top-0 z-50"
      style={{backgroundColor: 'rgba(33,31,24,1)'}}
    >
      {/* Left Side Links */}
      <div className="flex items-center justify-between">
        {pathname !== '/' ? (
          <div className="p-4">
            <Image src={Logo} alt="LOGO" width={50} height={50} />
          </div>
        ) : (
          <></>
        )}

        <ul className="flex items-center space-x-3 text-sm font-medium hidden lg:flex">
          <li className="list-none">
            <a
              href="/"
              className="hover:text-gray-400 transition-colors px-4 border-right py-2"
            >
              Home
            </a>
          </li>
          <li className="list-none">
            <a
              href="/products"
              className="hover:text-gray-400 transition-colors px-4 py-2 border-right"
            >
              Game Store
            </a>
          </li>
          <li className="list-none">
            <a
              href="javascript:void(0);"
              className="hover:text-gray-400 px-4 transition-colors"
            >
              Leaderboard
            </a>
          </li>
        </ul>
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center space-x-1 m-auto lg:m-0">
        {/* Search Bar */}
        <div className="border-right px-4">
          <div className="flex items-center topbar-bg px-4 border-gray-400 border-2 py-2 rounded-full w-96">
            <Search className="text-white" />
            <input
              type="text"
              placeholder="What are you looking for?"
              className="ml-3 w-full bg-transparent outline-none text-white placeholder-gray-400"
            />
          </div>
        </div>

        {/* Notification Bell with red dot */}
        <div className="border-right px-4">
          <DropdownMenu>
            <DropdownMenuTrigger>
              <div className="h-10 w-10 rounded-full border border-white flex items-center justify-center cursor-pointer">
                <div className="relative">
                  <Bell className="text-white" />
                  <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full"></span>
                </div>
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-black">
              <DropdownMenuLabel>Notifications(3)</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Sample Notification 1</DropdownMenuItem>
              <DropdownMenuItem>Sample Notification 2</DropdownMenuItem>
              <DropdownMenuItem>Sample Notification 3</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Shopping Bag */}
        <div className="border-right px-4">
          <div className="h-10 w-10 rounded-full border border-white flex items-center justify-center cursor-pointer">
            <ShoppingBag className="text-white" />
          </div>
        </div>

        {/* Profile Icon Placeholder */}
        <div className="px-4">
          <div className="h-10 w-10 rounded-full border border-white cursor-pointer"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
