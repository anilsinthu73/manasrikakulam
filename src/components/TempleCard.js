import React from 'react'

const TempleCard = ({ image, name, description, locationUrl }) => {
  return (
    <div className="w-full md:w-1/3 mb-6" data-temple={name}>
  <div className="bg-white shadow-lg rounded-lg overflow-hidden">
    <img
      src={image}
      alt={name}
      className="w-full h-48 object-cover"
      style={{ height: "200px" }} // Tailwind already handles this with `h-48` or `h-[200px]`
    />
    <div className="p-4">
      <h5 className="text-xl font-semibold mb-2">{name}</h5>
      <p className="text-gray-700 mb-4">{description}</p>
      <a
        href={locationUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-300"
      >
        View Location
      </a>
    </div>
  </div>
</div>

  )
}

export default TempleCard;