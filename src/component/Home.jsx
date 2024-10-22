import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { useSelector } from 'react-redux';

function Home() {
  const { user } = useSelector(store => store.user);

  return (
    <>
      <div className='min-h-screen flex flex-col justify-between'>
        <Navbar />
        <div className='container mx-auto p-4 flex-grow'>
          {/* User details */}
          <div className="bg-gray-800 p-5 rounded-lg shadow-lg mt-10">
            <h2 className="text-2xl font-bold text-white mb-4">User Details</h2>
            <p className="text-gray-400"><strong>Full Name:</strong> {user?.fullname || 'N/A'}</p>
            <p className="text-gray-400"><strong>Email:</strong> {user?.email || 'N/A'}</p>
            <p className="text-gray-400"><strong>Phone Number:</strong> {user?.phoneNumber || 'N/A'}</p>
            <p className="text-gray-400"><strong>Role:</strong> {user?.role || 'N/A'}</p>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Home;
