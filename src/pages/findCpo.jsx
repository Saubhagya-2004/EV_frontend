import React from "react";
import data from "../data/cpo.json";
import { FaChargingStation, FaMapMarkerAlt } from "react-icons/fa";
import { RiFlashlightFill } from "react-icons/ri";
import { BsSpeedometer2 } from "react-icons/bs";
import { MdArrowRightAlt } from "react-icons/md";

const FindCpo = () => {
  const statusConfig = {
    available: { 
      label: "Available", 
      class: "bg-emerald-50 text-emerald-700 border-emerald-200",
      dot: "bg-emerald-500"
    },
    busy: { 
      label: "Busy", 
      class: "bg-amber-50 text-amber-700 border-amber-200",
      dot: "bg-amber-500"
    },
    offline: { 
      label: "Offline", 
      class: "bg-slate-100 text-slate-600 border-slate-200",
      dot: "bg-slate-400"
    }
  };

  const getStatusConfig = (status) => {
    const statusKey = status.toLowerCase();
    return statusConfig[statusKey] || statusConfig.offline;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-200 to-blue-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <div className="p-3 bg-green-600 rounded-xl shadow-lg">
              <RiFlashlightFill className="text-white text-2xl" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
              Charging Stations
            </h1>
          </div>
         <p className="text-gray-600 text-sm sm:text-base md:text-lg leading-relaxed w-full text-center md:text-justify">
  Discover charging points near you with real-time availability status and detailed specifications
</p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.map((item) => {
            const status = getStatusConfig(item.status);
            
            return (
              <div
                key={item.id}
                className="group bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-xl ${item.name === 'EV Point' ? 'bg-emerald-100' : 'bg-blue-100'}`}>
                        <FaChargingStation 
                          className='text-emerald-600' 
                          size={24} 
                        />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-1 mt-1">
                          <div className={`w-2 h-2 rounded-full ${status.dot} animate-pulse`}></div>
                          <span className={`text-sm font-medium px-3 py-1 rounded-full border ${status.class}`}>
                            {status.label}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 text-gray-700">
                      <FaMapMarkerAlt className="text-red-500 flex-shrink-0" />
                      <span className="font-medium">{item.location || "Unknown location"}</span>
                    </div>

                    <div className="flex items-center gap-3 text-gray-700">
                      <BsSpeedometer2 className="text-blue-500 flex-shrink-0" />
                      <div>
                        <span className="font-semibold">{item.power || "150"} kW</span>
                        <span className="text-gray-500 text-sm ml-2">Fast Charging</span>
                      </div>
                    </div>

                    {item.connectors && (
                      <div className="flex gap-3">
                        {item.connectors.map((connector, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1.5 bg-blue-50 text-blue-700 text-sm font-medium rounded-lg border border-blue-100"
                          >
                            {connector}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-100">
                    <button className="w-full py-3.5 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold rounded-xl hover:from-green-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-lg group">
                      <span className="flex items-center justify-center gap-2">
                        View Station Details
                        <MdArrowRightAlt size={25} />
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                <span className="text-gray-700">Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                <span className="text-gray-700">Busy</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
                <span className="text-gray-700">Offline</span>
              </div>
            </div>
            <div className="text-gray-600 font-medium">
              Showing {data.length} charging stations
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindCpo;