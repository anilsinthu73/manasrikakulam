import React from 'react'
import {Building2} from 'lucide-react'
import BankCard from '../components/BankCard';
import SBI from '../images/SbI.jpeg'
import Andhra from '../images/andhraBank.jpg'
const Banks = () => {
   const banks= [
    {
      id: 1,
      name: "State Bank of India(Main Branch)IFS Code : SBIN0000919",
      type: "Urban",
      hours: "Mon-Sat: 9:00 AM - 4:30 PM\n2nd and 4th Sat holiday",
      Email:"sbi[dot]00919[at]sbi[dot]co[dot]in",
      phone: "08942-222616",
      image: SBI,
      address: "State Bank of India, Srikakulam Main Branch, GT Road",
      mapLink:"https://www.google.com/maps/place/State+Bank+of+India+SRIKAKULAM/@18.2949089,83.8968984,17z/data=!3m1!4b1!4m6!3m5!1s0x3a3c15d881f4383d:0x88a88c883636cf2!8m2!3d18.2949089!4d83.8968984!16s%2Fg%2F12626cz75?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D",
      website:" https://www.onlinesbi.com/"
    },
    {
      id: 2,
      name: "ANDHRA BANK, IFSC: ANDB0000166",
      type: "Semi Urban",
      hours: "Mon-Sat: 9:00 AM - 4:30 PM\n2nd and 4th Sat holiday",
      Email:"bm0166[at]andhrabank[dot]co[dot]in",
      phone: "08941-255128",
      image: Andhra,
      address: "ANDHRA BANK, G.SIGADAM Mandal, G.SIGADAM",
      mapLink:"https://www.google.co.in/maps/search/andhra+bank+g.sigadam+mandal+g.sigadam/@18.3783263,83.6702508,15z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D",
      website:" https://www.andhrabank.in"
    },
  ];
  return (
    <div className='px-4 py-28 flex flex-col items-start'>
    <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center gap-3">
          <Building2 className="w-8 h-8 text-blue-600" />
          Financial Institutions
        </h2>
        <div className="flex flex-col items-center sm:flex-row sm:justify-center flex-wrap gap-4">
          {banks.map((bank) => (
            <BankCard key={bank.id} bank={bank} />
          ))}
        </div>
      </div>
  )
}

export default Banks