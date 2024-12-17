import React, { useState } from 'react'
import TempleCard from '../components/TempleCard';
export const Temples = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const temples = [
    {
      name: "Sri Kurmam Temple",
      description: "This is the only temple in the world dedicated to Lord Vishnu's Kurma avatar.",
      image:"https://www.templepurohit.com/wp-content/uploads/2015/09/Sri-Kurmam-Temple..jpg" , // Replace with the correct image path
      locationUrl: "https://maps.app.goo.gl/pRSL4RUJvFXNqe3A6"
    },
    {
      name: "Arasavilli Sun Temple",
      description: "An ancient temple dedicated to the Sun God, built in the 7th century by Kalinga rulers.",
      image:"https://pragyata.com/wp-content/uploads/2021/02/arasavalli1.jpg", // Replace with the correct image path
      locationUrl: "https://maps.app.goo.gl/o9CQYzkSCwxFtNV89"
    },
    {
      name: "Srimukhalingam Temple",
      description: "Known for its unique architecture, this temple is dedicated to Lord Shiva.",
      image:"https://media.istockphoto.com/id/531507683/photo/srimukhalingam.jpg?s=612x612&w=0&k=20&c=uX9qKej36Wmmo7pxU4uu0zZTK_e-4631co1FHn3D748=", // Replace with the correct image path
      locationUrl: "https://maps.app.goo.gl/3prcXeHgCbaoSqhb9"
    }
  ];

  const filteredTemples = temples.filter((temple) =>
    temple.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
  <header className=" text-black py-24">
    <h1 className="lg:text-3xl text-2xl font-bold px-4">Temples in Srikakulam District</h1>
    <p className="lg:text-lg md:text-md sm:text-sm mt-2 px-4">Explore the famous temples in Srikakulam with details and locations.</p>
  </header>
  <main className="container mx-auto mt-[-60px] px-4">
    <div className="mb-4">
      <input
        type="text"
        id="search"
        className="w-full rounded-lg p-2 focus:outline-none  focus:ring-blue-400 border border-blue-300 shadow-md shadow-blue-300"
        placeholder="Search for a temple..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>

    <div className="flex flex-col items-center md:flex-row justify-center  gap-3 py-4">
      {filteredTemples.map((temple, index) => (
        <TempleCard
          key={index}
          name={temple.name}
          description={temple.description}
          image={temple.image}
          locationUrl={temple.locationUrl}
        />
      ))}
    </div>
  </main>
</div>

  )
}
