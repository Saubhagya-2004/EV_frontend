import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { saveUser } from '../utils/storage';

const ProfileSetup = () => {
  const [name, setName] = useState('');
  const [car, setCar] = useState('');
  const navigate = useNavigate();

  const handleSave = () => {
    const email = localStorage.getItem('currentEmail');
    saveUser({ email, name, car });
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 to-blue-100 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md">
        <div className="bg-blue-100 rounded-xl shadow-lg p-8 border border-gray-200 transition-all duration-300 hover:shadow-xl">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8 pb-4 border-b border-gray-700">
            Profile Setup
          </h2>
          
          <div className="mb-6">
            <label 
              htmlFor="fullName" 
              className="block text-black font-medium mb-2"
            >
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
            />
          </div>
          
          <div className="mb-8">
            <label 
              htmlFor="carSelect" 
              className="block text-gray-700 font-medium mb-2"
            >
              Select Your Car
            </label>
            <select
              id="carSelect"
              value={car}
              onChange={(e) => setCar(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 appearance-none bg-white cursor-pointer"
            >
              <option value="" className="text-gray-400">Choose a car brand</option>
              <option value="Tata" className="text-gray-700">Tata</option>
              <option value="MG" className="text-gray-700">MG</option>
              <option value="Citron" className="text-gray-700">Citron</option>
              <option value="Mahindra" className="text-gray-700">Mahindra</option>
              <option value="Maruti Suzuki" className="text-gray-700">Maruti_Suzuki</option>
            </select>
          </div>
          
          <button
            onClick={handleSave}
            disabled={!name || !car}
            className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
              !name || !car
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 shadow-md hover:shadow-lg'
            }`}
          >
            Save Profile
          </button>
          
          <p className="text-center text-gray-500 text-sm mt-6">
            Please fill in all fields to complete your profile setup
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileSetup;