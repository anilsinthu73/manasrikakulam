import React from 'react'
import { CitySlider } from '../components/Slider'
import srikakulam from '../images/srikakulam_image1.jpg'
import {  ArrowRight, BikeIcon, BusIcon, CarIcon, LandPlotIcon, Phone, RailSymbolIcon, UsersIcon, WavesIcon,Stethoscope,Shield, AlertTriangle } from 'lucide-react'
import Emergency from '../components/Emergency'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <>
    <div className='w-[100%]'>
    <CitySlider/>
    </div>
    <section className='px-6 py-2 sm:mt-[7%] md:mt-[10%] mt-[15%] flex flex-col gap-2 mx-auto  bg-white'>
      <div className='flex flex-col gap-1'>
        <h1 className='text-3xl font-serif px-2'>History</h1>
        <div className='w-[150px] py-[2px] bg-purple-500 rounded-md'></div>
      </div>
      <div className='sm:flex sm:flex-col sm:items-center md:flex-row md:justify-center gap-2 px-2 py-2 flex flex-col items-center'>
        <p className='text-[18px] font-normal'>Srikakulam District is the extreme Northeastern District of Andhra Pradesh situated within the Geographic Co-Ordinates of 18?-20’ and 19?- 10’ of Northern latitude and 83?-50’ and 84?-50’ of Eastern longitude. The Nagavali, Vamsadhara, Suvarnamukhi, Vegavathi, Mahendratanaya, Gomukhi, Champavathi, Bahuda and Kumbikota Gedda are the important rivers of the District . The Vamsadhara river rises in the Eastern Ghats of Orissa State and enters Srikakulam District in Bhamini Mandal and finally falls into the Bay of Bengal near Kalingapatnam. The Nagavali and Suvarnamukhi rivers also originate in the Eastern Ghats while Nagavali in Vangara Mandal and the confluence joins the Bay of Bengal at Kallepalli near Srikakulam Rising in Pachipenta hills the Vegavathi river flows from west to east, ultimately joining the river Suvarnamukhi, Gomukhi joins Suvarnamukhi at Sirlam Village of Vizianagaram District and Mahendratanaya which is Atributory of Vamsadhara joins the later at Komanapalli Village in Hiramandalam Mandal. Another river of the same Eastern Ghats flows through Mandasa and Sompeta Mandals and falls into Bay of Bengal at Baruva. The Bahuda river also rises in the Eastern Ghats enters into Srikakulam District at Boddapadu Village of Ichapuram Mandal and flows through Ichapuram, Kaviti and Mandasa and enters into Bay of Bengal at Donkuru. The District has a seacoast of 193 Kms.</p>
        <img className='sm:w-[350px] sm:h-[300px] w-[250px] h-[200px] rounded-sm' src={srikakulam} alt="srikakulam map"/>
      </div>
    </section>
    <section className='px-6 py-2 mt-[4%] flex flex-col gap-2  bg-white '>
    <div className='flex flex-col gap-1'>
      <h1 className='text-3xl font-serif px-1'>ABOUT DISTRICT</h1>
      <div className='w-[250px] py-[2px] bg-purple-500 rounded-md'></div>
    </div>
    <div className='py-2 px-2 sm:flex sm:flex-col sm:items-start md:flex-row md:justify-center gap-2 flex flex-col items-start'>
      <div className='flex flex-col items-start gap-2'>
        <p className='text-[16px] font-normal'>Srikakulam District is the extreme Northeastern District of Andhra Pradesh situated within the Geographic Co-Ordinates of 18°-20’ and 19°- 10’ of Northern latitude and 83°-50’ and 84°-50’ of Eastern longitude… </p>
        <button className='px-2 py-2 font-mono text-[18px] bg-[#3056d5] text-white rounded-md shadow-sm shadow-gray-600'>View More</button>
      </div>
      <div className='md:grid-cols-[1fr,1fr] lg:grid lg:grid-cols-[1fr,1fr,1fr] gap-2 lg:items-start   w-[100%]'>
        <div className='flex sm:items-start justify-center  flex-col gap-2 shadow-md shadow-gray-400 rounded-md px-2 py-2 hover:cursor-pointer hover:shadow-gray-500'>
          <div className='flex items-center gap-2'>
            <LandPlotIcon className='text-[30px] text-blue-600'/>
            <h1 className='text-[20px] font-normal'>Area</h1>
          </div>
          <h1 className='text-[22px] font-semibold'>5,837 Sq.km</h1>
        </div>
        <div className='flex items-start flex-col gap-2 shadow-md shadow-gray-400 rounded-md px-2 py-2 hover:cursor-pointer hover:shadow-gray-500'>
          <div className='flex items-center gap-2'>
            <UsersIcon className='text-[30px] text-blue-600'/>
            <h1 className='text-[20px] font-normal'>Population</h1>
          </div>
          <h1 className='text-[22px] font-semibold'>27,3000+</h1>
        </div>
        <div className='flex items-start flex-col gap-2 shadow-md shadow-gray-400 rounded-md px-2 py-2 hover:cursor-pointer hover:shadow-gray-500'>
          <div className='flex items-center gap-2'>
            <WavesIcon className='text-[30px] text-blue-600'/>
            <h1 className='text-[20px] font-normal'>Coastline</h1>
          </div>
          <h1 className='text-[22px] font-semibold'>193 kms</h1>
        </div>
        <div className='flex items-start flex-col gap-2 shadow-md shadow-gray-400 rounded-md px-2 py-2 hover:cursor-pointer hover:shadow-gray-500'>
          <div className='flex items-center gap-2'>
            <RailSymbolIcon className='text-[30px] text-blue-600'/>
            <h1 className='text-[20px] font-normal'>Rail Network</h1>
          </div>
          <h1 className='text-[22px] font-semibold'>128 kms</h1>
        </div>
      </div>
    </div>
    </section>
    <section className='px-6 py-2 mt-[3%] '>
      <div className='flex flex-col gap-1 px-2'>
        <h1 className='text-[25px] font-serif'>Explore Through</h1>
        <div className='py-[2px] w-[200px] bg-purple-500 rounded-md'></div>
      </div>
      <div className='md:flex md:flex-row md:justify-center gap-5 md:items-center flex flex-col items-center px-2 py-2 border border-gray-400 shadow-sm shadow-gray-400 rounded-sm mt-[20px]'>
        <div className='flex flex-col items-start gap-3 px-2'>
          <h1 className='text-[20px] font-medium text-[#4282f1]'>Transportation</h1>
          <div className='flex justify-center items-center gap-2 px-2 py-2 bg-green-400 rounded-sm'>
            <BusIcon className='text-[30px] text-purple-500'></BusIcon>
            <p className='text-[18px] font-medium'>RTC Buses(By Government)</p>
          </div>
          <div className='flex justify-center items-center gap-2 px-2 py-2 bg-[#f26a2b] rounded-sm'>
            <CarIcon className='text-[30px] text-purple-500'></CarIcon>
            <p className='text-[18px] font-medium flex flex-row justify-between items-center'>Car rentals <ArrowRight size={30} className='text-[50px] ml-[20px] bg-blue-500 text-white px-2 py-[2px] rounded-sm hover:cursor-pointer'></ArrowRight></p>
          </div>
          <div className='flex justify-center items-center gap-2 px-2 py-2 bg-[#f7e739] rounded-sm'>
            <BikeIcon className='text-[30px] text-purple-500'></BikeIcon>
            <p className='text-[18px] font-medium flex flex-row justify-between items-center'>Bike rentals <ArrowRight size={30} className=' ml-[20px] bg-blue-500 text-white px-2 py-[2px] rounded-sm hover:cursor-pointer'></ArrowRight></p>
          </div>
        </div>
        <div className='px-2 py-2'>
        <iframe title='Maps' className='sm:w-[600px] sm:h-[250px] w-[370px] h-[250px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60607.462246582865!2d83.8492857937195!3d18.30314513345007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3c150ef1737321%3A0xa45cf11898953b7!2sSrikakulam%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1730368838411!5m2!1sen!2sin"   allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
    </section>
    <div className="container px-3 py-16 w-[100%]">
        <div className="mb-8 px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Emergency Helplines</h2>
          <p className="text-gray-600">24/7 emergency services at your service</p>
        </div>
        <div className="flex flex-col items-center md:flex-row md:justify-center gap-2 mb-8">
        <Emergency
            icon={Phone}
            title="Emergency Services"
            number="100"
            description="For immediate police, fire, or medical emergencies"
          />
          <Emergency
            icon={Stethoscope}
            title="Medical Emergency"
            number="104 / 108"
            description="24/7 medical assistance and ambulance services"
          />
          <Emergency
            icon={Shield}
            title="Police Non-Emergency"
            number="100"
            description="For non-emergency police assistance and inquiries"
          />
          <Emergency
            icon={AlertTriangle}
            title="Fire Department"
            number="101"
            description="For non-emergency police assistance and inquiries"
          />
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default Home