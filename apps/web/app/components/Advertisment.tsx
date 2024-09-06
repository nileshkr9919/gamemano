/* eslint-disable @next/next/no-img-element */
import React from 'react';
import {Star, CheckCircle} from 'lucide-react'; // For icons

const Advertisment: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Card */}
      <div className="bg-[rgba(0,0,0,0.8)] text-white rounded-lg p-10 max-w-3xl shadow-lg">
        {/* Top Info */}
        <div className="flex justify-between items-center mb-6">
          {/* Title & Release Date */}
          <div>
            <h1 className="text-5xl font-bold mb-2">Evolution</h1>
            <p className="text-gray-400 text-sm tracking-wide">
              <span className="inline-block bg-gray-700 px-2 py-1 rounded">
                RELEASE DATE: 30TH DECEMBER
              </span>
            </p>
          </div>

          {/* Friends and Rating */}
          <div className="text-right">
            <div className="flex items-center justify-end mb-2">
              <CheckCircle className="text-green-400 w-4 h-4 mr-1" />
              <span className="text-sm text-green-400">
                40 of your friends are playing
              </span>
            </div>
            {/* Star Rating */}
            <div className="flex space-x-1 text-yellow-400">
              {[...Array(3)].map((_, i) => (
                <Star key={i} className="w-4 h-4" />
              ))}
              {[...Array(2)].map((_, i) => (
                <Star key={i + 3} className="w-4 h-4 text-gray-500" />
              ))}
            </div>
          </div>
        </div>

        {/* Game Description */}
        <p className="text-gray-300 mb-6 leading-relaxed">
          Players assume the role of Deacon St. John, a former bounty hunter
          struggling to survive in a post-apocalyptic world filled with
          zombie-like creatures called Freaks. Though players are surrounded by
          death and danger on all sides, the world that they get to explore
          feels as though it's truly alive, which can encourage players to take
          risks when they probably shouldn't.
        </p>

        {/* CTA and iOS Button */}
        <div className="flex items-center justify-between">
          {/* <Button className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-600 transition duration-200">
            Play Now
          </Button> */}
          <div className="text-sm">
            <span className="mr-2">Available on:</span>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Windows_logo_-_2021.svg/1024px-Windows_logo_-_2021.svg.png"
              alt="Windows"
              className="inline w-6 h-6 mr-2"
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg"
              alt="iOS"
              className="inline w-6 h-6"
            />
          </div>
        </div>

        {/* Buy Now Price */}
        <p className="text-center text-sm text-gray-500 mt-4">
          Buy now for <span className="font-semibold">$40 only</span>
        </p>
      </div>
    </div>
  );
};

export default Advertisment;
