import React from 'react';

function Topbar () {
  return (
    <div className="flex items-center justify-between bg-white px-4 py-2 shadow-md">
      {/* Left Side - Search Bar */}
      <div className="flex items-center w-1/3">
        <input
          type="text"
          placeholder="Search"
          className="w-full py-2 pl-4 pr-10 rounded-full bg-gray-100 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="absolute right-0 mr-4">
          <svg
            className="w-5 h-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2V4m0 10l-2-2m2 2l2 2m-2-2h10"
            />
          </svg>
        </button>
      </div>

      {/* Right Side - Icons and Profile */}
      <div className="flex items-center space-x-4">
        {/* Notification Icon */}
        <button className="relative">
          <svg
            className="w-6 h-6 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 16h-1v-4h1m0 0h1m0 0v-4m-1 4l2-2m0 4v-4m-2 2m0 2h-1m0-4v4m1 2h1"
            />
          </svg>
          <span className="absolute top-0 right-0 block w-2 h-2 bg-red-600 rounded-full"></span>
        </button>

        {/* Messages Icon */}
        <button>
          <svg
            className="w-6 h-6 text-gray-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 11V9a1 1 0 011-1h4a1 1 0 011 1v2m-1-4v12a1 1 0 01-1 1h-4a1 1 0 01-1-1V9m4 0h1m-6 0h6m-2 4v2m-2-4v6"
            />
          </svg>
        </button>

        {/* Profile Picture and Name */}
        <div className="flex items-center space-x-2">
          {/* On desktop, show DP and name */}
          <div className="hidden md:flex items-center space-x-2">
            <img
              src="profile.jpg" // Replace with your DP source
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-gray-600">Admin John</span>
          </div>

          {/* On mobile, show only DP */}
          <div className="md:hidden">
            <img
              src="profile.jpg" // Replace with your DP source
              alt="Profile"
              className="w-8 h-8 rounded-full"
            />
          </div>

          {/* Down Arrow */}
          <button>
            <svg
              className="w-5 h-5 text-gray-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
