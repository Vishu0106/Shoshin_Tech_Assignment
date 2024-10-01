import React from 'react';
import Layout from '../components/Layout';
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <Layout>
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 md:ml-16 lg:ml-64 mt-16">
      <h1 className="text-9xl font-extrabold text-[#fddece]">404</h1>
      <p className="text-2xl md:text-3xl font-medium text-gray-800 mt-6">
        Oops! Page Not Found
      </p>
      <p className="text-gray-500 mt-4 mb-8 text-center px-4">
        The page you are looking for doesn’t exist or an error occurred.
      </p>
      <Link to="/" className="group">
        <button className="px-6 py-2 text-[#686868] bg-[#fddece] hover:bg-[#fed8c6] focus:outline-none focus:ring-4 focus:ring-blue-300 transition duration-300 rounded-md">
          Go Back to Home
        </button>
      </Link>
    </div>
    </Layout>
  );
}
