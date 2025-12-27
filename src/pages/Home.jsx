import React from 'react'
import { Link } from 'react-router-dom';
import {getUserByemail} from '../utils/storage';
import { FaLocationDot } from 'react-icons/fa6';
import { IoIosArrowRoundForward, IoMdTime } from 'react-icons/io';
import { MdOutlinePayment, MdOutlineVerified } from 'react-icons/md';
import { IoSettingsOutline } from 'react-icons/io5';
import citron from '../assets/citron.jpg';
import mahindra from '../assets/mahindra.jpg';
import MGCar from '../assets/MG.jpg';
import suzuki from '../assets/suzuki.jpg';
import Tata from '../assets/Tata.jpg';
const Home = () => {
  const carImages = {
  Citron: citron,
  Mahindra: mahindra,
  MG: MGCar,
  Maruti_Suzuki : suzuki,
  Tata: Tata,
};

  const user = getUserByemail(localStorage.getItem('currentEmail'));
  return (
    <div className="p-8 max-w-4xl mx-auto font-sans">

<div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-10 shadow-sm border border-blue-100">
  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

    <div>
      <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
        Welcome, <span className="text-blue-700">{user?.name}</span>
      </h1>

      <div className="flex items-center gap-2 text-sm mb-2">
        <span className="text-gray-600 font-medium">Car:</span>
        <span className="px-3 py-1 rounded-full bg-green-100 text-green-700 font-semibold">
          {user?.car}
        </span>
      </div>

      <div className="mt-2 flex items-center gap-2 text-sm text-gray-700">
        <MdOutlineVerified className="text-green-500" size={18} />
        Profile completed
      </div>
    </div>

    {/* Right Image */}
    {user?.car && carImages[user.car] && (
      <div className="flex justify-center md:justify-end">
        <img
          src={carImages[user.car]}
          alt={user.car}
          className="w-32 md:w-40 rounded-xl shadow-md object-cover"
        />
      </div>
    )}
  </div>
</div>


  <h2 className="text-xl font-semibold text-gray-700 mb-6 pl-2 border-l-4 border-blue-500">Dashboard</h2>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
   
    <Link 
      to="/find-cpo" 
      className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden hover:-translate-y-1"
    >
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-blue-100 p-3 rounded-lg mr-4 group-hover:bg-blue-200 transition-colors">
            <FaLocationDot size={35} className='text-blue-600'/>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Find CPO</h3>
        </div>
        <p className="text-gray-600 text-sm mb-4">Locate nearby charging stations and check availability</p>
        <div className="flex items-center text-blue-600 font-medium">
          <span>Explore Stations</span>
          <IoIosArrowRoundForward size={40} />
        </div>
      </div>
    </Link>

    {/* My Sessions Card */}
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden hover:-translate-y-1 cursor-pointer">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-green-100 p-3 rounded-lg mr-4 group-hover:bg-green-200 transition-colors">
            <IoMdTime size={35} className='text-green-500' />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">My Sessions</h3>
        </div>
        <p className="text-gray-600 text-sm mb-4">View charging history and active sessions</p>
        <div className="flex items-center text-green-600 font-medium">
          <span>View History</span>
          <IoIosArrowRoundForward size={40} />
        </div>
      </div>
    </div>

    {/* Payments Card */}
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden hover:-translate-y-1 cursor-pointer">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-purple-100 p-3 rounded-lg mr-4 group-hover:bg-purple-200 transition-colors">
            <MdOutlinePayment size={35}/>
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Payments</h3>
        </div>
        <p className="text-gray-600 text-sm mb-4">Manage billing, invoices, and payment methods</p>
        <div className="flex items-center text-purple-600 font-medium">
          <span>Manage Payments</span>
         <IoIosArrowRoundForward size={40} />
        </div>
      </div>
    </div>

    {/* Settings Card */}
    <div className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 overflow-hidden hover:-translate-y-1 cursor-pointer">
      <div className="p-6">
        <div className="flex items-center mb-4">
          <div className="bg-gray-100 p-3 rounded-lg mr-4 group-hover:bg-gray-200 transition-colors">
            <IoSettingsOutline size={35} />
          </div>
          <h3 className="text-lg font-semibold text-gray-800">Settings</h3>
        </div>
        <p className="text-gray-600 text-sm mb-4">Update profile, preferences, and notifications</p>
        <div className="flex items-center text-gray-600 font-medium">
          <span>Configure Settings</span>
          <IoIosArrowRoundForward size={40} />
        </div>
      </div>
    </div>
  </div>

  {/* Stats Section (Optional) */}
  <div className="mt-12 bg-gradient-to-r from-gray-50 to-white rounded-xl p-6 shadow-sm border border-gray-100">
    <h3 className="text-lg font-semibold text-gray-700 mb-4">Quick Stats</h3>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <div className="text-sm text-gray-500 mb-1">Total Sessions</div>
        <div className="text-2xl font-bold text-gray-800">0</div>
      </div>
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <div className="text-sm text-gray-500 mb-1">Energy Charged</div>
        <div className="text-2xl font-bold text-gray-800">0 kWh</div>
      </div>
      <div className="bg-white p-4 rounded-lg border border-gray-200">
        <div className="text-sm text-gray-500 mb-1">Active Since</div>
        <div className="text-2xl font-bold text-gray-800">Today</div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Home
