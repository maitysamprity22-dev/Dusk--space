import React from "react";
import sateliteImg from "../../assets/satellite-1.jpg";
const Banner = () => {
  return (
    <div className="bg-black text-white pb-14 relative z-50">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 items-center">
                <div>
                    <img data-aos="zoom-in" src={sateliteImg} alt="" className="w-full max-w-sm mx-auto rounded-xl" />
                </div>
                <div className="space-y-3 xl:pr-36 p-4 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800">
                    <p data-aos="fade-up" className="text-orange-500 uppercase text-sm tracking-widest">Our Mission </p>
                    <h1 data-aos="fade-up" data-aos-delay="300"className="uppercase text-5xl">Rapidcast</h1>
                    <p  data-aos="fade-up" data-aos-delay="500" className="text-gray-300">
                        Basically, an astronomical satellite is a giant telescope in orbit. It is able to see well without interference from the Earth’s atmosphere, and its infrared imaging technology can function normally without being fooled by the planet’s surface temperature. The satellite type used for astronomy has a vision that is up to ten times better than the most powerful telescope on Earth.
                    </p>
                    <button data-aos="fade-up" data-aos-delay="600" className="primary-button">Learn More</button>
                </div>

            </div>
        </div>
    </div>
  );
};

export default Banner;
