import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

export function CitySlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      image:
        "https://i0.wp.com/www.saevus.in/wp-content/uploads/2020/03/New-Blog-1.png?fit=900%2C350&ssl=1",
      title: "Bird Sanctuary",
      location: "Telineelapuram",
    },
    {
      image:
        "https://pragyata.com/wp-content/uploads/2021/02/arasavalli1.jpg",
      title: "Arasavalli Temple",
      location: "Srikakulam",
    },
    {
      image:
        "http://www.aptourism.gov.in/media-data/images/462/banner1%60-1280-720.jpg",
      title: "Kalingapatnam Beach",
      location: "Gara,Srikakulam",
    },
    {
      image:
        "https://media.istockphoto.com/id/531507683/photo/srimukhalingam.jpg?s=612x612&w=0&k=20&c=uX9qKej36Wmmo7pxU4uu0zZTK_e-4631co1FHn3D748=",
      title: "Srimukhalingham Temple",
      location: "Gara,Srikakulam",
    },
  ];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  return (
    <div
      className="w-full max-w-full relative h-[550px] overflow-hidden top-[67px]"
      data-id="element-0"
    >
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-transform duration-500 ease-in-out ${index === currentSlide ? "translate-x-0" : "translate-x-full"}`}
          style={{
            transform: `translateX(${100 * (index - currentSlide)}%)`,
          }}
          data-id="element-1"
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full  bg-cover"
            data-id="element-2"
          />
          <div
            className="absolute bottom-0 left-0 right-0 p-8 bg-black bg-opacity-50"
            data-id="element-3"
          >
            <h2
              className="text-white text-4xl font-bold mb-2"
              data-id="element-4"
            >
              {slide.title}
            </h2>
            <p className="text-white text-xl" data-id="element-5">
              {slide.location}
            </p>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
        data-id="element-6"
      >
        <ChevronLeftIcon className="w-6 h-6" data-id="element-7" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-all"
        data-id="element-8"
      >
        <ChevronRightIcon className="w-6 h-6" data-id="element-9" />
      </button>

      <div
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2"
        data-id="element-10"
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? "bg-white scale-125" : "bg-white/50"}`}
            data-id="element-11"
          />
        ))}
      </div>
    </div>
  );
}

