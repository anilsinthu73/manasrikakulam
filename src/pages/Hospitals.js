import React, { useState } from 'react';
import HospitalCard from '../components/HospitalCard';

const hospitals = [
  {
    name: "GEMS Hospital",
    address: "NH-16, Ragolu Junction, Srikakulam",
    phone: "+91 89422 24444",
    specialties: ["Multi-Specialty", "Emergency Care", "Cardiology"],
    rating: 4.5,
    timing: "24/7 Emergency Services",
    image: "https://www.orchidfoundation.info/sites/default/files/2020-07/great-eastern-medical-colle.jpg",
    mapLink:"https://www.google.co.in/maps/search/gems+hospital+ragolu+junction,NH-16/@18.3443343,83.910461,14z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Sri Sai Hospital",
    address: "Day & Night Junction, Srikakulam",
    phone: "+91 89422 26666",
    specialties: ["General Medicine", "Orthopedics", "Pediatrics"],
    rating: 4.3,
    timing: "9:00 AM - 9:00 PM",
    image: "https://www.google.com/imgres?imgurl=https://content.jdmagicbox.com/comp/srikakulam/a8/9999p8942.8942.101002113837.y4a8/catalogue/sree-sai-dental-college-and-research-institute-peda-padu-road-srikakulam-dental-colleges-PuXxFJJwWV.jpg&tbnid=6hClUB01srjhzM&vet=1&imgrefurl=https://www.justdial.com/Srikakulam/Sree-SAI-Dental-College-Research-Institute-Chinnabazar-Peda-Padu-Road/9999P8942-8942-101002113837-Y4A8_BZDET&docid=87ZlROUd49uRNM&w=2048&h=1536&hl=en-US&source=sh/x/im/m1/4&kgs=be6044e054c3de70&shem=abme,trie",
    mapLink:"https://www.google.co.in/maps/search/sri+sai+hospitals+day+%26+night+juntion/@18.3443155,83.8486586,12z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Krishna Institute of Medical Sciences",
    address: "Arasavalli Road, Srikakulam",
    phone: "+91 89422 25555",
    specialties: ["Neurology", "Cardiology", "Oncology"],
    rating: 4.7,
    timing: "24/7 Emergency Services",
    image: "https://content.jdmagicbox.com/comp/srikakulam/x4/9999p8942.8942.120921181535.p7x4/catalogue/krishna-institute-of-medical-sciences-srikakulam-ho-srikakulam-hospitals-2r4bc3d.jpg",
    mapLink:"https://www.google.co.in/maps/search/krishna+institute+of+medical+sciences,arasavalli+road/@18.3246313,83.8634496,14z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "District Government Hospital",
    address: "District Hospital Road, Srikakulam",
    phone: "+91 8942-222555",
    specialties: ["General Medicine", "Emergency Care", "Surgery"],
    rating: 4.0,
    timing: "Open 24 Hours",
    image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhyg7l1rIgj2HXDIrKUhm4U8_aV1dcMXi4CiIxDbykGlw9y67UxSc0iWnoHBz0L3t_e1ODLz-GHxDBHZC9KZ9sCqx0LLrPTBxm2P6Keo5Kc8Ac6sjKJiKf4wB022Au61WaWQNXyHe5-vvEK/s1600/PHC..jpg",
    mapLink:"https://www.google.co.in/maps/search/district+government+hospital,srikakulam/@18.3046653,83.8815032,15z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Aditya Hospital",
    address: "Ring Road, Srikakulam",
    phone: "+91 8942-225888",
    specialties: ["Multi-Specialty", "Emergency Care", "ICU"],
    rating: 4.4,
    timing: "24/7 Emergency Services",
    image: "https://adityahospital.com/wp-content/uploads/sites/104/2024/01/Aditya-Hospital-1.png",
    mapLink:"https://www.google.co.in/maps/search/Aditya+Hospital,ring+road+srikakulam/@18.3046647,83.8815032,15z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Sunrise Super Specialty Hospital",
    address: "New Bus Stand Road, Srikakulam",
    phone: "+91 8942-226999",
    specialties: ["Super Specialty", "Cardiology", "Neurology"],
    rating: 4.6,
    timing: "24/7 Emergency Services",
    image: "https://sunrisehospitalnzb.com/wp-content/themes/sunrisehospital/images/about/ab2.jpg",
    mapLink:"https://www.google.co.in/maps/search/sunrise+superspeciality+hospital+srikakaulm/@18.2118774,83.3917508,10.46z?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
  }
];

function Hospitals() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredHospitals = hospitals.filter(hospital =>
    hospital.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    hospital.specialties.some(specialty => 
      specialty.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="min-h-screen py-20 bg-gray-50">
      {/* Header */}
      <header className="lg:px-10 px-5 text-white py-12">
        <div className="px-4 py-4">
          <div className="w-[100%] px-2">
            <input
              type="text"
              placeholder="Search by hospital name or specialty..."
              className="w-[100%] px-2 py-4 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 border border-blue-300 shadow-md shadow-blue-300"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className=" px-4 py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-center">
          {filteredHospitals.map((hospital, index) => (
            <HospitalCard key={index} {...hospital} />
          ))}
        </div>
        
        {filteredHospitals.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No hospitals found matching your search criteria.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default Hospitals;