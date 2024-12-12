import React from 'react'

const Emergency = ({ icon: Icon, title, number, description }) => {
  return (
    <div className="w-[100%] bg-white p-2 rounded-lg shadow-md shadow-gray-400 hover:shadow-lg transition-all">
    <div className="flex justify-start gap-3 mb-3">
      <div className="p-3 bg-red-50 rounded-full">
        <Icon className="w-6 h-6 text-red-600" />
      </div>
      <h3 className="font-semibold text-lg">{title}</h3>
    </div>
    <a href={`tel:${number}`} className="text-xl font-bold text-red-600 mb-2 block hover:text-red-700">
      {number}
    </a>
    <p className="text-gray-600 text-sm">{description}</p>
  </div>
  )
}

export default Emergency