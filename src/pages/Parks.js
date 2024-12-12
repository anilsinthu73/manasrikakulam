import { StarIcon, MapPinIcon, ClockIcon } from "lucide-react";
import React from "react";

export default function Parks() {
  const openInMaps = (mapLink) => {
    window.open(mapLink, '_blank');
  };
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-28">
      {/* Create a responsive grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] cursor-pointer">
          <div className="w-full h-48">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipMfg7PGx5tjzRErkvp4cilcm0wPy0jA3oWLc-3L=s1360-w1360-h1020"
              className="w-full h-full object-cover"
              alt="VUDA Park"
            />
          </div>
          <div className="flex-1 p-6">
            <h3 className="text-xl font-semibold">Diamond Park</h3>
            <div className="flex items-center mt-2">
              <ClockIcon className="w-4 h-4 mr-2" />
              <span>Open 24 Hrs</span>
            </div>
            <div className="flex items-center mt-2">
              <StarIcon className="w-4 h-4 text-yellow-400 mr-2" />
              <span>4.5/5</span>
            </div>
            <div className="flex items-center mt-2">
              <MapPinIcon className="w-4 h-4 mr-2 text-blue-600" />
              <span className="text-md font-semibold hover:cursor-pointer hover:text-blue-600" onClick={()=>openInMaps('https://www.google.co.in/maps/place/Diamond+park/@18.2962093,83.8977852,17z/data=!3m1!4b1!4m6!3m5!1s0x3a3c15100b74aeb9:0x373a2d833fb4cf2d!8m2!3d18.2962093!4d83.9003601!16s%2Fg%2F1thvr36n?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D')}>
                8-11-113, GT Rd, opp. Diamond Park, New Colony
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] cursor-pointer">
          <div className="w-full h-48">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipMWCY8w6jjyT70K8SHUjDyT9pAqZ9Vn8V9VRHhH=s1360-w1360-h1020"
              className="w-full h-full object-cover"
              alt="Children's Park"
            />
          </div>
          <div className="flex-1 p-6">
            <h3 className="text-xl font-semibold">Shanthi Nagar Colony Park</h3>
            <div className="flex items-center mt-2">
              <ClockIcon className="w-4 h-4 mr-2" />
              <span>Daily 7:00 AM - 7:00 PM</span>
            </div>
            <div className="flex items-center mt-2">
              <StarIcon className="w-4 h-4 text-yellow-400 mr-2" />
              <span>4.2/5</span>
            </div>
            <div className="flex items-center mt-2">
              <MapPinIcon className="w-4 h-4 mr-2 text-blue-600" />
              <span className="text-md font-semibold hover:cursor-pointer hover:text-blue-600" onClick={()=>openInMaps('https://www.google.co.in/maps/place/Shanthi+Nagar+Colony+Park/@18.3101875,83.8858626,17z/data=!3m1!4b1!4m6!3m5!1s0x3a3c14df6ccc1897:0xe5c0c75d63d9fe11!8m2!3d18.3101875!4d83.8884375!16s%2Fg%2F1pyqhc5p_?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D')}>Shanti Nagar Colony, Balaga</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] cursor-pointer">
          <div className="w-full h-48">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipMWmc0UkFjLn0_gbLe6qFxmV_dFYfX1laHRXl6i=s1360-w1360-h1020"
              className="w-full h-full object-cover"
              alt="Municipal Park"
            />
          </div>
          <div className="flex-1 p-6">
            <h3 className="text-xl font-semibold">Nagavali River View Park</h3>
            <div className="flex items-center mt-2">
              <ClockIcon className="w-4 h-4 mr-2" />
              <span>4:00 AM - 8:45 PM</span>
            </div>
            <div className="flex items-center mt-2">
              <StarIcon className="w-4 h-4 text-yellow-400 mr-2" />
              <span>4.0/5</span>
            </div>
            <div className="flex items-center mt-2">
              <MapPinIcon className="w-4 h-4 mr-2 text-blue-600" />
              <span className="text-md font-semibold hover:cursor-pointer hover:text-blue-600" onClick={()=>openInMaps("https://www.google.co.in/maps/place/Nagavali+River+View+Park/@18.294672,83.8911545,17z/data=!3m1!4b1!4m6!3m5!1s0x3a3c1502cabd5c11:0x6fe44301dc3e3930!8m2!3d18.294672!4d83.8911545!16s%2Fg%2F124stws_2?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D")}>7VVR+VF6, GT Rd, Chinna Bharatham Colony</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] cursor-pointer">
          <div className="w-full h-48">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTYODR226JLV6jRS17vEX-8iUCSkpJ8a0Piw&s"
              className="w-full h-full object-cover"
              alt="Gandhi Park"
            />
          </div>
          <div className="flex-1 p-6">
            <h3 className="text-xl font-semibold">Gandhi Park</h3>
            <div className="flex items-center mt-2">
              <ClockIcon className="w-4 h-4 mr-2" />
              <span>8 am–12 pm, 4–8 pm</span>
            </div>
            <div className="flex items-center mt-2">
              <StarIcon className="w-4 h-4 text-yellow-400 mr-2" />
              <span>4.3/5</span>
            </div>
            <div className="flex items-center mt-2">
              <MapPinIcon className="w-4 h-4 mr-2 text-blue-600" />
              <span className="text-md font-semibold hover:cursor-pointer hover:text-blue-600" onClick={()=>openInMaps("https://www.google.co.in/maps/place/Gandhi+Park/@18.2968326,83.891207,17z/data=!3m1!4b1!4m6!3m5!1s0x3a3c15ea101f18c7:0xd867a565ce78b9d3!8m2!3d18.2968326!4d83.8937819!16s%2Fg%2F11t4kmhl6m?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D")}> Zilla Parishad Rd, Head Post Office Area, New Colony</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] cursor-pointer">
          <div className="w-full h-48">
            <img
              src="https://content.jdmagicbox.com/comp/srikakulam/r9/9999p8942.8942.180118233444.f4r9/catalogue/kargil-victory-park-srikakulam-parks-ezwa24njwp.jpg"
              className="w-full h-full object-cover"
              alt="Central Park"
            />
          </div>
          <div className="flex-1 p-6">
            <h3 className="text-xl font-semibold">Kargil Victory Park</h3>
            <div className="flex items-center mt-2">
              <ClockIcon className="w-4 h-4 mr-2" />
              <span>9:00 AM - 8:00 PM</span>
            </div>
            <div className="flex items-center mt-2">
              <StarIcon className="w-4 h-4 text-yellow-400 mr-2" />
              <span>4.7/5</span>
            </div>
            <div className="flex items-center mt-2">
              <MapPinIcon className="w-4 h-4 mr-2 text-blue-600" />
              <span className="text-md font-semibold hover:cursor-pointer hover:text-blue-600" onClick={()=>openInMaps("https://www.google.co.in/maps/place/Kargil+Victory+Park/@18.2841675,83.897718,17z/data=!3m1!4b1!4m6!3m5!1s0x3a3c1507c8b7bd5d:0x96bd0eb1d321e260!8m2!3d18.2841675!4d83.9002929!16s%2Fg%2F1pyqlddyx?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D")}>A.P.H.B.Colony, Srikakulam</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:bg-gray-100 transition-all duration-200 hover:scale-[1.02] cursor-pointer">
          <div className="w-full h-48">
            <img
              src="https://travelsetu.com/apps/uploads/new_destinations_photos/destination/2024/01/01/14ae3edc07f9b2bbd00640cb930c5eaf_1000x1000.jpg"
              className="w-full h-full object-cover"
              alt="Botanical Garden"
            />
          </div>
          <div className="flex-1 p-6">
            <h3 className="text-xl font-semibold">Vuda Park</h3>
            <div className="flex items-center mt-2">
              <ClockIcon className="w-4 h-4 mr-2 text-blue-600" />
              <span>Open 24 Hrs</span>
            </div>
            <div className="flex items-center mt-2">
              <StarIcon className="w-4 h-4 text-yellow-400 mr-2" />
              <span>4.4/5</span>
            </div>
            <div className="flex items-center mt-2">
              <MapPinIcon className="w-4 h-4 mr-2 text-blue-600" />
              <span className="text-md font-semibold hover:cursor-pointer hover:text-blue-600" onClick={()=>openInMaps("https://www.google.co.in/maps/place/vuda+park/@18.2764611,83.8920046,17z/data=!3m1!4b1!4m6!3m5!1s0x3a3c15ac043f7fdd:0x3574636cd77e478d!8m2!3d18.2764611!4d83.8945795!16s%2Fg%2F11g6wd94xl?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D")}>7VGV+HRP, A.P.H.B.Colony</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
