import { Filter, Search } from 'lucide-react';
import React, { useState } from 'react';
import CollegeCard from '../components/CollegeCard';

const colleges = [
  {
    name: "Dr. B.R. Ambedkar University",
    type: "University",
    address: "Etcherla, Srikakulam, Andhra Pradesh",
    phone: "+91-8942-281518",
    email: "registrar@brau.edu.in",
    website: "https://www.brau.edu.in",
    imageUrl: "https://tse4.mm.bing.net/th?id=OIP.ak8kWusNm-XTBFKeRpYkmAHaD6&pid=Api&P=0&h=180",
    courses: ["Arts", "Science", "Commerce", "Engineering", "Management"],
    mapLink:"https://www.google.co.in/maps/place/Dr.+B.R+Ambedkar+University/@18.2801267,83.8149494,17z/data=!3m1!4b1!4m6!3m5!1s0x3a3c13a973ae7359:0x2b4ce9ef59e64e3f!8m2!3d18.2801267!4d83.8175243!16s%2Fm%2F0wjsw15?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Aditya Institute Of Technology and Management",
    type: "Engineering",
    address: "Tekkali, Srikakulam, Andhra Pradesh",
    phone: "+9192466 57908",
    email: "info@adityatekkali.edu.in",
    website: "https://adityatekkali.edu.in",
    imageUrl: "https://images.collegedunia.com/public/reviewPhotos/247408/s5.png?mode=cover",
    courses: ["Computer Science", "Electronics", "Mechanical", "Civil", "Electrical","CSE(AI & ML)"],
    mapLink:"https://www.google.co.in/maps/place/Aditya+Institute+of+Technology+and+Management/@18.5658184,84.1914578,17z/data=!3m1!4b1!4m6!3m5!1s0x3a3c522ff727489b:0x7b3a160927cac1e!8m2!3d18.5658185!4d84.1963287!16s%2Fg%2F1tfc9lsg?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Government Degree College",
    type: "Degree College",
    address: "Near RTC Complex, Srikakulam",
    phone: "+91-8942-222555",
    email: "gdcsklm@gmail.com",
    website: "https://gdcsrikakulam.ac.in",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1000",
    courses: ["B.Sc", "B.Com", "B.A", "BBA", "BCA"],
    mapLink:"https://www.google.co.in/maps/place/Govt.+Degree+College+for+men,+Srikakulam/@18.3093073,83.8877341,17z/data=!3m1!4b1!4m6!3m5!1s0x3a3c15207fc95241:0x7d576f1706fe2350!8m2!3d18.3093073!4d83.890309!16s%2Fg%2F1tfb4_9x?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "GMR Institute of Technology",
    type: "Engineering",
    address: "Rajam, Srikakulam District",
    phone: "+91 08941-251592",
    email: "gmrit@gmrit.edu.in",
    website: "https://gmrit.edu.in",
    imageUrl: "https://media-exp2.licdn.com/dms/image/D561BAQH0QtVEwLBF4A/company-background_10000/0/1658038523445?e=2147483647&v=beta&t=VxDq-d37Hma_YiiavGYO48-vQycPp3u1Gwj3N-6AHZM",
    courses: ["Computer Science", "AI & ML", "Mechanical", "ECE", "Civil"],
    mapLink:"https://www.google.co.in/maps/place/GMR+Institute+of+Technology/@19.0718852,83.305544,8.86z/data=!4m6!3m5!1s0x3a3c772724754cc9:0xcf876cd74c2b6b01!8m2!3d18.4664551!4d83.6607752!16s%2Fm%2F02qh6jk?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
  }
];

const collegeTypes = ["All", "University", "Engineering", "Degree College", "Medical"];

export default function Colleges() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("All");

  const filteredColleges = colleges.filter((college) => {
    const matchesSearch = college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.courses.some(course => course.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesType = selectedType === "All" || college.type === selectedType;
    return matchesSearch && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4 sm:px-2 lg:px-4 w-[100%]">
      <div className="w-[100%] mx-auto">
        <div className="text-center mb-12">
          <h1 className="lg:text-4xl text-3xl font-bold text-gray-900 mb-4">
            Educational Institutions in Srikakulam
          </h1>
          <p className="lg:text-lg text-md text-gray-600">
            Discover top colleges and universities in Srikakulam district
          </p>
        </div>

        <div className="mb-8 flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by college name or course..."
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              {collegeTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredColleges.map((college) => (
            <CollegeCard key={college.name} {...college} />
          ))}
        </div>

        {filteredColleges.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">
              No colleges found matching your criteria. Try adjusting your search or filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}