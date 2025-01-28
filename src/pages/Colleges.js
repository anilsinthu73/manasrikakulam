import { Filter, Search } from 'lucide-react';
import React, { useEffect, useMemo, useState } from 'react';
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
    courses: ["Arts", "Science", "Commerce", "  ", "Management"],
    mapLink:"https://www.google.co.in/maps/place/Dr.+B.R+Ambedkar+University/@18.2801267,83.8149494,17z/data=!3m1!4b1!4m6!3m5!1s0x3a3c13a973ae7359:0x2b4ce9ef59e64e3f!8m2!3d18.2801267!4d83.8175243!16s%2Fm%2F0wjsw15?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
  },
  {
    name: "Aditya Institute Of Technology and Management",
    type: " Engineering",
    address: "Tekkali, Srikakulam, Andhra Pradesh",
    phone: "+9192466 57908",
    email: "info@adityatekkali.edu.in",
    website: "https://adityatekkali.edu.in",
    imageUrl: "https://images.collegedunia.com/public/reviewPhotos/247408/s5.png?mode=cover",
    courses: ["Computer Science", "Electronics", "Mechanical", "Civil", "Electrical", "CSE(AI & ML)"],
    mapLink:"https://www.google.co.in/maps/place/Aditya+Institute+of+Technology+and+Management/@18.5658184,84.1914578,17z/data=!3m1!4b1!4m6!3m5!1s0x3a3c522ff727489b:0x7b3a160927cac1e!8m2!3d18.5658185!4d84.1963287!16s%2Fg%2F1tfc9lsg?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
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
  },
  {
    name:"Acharya NG Rangarao Agricultural College ",
    type:"Agriculture",
      address:"KRISHI VIGYAN KENDRA  AMADALAVALASA-532 185 Srikakulam",
    phone:"+91-99896 23822",
    email:"info@kvkamadalavalasa-angrau.org",
    website:"https://www.kvkamadalavalasa-angrau.org/",
    imageUrl:"/assets/angrau.jpg",
    courses:["B.Sc Agriculture","M.Sc Agriculture","Ph.D Agriculture"],
    mapLink: "https://www.google.co.in/maps/place/Acharya+NG+Rangarao+Agricultural+College"

  },
  {
    name: "Government Degree College (Men)",
    type: "Degree College",
    address: "Near RTC Complex, Srikakulam 532001",
    phone: " 08942 222383",
    email: "srikakulam.jkc@gmail.com",
    website: "https://gcmsklm.ac.in/",
    imageUrl: "https://gcmsklm.ac.in/laraadmin/public/storage/uploads/slides/1737690155_DSC00557.JPG",
    courses: ["Science,Computers, Commerce, Arts"],
    mapLink:"https://www.google.co.in/maps/place/Govt.+Degree+College+for+men,+Srikakulam/@18.3093073,83.8877341,17z/data=!3m1!4b1!4m6!3m5!1s0x3a3c15207fc95241:0x7d576f1706fe2350!8m2!3d18.3093073!4d83.890309!16s%2Fg%2F1tfb4_9x?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
  },
{
    name: "Government  College for Women  (Autonomous)",
    type: "Degree College",
    address: "Womens College Rd, L.B.S Colony, Srikakulam,532001",
    phone: "08942 - 223177",
    email: "gdcw.sklmjkc@gmail.com",
    website:"https://gcwskl.ac.in/",
  imageUrl:"/assets/gdcwsklm.jpg",
    courses: ["Sciences, Commerce, Arts, Humanities"],
    mapLink: "https://www.google.co.in/maps/place/Government+College+for+Women"
    },
    {
    name: "Sri Sai Dental College and Research Institute",
    type: "Dental",
    address: "NH-5, Srikakulam, Andhra Pradesh",
    phone: "+916301315897",
    email: "admin@ssdcri.org", 
    website: "https://www.ssdcri.org/",
    imageUrl: "/assets/ssdcri.jpg",
    courses: ["BDS", "MDS"],
    mapLink: "https://www.google.co.in/maps/place/Sri+Sai+Dental+College+and+Research+Institute"
    },
    {
    name: "Great Eastern Medical School and Hospital",
    type: "Medical",
    address: "Srikakulam, Andhra Pradesh",
    phone: "",
    email: "info@gems.edu.in",
    website: "https://gems.edu.in",
    imageUrl: "/assets/gems.jpg", 
    courses: ["M.B.B.S","Nursing"],
    mapLink: "https://www.google.co.in/maps/place/Great+Eastern+Medical+School+and+Hospital"
    },
    {
    name: "Rajiv Gandhi Institute of Medical Sciences",
    type: "Medical",
    address: "Government Medical College , Srikakulam ,532001",
    phone: "+91-97015 01067",
    email: "rims_srikakulam@yahoo.com",
    website: "https://www.gmcsrikakulam.org",
    imageUrl: "/assets/rims.jpg",
    courses: ["M.B.B.S","Pharmacy","Nursing"], 
    mapLink: "https://www.google.co.in/maps/place/Rajiv+Gandhi+Institute+of+Medical+Sciences"
    },
    {
      name: "Sri Sivani College of Engineering",
    type: "Engineering",
    address: "Chilakapalem, Srikakulam, Andhra Pradesh",
    phone: "+91-7382651466",
    email: "info@srisivani.com",
    website: "https://srisivani.com",
    imageUrl: "/assets/sivani/eng.jpg",
    courses: ["CSE", "ECE", "EEE", "Civil", "Mechanical"],
    mapLink: "https://www.google.co.in/maps/place/Sri+Sivani+College+Of+  "
    },
    // {
    //   name: "Vignan Institute of Technology and Management",
    //   type: "  ",
    //   address: "Burja, Srikakulam, Andhra Pradesh",
    //   phone: "+91-9346747722",
    //   email: "contact@vimt.edu.in",
    //   website: "https://vimt.edu.in",
    //   imageUrl: "https://images.shiksha.com/mediadata/images/1632209783phplTZlSc.jpeg",
    //   courses: ["CSE", "ECE", "EEE", "Civil", "Mechanical", "MBA"],
    //   mapLink: "https://www.google.co.in/maps/place/Vignan+Institute+of+Technology+and+Management/@18.5115173,83.8664317,17z/data=!3m1!4b1!4m6!3m5!1s0x3a3c12156b2ad5e1:0x14b241179655a90!8m2!3d18.5115173!4d83.8690066!16s%2Fg%2F1tg8d5y5"
    // },
    // {
    //   name: "Government Degree College (Men)",
    //   type: "Degree College",
    //   address: "Near RTC Complex, Srikakulam, 532001",
    //   phone: "+91-8942-222555",
    //   email: "gdcsklm@gmail.com",
    //   website: "https://gdcsrikakulam.ac.in",
    //   imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1000",
    //   courses: ["Science", "Commerce", "Arts"],
    //   mapLink:"https://www.google.co.in/maps/place/Govt.+Degree+College+for+men,+Srikakulam/@18.3093073,83.8877341,17z/data=!3m1!4b1!4m6!3m5!1s0x3a3c15207fc95241:0x7d576f1706fe2350!8m2!3d18.3093073!4d83.890309!16s%2Fg%2F1tfb4_9x?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
    // },
    {
      name: "Sri Venkateswara College of Enginnering and Technology",
      type: "Engineering",
      address:"Etcherla, Srikakulam, Andhra Pradesh 532410",
      phone: "+91-7901467803",
      email: "svc.etcherla@gmail.com",
      website: "https://svcet.net",
      imageUrl: "/assets/svc/svc.jpg",
      courses: ["CSE", "ECE", "EEE", "Mechanical", "Civil", "M.Tech"],
      mapLink: "https://www.google.co.in/maps/place/Sri+Venkateswara+College+of+  +and+Technology"
    },
    {
      name: "Sri Venkateswara Pharmacy College",
      type: "Pharmacy",
      address: "Etcherla, Srikakulam, Andhra Pradesh 532410",
      phone: "+91-7901467803",
      email: "svc.etcherla@gmail.com",
      website: "https://",
      imageUrl: "/assets/svc/pharma.jpg",
      courses: ["B.Pharm", "M.Pharm", "Pharm.D"],
      mapLink: "https://www.google.co.in/maps/place/Sri+Venkateswara+Pharmacy+College"
    },
    {
      name: "Sri Sivani College of Pharmacy",
      type: "Pharmacy",
      address: "Chilakapalem,Srikakulam, Andhra Pradesh 532402",
      phone: "+91-xxxx-xxxxxx",
      email: "info@srisivani.com",
      website: "https://srisivani.com",
      imageUrl: "/assets/sivani/pharma-logo.jpg",
      courses: ["B.Ed", "M.Ed", "Ph.D"],
      mapLink: "https://www.google.co.in/maps/place/Sri+Sivani+College+Of+Education"
    },
    
    {
      name: "Sri Venkateswara Polytechnic College",
      type: "Polytechnic",
      address: "Etcherla, Srikakulam, Andhra Pradesh 532410",
      phone: "+91-8096936307", 
      email: "principalsvpt@gmail.com",
      website: "https://svpolytechnic.in",
      imageUrl: "/assets/svc/polytechnic.jpg",
      courses: ["Civil ", "Mechanical ", "Computer Scinece", "Electronics" ,"Electrical"],
      mapLink: "https://www.google.co.in/maps/place/Sri+Venkateswara+Polytechnic+College"
    },
    {
      name:"Gayatri college of Science and Management",
      type:["Junior College-","Management-","Education"],
      address:"NH-16, Munasabpeta, Srikakulam, 532185",
      phone:"+91-08942240240",
      email:"support@gurajadacollege.in",
      imageUrl:"/assets/gurajada/01.png",
      courses:["Intermediate","B.Sc","B.Com","B.A","BBA","BCA","MBA","MCA"],
      website:"https://www.gurajadacollege.in",
      mapLink:"https://maps.app.goo.gl/HB6DRCqC61bN5gYC6"
      },
    {
      name:"Sri Kinjarapu Yerranaidu College Of Agricultural Sciences",
      type:"Agriculture",
      address:"SSR Puram , Etcherla, Srikakulam, Andhra Pradesh 532410",
      phone:"9390611904",
      email:"vesagri@gmail.com",
      website:"http://svcagriculture.in/",
      imageUrl:"/assets/svc/agri.png",
      courses:["B.Sc Agriculture","M.Sc Agriculture","Ph.D Agriculture"],
      mapLink: "https://www.google.co.in/maps/place/Sky+College+of+Agricultural+Sciences"
    },
    {
      name:"Gayatri college of Education",
      type:"Education",
      address: "NH-16, Munasabpeta, Srikakulam, Andhra Pradesh 532185",
      phone: "+91-7901467803",
      email:"",
      website:"https://gurajadacollegeofednsklm.com/",
      imageUrl:"/assets/gurajada/edu.jpg",
      courses: ["B.Ed", "M.Ed", "Ph.D"],
      mapLink: "https://www.google.co.in/maps/place/Gayatri+College+of+Education"
    },
    {
      name:"Sri Venkateswara College of Education",
      type:"Education",
      address:"Etcherla, Srikakulam, Andhra Pradesh 532402",
      phone:"+91-7901467803",
      email: "	svce.etcherla@gmail.com",
      website: "https://svcedn.in",
      imageUrl: "/assets/svc/edu.png",
      courses: ["B.Ed", "M.Ed", "Ph.D"],
      mapLink: "https://www.google.co.in/maps/place/Sri+Sivani+College+Of+Education"
    },
    {
      name: "KAKINADA SRI ADITYA DEGREE COLLEGE CO-ED SRIKAKULAM",
      type:"Degree College",
      address:"Womens College Road , Besides LIC Offic ,Srikakulam, Andhra Pradesh",
      phone:"+91-79970 36663",
      email:"adcsklm@aditya.ac.in",
      imageUrl:"/assets/aditya.png",
      courses:["B.Sc", "B.Com", "B.A", "BBA", "BCA"],
      website:"https://aditya.ac.in/adcsklm/",
      mapLink:"https://maps.app.goo.gl/HB6DRCqC61bN5gYC6"  
      },
    {
      name:"Government Polytechnic College Srikakulam (CC-008)",
      website:"https://govtpolysrikakulam.ac.in/",
      type:"Polytechnic",
      address:"GT Road,Purushotham Nagar Colony,Gujarathipeta,Srikakulam,Andhra Pradesh 532005",
      phone:"9912342008,08942-271567",
      email:"gptsrikakualm@gmail.com",
      imageUrl:"https://govtpolysrikakulam.ac.in/media/govtpolysrikakulam_ac_in/Srikakulam_Banner.jpg",
      courses:["Computer    (CME)", "Mechanical  (ME)", " Electrical and Electronics    (EEE)", " Civil    (CE)", " Computer Commericial Practice (CCP)"],
      mapLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.083509964791!2d83.87230807500754!3d18.29778878275307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c14eebfed30d1%3A0xebd36dcc339f962d!2sGovernment%20Polytechnic%2C%20Srikakulam!5e0!3m2!1sen!2sin!4v1737978490351!5m2!1sen!2sin",
    },
    
    {
      name:"Government Polytechnic college for Women Srikakulam CC-088",
      type:"Polytechnic",
      address: "Gujarathipeta Post.Srikakulam Pin - 532005.Andhra Pradesh",
      phone:"08942-270096,9912342088",
      email:"gpw088@gmail.com",
      website:"https://govtpolyforwomensrikakulam.ac.in/",
      imageUrl:"https://govtpolyforwomensrikakulam.ac.in/media/govtpolyforwomensrikakulam_ac_in/banner_new.jpeg",
      courses:[" Computer Engineering (CME)","  Mechanical (ME)","  Electronics and Communictaion (ECE)", " Civil (CE)", " Electrical and Electronics (EEE)"],
      mapLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.083509964791!2d83.87230807500754!3d18.29778878275307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c14eebfed30d1%3A0xebd36dcc339f962d!2sGovernment%20Polytechnic%2C%20Srikakulam!5e0!3m2!1sen!2sin!4v1737978490351!5m2!1sen!2sin"
    },
    {
      name: "Sarada Institute of Science Technology and Management Srikakulam",
      type: "Engineering",
        address: "Ampolu village , Srikakulam, Andhra Pradesh",
      phone: "08942-200000",
      email: "",
      website: "",
      imageUrl: "/assets/sistam.jpg",
      courses: ["B.Tech", "M.Tech", "Ph.D","BBA","MBA"],
      mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.083509964791!2d83.87230807500754!3d18.29778878275307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c14eebfed30d1%3A0xebd36dcc339f962d!2sGovernment%20Polytechnic%2C%20Srikakulam!5e0!3m2!1sen!2sin!4v1737978490351!5m2!1sen!2sin",
    },
    {
      name: "Government Polytechnic College Amadalavalasa",
      type: "Polytechnic",
      address: "Amadalavalasa -532185, \n Srikakulam District Andhra Pradesh",
      phone: "+91 XXXXXXXXXXX",
      email: "gpac@gmail.com",
      website:"https://gptamadalavalasa.com/",  
      imageUrl: "/assets/gptd.jpg",
      courses: [" Mechanical    (ME)", " Electronics and Communication    (ECE)"],
      mapLink: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.083509964791!2d83.87230807500754!3d18.29778878275307!2m3!1f!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c14eebfed30d1%3A0xebd36dcc339f962d!2sGovernment%20Polytechnic%20College%20Amadalavalasa!5e0!3m2!1sen!2sin!4v1737978490351!5m2!1sen!2sin", 
    },
    {
      name: "Government Degree College Palakonda",
      type: "Degree College",
      address: "Palakonda, Srikakulam District, Andhra Pradesh 532440",
      phone: "9440258086",
      email: "palakonda.jkc2@gmail.com",
      imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1000",
      courses: ["B.Sc", "B.Com", "B.A", "BBA", "BCA"],
      website:"https://gdcpalakonda.ac.in/",
      mapLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.083509964791!2d83.87230807500754!3d18.29778878275307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c14eebfed30d1%3A0xebd36dcc339f962d!2sGovernment%20Polytechnic%2C%20Srikakulam!5e0!3m2!1sen!2sin!4v1737978490351!5m2!1sen!2sin", 
    },
    {
    name:"Government Polytechnic College Tekkali",
    type:"Polytechnic",
    address: "Nandigam Mandal,Srikakulam Dist. PIN 532220.",
    phone: "8096907535",
    email: "gpttekkali@gmail.com",
    website:"https://govtpolytechnictekkali.ac.in/",
    imageUrl: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=1000",
    courses: [" Civil    (ME)", " Electrical and Electronics    (EEE)"],
    mapLink:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3788.083509964791!2d83.87230807500754!3d18.29778878275307!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c14eebfed30d1%3A0xebd36dcc339f962d!2sGovernment%20Polytechnic%2C%20Srikakulam!5e0!3m2!1sen!2sin!4v1737978490351!5m2!1sen!2sin",
    },
];
const collegeTypes = ["All", "University", "  ", "Degree College", "Medical", "Junior College", "Polytechnic","Agriculture","Eductaion","Pharmacy","Dental"];

export default function Colleges() {
  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState(searchQuery);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 300);

    return () => {
      clearTimeout(handler);
    };
  }, [searchQuery]);

  const [selectedCollegeType, setSelectedCollegeType] = useState("All");

  // Define matchesType function before using it in useMemo
  const matchesType = (college, selectedType) => {
    if (selectedType === "All") return true;
    return college.type === selectedType;
  };

  const filteredColleges = useMemo(() => {
    return colleges.filter((college) => {
      const matchesSearch = college.name.toLowerCase().includes(debouncedSearchQuery.toLowerCase()) ||
        college.courses.some(course => course.toLowerCase().includes(debouncedSearchQuery.toLowerCase()));
      return matchesSearch && matchesType(college, selectedCollegeType);
    });
  }, [debouncedSearchQuery, selectedCollegeType]);

  // Debugging: Log filtered colleges
  useEffect(() => {
    console.log("Filtered Colleges:", filteredColleges);
  }, [filteredColleges]);

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
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="relative">
            <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <select
              className="pl-10 pr-8 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
              value={selectedCollegeType}
              onChange={(e) => setSelectedCollegeType(e.target.value)}
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