import React from 'react';
import FamousPersons from '../components/FamousPersons';
import FamousFood from '../components/FamousFood';
import AgricultureProduction from '../components/AgriculturalProduction';
import FamousFestivals from '../components/FamousFestivals';
const FamousFor = () => {
  return (
    <div className="px-4 py-4">
      <main className="mt-[6%]">
        <h2 className="text-lg md:text-2xl font-medium py-2">Famous Persons</h2>
        <div className='w-[210px] py-[2px] bg-gray-500 rounded-md'></div>
        <section className="py-4">
          <FamousPersons />
        </section>

        <h2 className="text-lg md:text-2xl font-medium">Famous Foods</h2>
        <div className='w-[200px] py-[2px] bg-gray-500 rounded-md'></div>
        <section className="py-4 mt-2">
          <FamousFood />
        </section>

        <h2 className="text-lg md:text-2xl font-medium">Agriculture Production</h2>
        <div className='w-[260px] py-[2px] bg-gray-500 rounded-md'></div>
        <section className="main-section">
          <AgricultureProduction />
        </section>

        <h2 className="text-lg md:text-2xl font-medium">Famous Festivals</h2>
        <div className='w-[210px] py-[2px] bg-gray-500 rounded-md'></div>
        <section className="main-section">
          <FamousFestivals />
        </section>
      </main>
    </div>
  );
};

export default FamousFor;
