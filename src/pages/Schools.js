import React from 'react';
import SchoolCard from '../components/SchoolsCard';


const SchoolsList = () => {
  const schoolsData = [
    {
      id:1,
        name: "Government High School",
        type:"Government",
        image: "https://lh3.googleusercontent.com/p/AF1QipMY0AjSx41TyTqNb7u5Q-vje-vwqGMZDh5nvWn1=s1360-w1360-h1020",
        address: "Government High School, Womens College Road, L.B.S Colony, Srikakulam",
        category: "High School",
        pincode: "532001",
        mapLink: "https://www.google.com/maps/place/Government+High+School/data=!4m7!3m6!1s0x3a3c150e3763b9f5:0x5d4d22f06d0a2353!8m2!3d18.2933765!4d83.9036701!16s%2Fg%2F1pyqgsf_r!19sChIJ9bljNw4VPDoRUyMKbfAiTV0?authuser=0&hl=en&rclk=1"
      },
      {
        id:2,
        name: "Municipal High School",
        type:"Government",
        image: "https://content.jdmagicbox.com/comp/srikakulam/x1/9999p8942.8942.191016200228.j6x1/catalogue/m-p-u-p-school-srikakulam-schools-vq4lx95j1c.jpg",
        address: "Municipal High School, Balaga, Srikakulam Town",
        category: "High School",
        pincode: "532001",
        mapLink: "https://www.google.com/maps/place/DPEP+Municipal+Elementary+School/data=!4m7!3m6!1s0x3a3c151cc5732247:0x1d6c0ce9823906f!8m2!3d18.2951696!4d83.8934361!16s%2Fg%2F1tmy3h07!19sChIJRyJzxRwVPDoRb5AjmM7A1gE?authuser=0&hl=en&rclk=1"
      },
      {id:3,
        name: "Zilla Parishad High School",
        type:"Government",
        image: "https://lh5.googleusercontent.com/p/AF1QipNDoe2WBlHy9lygSSo2BlQ4JlzDM46v1sJe48DT=w213-h160-k-no",
        address: "Zilla Parishad High School, Narasannapeta",
        category: "High School",
        pincode: "532421",
        mapLink: "https://www.google.com/maps/place/Government+High+School/@18.4155336,84.0428127,15z/data=!4m16!1m9!3m8!1s0x3a3c4697306f6a77:0x41cbc296ac9d530c!2sGovernment+High+School!8m2!3d18.4155336!4d84.0428127!9m1!1b1!16s%2Fg%2F11c6ltkr6b!3m5!1s0x3a3c4697306f6a77:0x41cbc296ac9d530c!8m2!3d18.4155336!4d84.0428127!16s%2Fg%2F11c6ltkr6b?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
      },
      {id:4,
        name: "AP Model School",
        type:"Government",
        image: "https://education.sakshi.com/sites/default/files/images/2024/04/03/ap-model-schools-1712146478.jpg",
        address: "AP Model School, Sarubujjili",
        category: "Model School",
        pincode: "532427",
        mapLink: "https://www.google.com/maps/place/A.P.+Model+School/@18.4771252,83.8523494,15z/data=!4m6!3m5!1s0x3a3c69b9b00b1123:0x83815d10e8706fff!8m2!3d18.4771252!4d83.8523494!16s%2Fg%2F11hdfmwbz_?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
      },
      {id:5,
        name: "Government High School",
        type:"Government",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFFkNkTjbiD3-dIFPYgodn1NDoIL3OOzHHQg&s",
        address: "Government High School, Palakonda",
        category: "High School",
        pincode: "532440",
        mapLink: "https://www.google.com/maps/place/Govt.+High+School,+Palakonda/@18.5979844,83.7622065,15z/data=!4m6!3m5!1s0x3a3c7bae6eaeeb5f:0xb965b1a5dc5433d8!8m2!3d18.5979844!4d83.7622065!16s%2Fg%2F11fmrpvxl2?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
      },
      {id:6,
        name: "Ravindra Public School",
        type:"Private",
        image: "https://lh3.googleusercontent.com/p/AF1QipOx5VCjLe6nAWG4Zy91qyYataYD8C7B4CsQnFiO=s1360-w1360-h1020",
        address: "Ravindra Public School, Srikakulam",
        category: "Private School",
        pincode: "532002",
        mapLink: "https://www.google.com/maps/place/Ravindra+Bharathi+Schools/@18.2930677,83.9023773,15z/data=!4m6!3m5!1s0x3a3c150fb789cfab:0x357c1409e016a6bc!8m2!3d18.2930677!4d83.9023773!16s%2Fg%2F12hmv3lvq?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D"
      },
      {id:7,
        name: "Narayana E-Techno School",
        type:"Private",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZWDZKvyzkZhtc9WmGj-njDb4OJIx3Etk6Q&s",
        address: "Narayana E-Techno School, Srikakulam",
        category: "Private School",
        pincode: "532001",
        mapLink: "https://www.google.com/maps/place/Narayana/@18.2964905,83.9002918,15z/data=!4m14!1m7!3m6!1s0x3a3c15101529863b:0x22b8287d7b874bf!2sNarayana!8m2!3d18.2964905!4d83.9002918!16s%2Fg%2F1ptwt26h6!3m5!1s0x3a3c15101529863b:0x22b8287d7b874bf!8m2!3d18.2964905!4d83.9002918!16s%2Fg%2F1ptwt26h6?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
      },
      {id:8,
        name: "Vignan High School",
        type:"Private",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0xhbeOna1T90fUjV_5feEP3OYot94BPBLHw&s",
        address: "Vignan High School, Srikakulam",
        category: "Private School",
        pincode: "532005",
        mapLink: "https://www.google.com/maps/place/Vignan+High+School/@18.4215853,83.8515196,12.92z/data=!4m6!3m5!1s0x3a3c6a3036e73a09:0xb66f09f7b7b8634d!8m2!3d18.4117108!4d83.8981131!16s%2Fg%2F11bz0cm4rp?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
      },
      {id:9,
        name: "Sri Chaitanya Techno School",
        type:"Private",
        image: "https://content.jdmagicbox.com/comp/srikakulam/l4/9999p8942.8942.170605111302.b1l4/catalogue/sri-chaitanya-school-official-colony-srikakulam-schools-adk19suh4k-250.jpg",
        address: "Sri Chaitanya Techno School, Srikakulam",
        category: "Private School",
        pincode: "532001",
        mapLink: "https://www.google.com/maps/place/Sri+Chaitanya+EM+school/@18.5740941,83.6247775,10.46z/data=!4m10!1m2!2m1!1sSri+Chaitanya+Techno+School,+Amadalavalasa+srikakulam!3m6!1s0x3a3c152bc0d5b1d7:0x5aa2a8c99c7e1b5c!8m2!3d18.3276823!4d83.8933742!15sCjVTcmkgQ2hhaXRhbnlhIFRlY2hubyBTY2hvb2wsIEFtYWRhbGF2YWxhc2Egc3Jpa2FrdWxhbSIDiAEBkgEGc2Nob29s4AEA!16s%2Fg%2F11d_pxq2qx?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
      },
      {id:10,
        name: "Little Flower School",
        type:"Private",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoYraKe2WmlqUl0mD7yY83acFoe26TqHzHvA&s",
        address: "Montessori English Medium High School, Srikakulam",
        category: "Private School",
        pincode: "532001",
        mapLink: "https://www.google.com/maps/place/Little+Flower+English+Medium+School/@18.44791,83.656169,15z/data=!4m6!3m5!1s0x3a3c76e9ba0a9507:0x86938c91bcc8f8c6!8m2!3d18.44791!4d83.656169!16s%2Fg%2F11cn93cmvn?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D"
      }
  
]
return (
    <div className=" mx-auto px-2 py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {schoolsData.map((school) => (
            <SchoolCard key={school.id} schoolsData={school} />
          ))}
        </div>
      </div>
);
}

export default SchoolsList;
