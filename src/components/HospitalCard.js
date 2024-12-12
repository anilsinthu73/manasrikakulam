import React from 'react';
import { Phone, MapPin, Clock, Star, Building2 } from 'lucide-react';

function HospitalCard({
  name,
  address,
  phone,
  specialties,
  rating,
  timing,
  image,
  mapLink
}) {
  const openInMaps = (mapLink) => {
    window.open(mapLink, '_blank');
  };
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-[1.02]">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xl font-bold text-gray-900">{name}</h3>
          <div className="flex items-center gap-1">
            <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <span className="text-gray-600 font-semibold">{rating}</span>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-start gap-2">
            <MapPin className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
            <p className="text-blue-500 hover:cursor-pointer hover:text-blue-600 " onClick={()=>openInMaps(mapLink)}>{address}</p>
          </div>
          
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-gray-500" />
            <p className="text-gray-600">{phone}</p>
          </div>
          
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5 text-gray-500" />
            <p className="text-gray-600">{timing}</p>
          </div>
          
          <div className="flex items-start gap-2">
            <Building2 className="w-5 h-5 text-gray-500 mt-1" />
            <div className="flex flex-wrap gap-2">
              {specialties.map((specialty, index) => (
                <span
                  key={index}
                  className="px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                >
                  {specialty}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HospitalCard;