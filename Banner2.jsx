import React from "react";
import sateliteImg from "../../assets/satelite-2.jpg";
const Banner2 = () => {
  return (
    <div className="bg-black text-white pb-14 relative z-50">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 items-center">
                
                <div className="space-y-3 xl:pr-36 p-4 border-l-2 border-b-2 border-l-sky-800 border-b-sky-800">
                    <p data-aos="fade-up" className="text-orange-500 uppercase text-sm tracking-widest">Our Mission </p>
                    <h1 data-aos="fade-up" data-aos-delay="300"className="uppercase text-5xl">NAVIGATE</h1>
                    <p data-aos="fade-up" data-aos-delay="500" className="text-gray-300">
                        GPS is a powerful and dependable tool for businesses and organizations in many different industries. Surveyors, fleet drivers, scientists, pilots, boat captains, first responders and workers in mining and agriculture are just some of the people who use GPS on a daily basis for work. 

 
                    </p>
                    
                    <button data-aos="fade-up" data-aos-delay="600" className="primary-button">Learn More</button>
                </div>
                <div>
                    <img data-aos="zoom-in" src={sateliteImg} alt="" className="w-full max-w-sm mx-auto rounded-xl" />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Banner2;
