import React from 'react';
import { Waves } from 'lucide-react';
import BeachCard from '../components/BeachCard';
import K3 from '../images/Kalingapatnam3.png'
import K2 from '../images/Kalingapatnam4.jpg'
import K1 from '../images/Kalingapatnam5.jpg'
import K4 from '../images/Kalingaptna2.jpg'
import B1 from '../images/baruva3.jpg'
import B2 from '../images/baruva1.jpg'
import B3 from '../images/baruva2.jpg'
import B4 from '../images/baruva4.jpg'
import M1 from '../images/Mogadala1.jpg'
import M2 from '../images/Mogadala2.jpg'
import M3 from '../images/Mogadala3.jpg'
import M4 from '../images/Mogadala4.jpg'
const beaches = [
  {
    name: "Kalingapatnam Beach",
    description: "A pristine stretch of golden sand perfect for swimming and surfing, featuring spectacular sunset views and crystal-clear waters. Known for its vibrant beach culture and water sports activities.",
    address: "Srikakulam district, Kalingapatnam, Andhra Pradesh 532406",
    images: [
      K1,K2,K3,K4
    ],
    facilities: ["Parking", "Restrooms", "Showers", "Lifeguard"],
    mapLink:"https://www.google.co.in/maps/place/Port+Kalingapatnam+beach/@18.3306951,84.1183662,15z/data=!3m1!4b1!4m6!3m5!1s0x3a3c37d45ad3a46d:0xcf4f4c429fe3ec94!8m2!3d18.3306957!4d84.128666!16s%2Fm%2F0113hc34?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Baruva Beach",
    description: "A secluded beach surrounded by dramatic cliffs, offering excellent snorkeling opportunities and peaceful atmosphere. Perfect for nature lovers and underwater photography enthusiasts.",
    address: "VHJW+27R, MDR26, Kottur, Andhra Pradesh 532263",
    images: [
      B1,B2,B3,B4
    ],
    facilities: ["Parking", "Picnic Areas", "Water Sports", "Marine Tours"],
    mapLink:"https://www.google.co.in/maps/place/Baruva+Beach/@18.8807242,84.5936108,17z/data=!3m1!4b1!4m6!3m5!1s0x3a3d0d2f783ab425:0xa2cc2fac477aef11!8m2!3d18.8815997!4d84.5962278!16s%2Fg%2F11fktgr774?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "MogadalaPadu Beach",
    description: "Famous for its turquoise waters and white sand, this family-friendly beach offers calm waters and abundant marine life. A perfect destination for families with children.",
    address: "73MH+59M, MDR147, Mogadalapadu, Andhra Pradesh 532404",
    images: [
      M1,M2,M4,M3
    ],
    facilities: ["Parking", "Restrooms", "Restaurant", "Kids Play Area", "First Aid"],
    mapLink:"https://www.google.co.in/maps/place/Mogadalapadu+Beach/@18.2833772,84.0702955,16z/data=!3m1!4b1!4m6!3m5!1s0x3a3c39b5f0ea20e3:0xd651b7fd1ff30177!8m2!3d18.2836417!4d84.0793359!16s%2Fg%2F12hlspnnz?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
  }
];

function Beaches() {
  return (
    <div className="py-16">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center gap-3">
            <Waves className="w-10 h-10 text-blue-600" />
            <div>
              <h1 className="text-4xl font-bold text-gray-900">Marine Waters</h1>
              <p className="mt-2 text-lg text-gray-600">Discover our beautiful coastal paradise</p>
            </div>
          </div>
        </div>
      </header>

      <main className=" mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="h-[400px]">
          {beaches.map((beach, index) => (
            <BeachCard key={index} {...beach} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Beaches;