import React from 'react';
import { FaReact } from 'react-icons/fa';
import { FaSatellite, FaRocket, FaEarthAmericas } from 'react-icons/fa6';
import wave from "../../assets/wavepic.png";

const ServiceData = [
    {
        title: "HST",
        content:"300-1500km",
        description:
        "Used for astronomical observations,capturing stunning images of the universe.",
        icon: < FaRocket className="text-7xl" />,
        asoDelay: "300",
    
    },
    {
      title: "ISS",
      content: "500-1500km",
      description: 
      "It's a habitable artificial satellite orbiting Earth and Serves as a space enviornment research laboratory",
      icon: <FaSatellite
      className="text-7xl" />,
      asoDelay: "500",  
    },
    {
        title: "GPS",
        content: "300-1500km",
        description:
        "Part of the Global Positioning System (GPS) used for navigation.",
        icon: <FaEarthAmericas className="text-7xl" />,
        asoDelay: "700",
    },

];
const Services = () => {
  return (
    <div className="relative bg-black text-white">
        <div className='container mx-auto px-10 py-10'>
            <div className="min-h-[400p[px]">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 relative z-10">
                    {ServiceData.map((data, index) =>(
                    
                        <div
                        data-aos="fade-up"
                        data-aos-delay={data.aosDelay}
                         key={index} 
                        className="min-h-[180[px] flex flex-col gap-2 justify-center items-center bg-sky-900/60 rounded-xl backdrop-blur-sm text-center text-2xl py-8 px-3 w-full lg:w-[300[px] mx-auto">
                        {data.icon}
                           <h1 className="text-xl font-bold">{data.title}</h1>
                           <p>{data.content}</p>
                           <p className="text-sm">{data.description}</p>
                        </div>
                   
                    ))}

                </div>
                <img src={wave} alt="" className="h-[250px] w-full object-cover mix-blend-screen -translate-y-25 relative z-0" />
            </div>
        </div>
    </div>
  )
}

export default Services;