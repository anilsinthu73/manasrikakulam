import React from 'react'
import {Building2,MapPin,Clock,Phone,ExternalLink}from 'lucide-react'
const BankCard = ({ bank }) => {
    const openInMaps = (mapLink) => {
        window.open(mapLink, '_blank');
      };
      const openWeb = (webLink) => {
        window.open(webLink, '_blank');
      };
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02] hover:shadow-xl">
        <div className="relative h-48">
          <img 
            src={bank.image} 
            alt={bank.name}
            className="w-[100%] h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <div className="absolute bottom-4 left-4 text-white">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              <span className="text-sm font-medium">{bank.type} Bank</span>
            </div>
            <h3 className="text-2xl font-bold mt-1">{bank.name}</h3>
          </div>
        </div>
        <div className="py-2">
          <div className="space-y-4 mb-6">
            <div className="flex items-start gap-3 text-gray-700">
              <MapPin className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
              <span>{bank.address}</span>
            </div>
            <div className="flex items-start gap-3 text-gray-700">
              <Phone className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
              <span>{bank.phone}</span>
            </div>
            <div className="flex items-start gap-3 text-gray-700">
              <Clock className="w-5 h-5 text-blue-600 flex-shrink-0 mt-1" />
              <span className="whitespace-pre-line">{bank.hours}</span>
            </div>
          </div>
          <div className="mb-6 flex flex-row items-center">
            <h4 className="font-semibold text-gray-900 ">Email:</h4>
                <span className="px-2 bg-blue-50 text-blue-700 rounded-full text-sm">
                  {bank.Email}
                </span>
          </div>
  
          <div className="flex gap-3">
            <button
              onClick={() => openInMaps(bank.mapLink)}
              className="flex-1 bg-blue-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors"
            >
              <MapPin className="w-5 h-5" />
              View on Maps
            </button>
            <button
              onClick={() =>openWeb(bank.website)}
              className="flex-1 border border-blue-600 text-blue-600 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-50 transition-colors"
            >
              <ExternalLink className="w-5 h-5" />
              Visit Website
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default BankCard;