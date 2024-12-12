import React from 'react';
import { MountainIcon } from 'lucide-react';
import A1 from '../images/A1.jpg'
import A2 from '../images/A2.jpg'
import A3 from '../images/A3.jpg'
import A4 from '../images/A4.jpg'
import Ad1 from '../images/Ad1.jpg'
import Ad2 from '../images/Ad2.jpg'
import Ad3 from '../images/Ad3.jpg'
import Ad4 from '../images/Ad4.jpg'
import HillStationCard from '../components/hillStationCard';
const hills = [
  {
    name: "Araku Valley",
    description: "A serene expanse of lush, green hills perfect for leisurely walks and nature trails, featuring breathtaking sunrise and sunset views and crisp, fresh mountain air. Known for its tranquil atmosphere, vibrant local culture, and adventure activities such as hiking and paragliding.",
    address: "Araku,Andhrapradhesh",
    images: [
      A1,A2,A3,A4
    ],
    facilities: ["Parking", "Restrooms", "Showers", "Lifeguard","WaterFalls"],
    mapLink:"https://www.google.co.in/maps/place/Araku+Valley,+Andhra+Pradesh/@18.3211345,82.8481102,14z/data=!3m1!4b1!4m6!3m5!1s0x3a3a4a4c298a218d:0x2b8de4f914b5f996!8m2!3d18.3222221!4d82.8801765!16zL20vMDdxa2Zi?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Adali Hills",
    description: "A secluded hill station nestled among dramatic mountain peaks, offering excellent trekking opportunities and a peaceful atmosphere. Perfect for nature lovers and photography enthusiasts seeking stunning landscapes and serene experiences.",
    address: "JVQC+368, Adali, Andhra Pradesh 532443",
    images: [
      Ad1,Ad2,Ad3,Ad4
    ],
    facilities: ["Parking", "Picnic Areas"],
    mapLink:"https://www.google.co.in/maps/place/Adali+Hill+Station/@18.7292793,82.7572809,7.98z/data=!4m6!3m5!1s0x3a3c6126a913bbeb:0xb274045d1b433fb2!8m2!3d18.6376625!4d83.8705781!16s%2Fg%2F11n5qvh15s?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
  },
];

function Hillstations() {
  return (
    <div className="py-16">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-3">
            <MountainIcon className="w-10 h-10 text-blue-600" />
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Hill Stations Near</h1>
              <p className="mt-2 text-lg text-gray-600">Discover our beautiful Mountains</p>
            </div>
          </div>
        </div>
      </header>

      <main className=" mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="h-[400px]">
          {hills.map((beach, index) => (
            <HillStationCard key={index} {...beach} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Hillstations;