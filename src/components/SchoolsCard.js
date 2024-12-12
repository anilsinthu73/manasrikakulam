import React from "react";
import {  MapPin } from 'lucide-react';

function SchoolCard({ schoolsData }) {
  const openInMaps = () => {
    const mapsUrl = `${schoolsData.mapLink}`;
    window.open(mapsUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl flex flex-col h-full">
      {/* Image Section */}
      <div className="relative h-48 w-full overflow-hidden">
        <img 
          src={`${schoolsData.image}`} 
          alt={schoolsData.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
          {schoolsData.type}
        </div>
      </div>
      
      {/* Card Content Section */}
      <div className="flex flex-col p-6 flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-4">{schoolsData.name}</h3>
        
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-2 text-gray-600">
            <MapPin className="w-5 h-5 text-blue-600" />
            <span>{schoolsData.address}</span>
          </div>
        </div>

        <button
          onClick={openInMaps}
          className="w-full bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
        >
          <MapPin className="w-5 h-5" />
          View in Maps
        </button>
      </div>
    </div>
  );
}

export default SchoolCard;
