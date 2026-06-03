import React from "react";
import MountainPng from "../../assets/moon.img.png";
const Hero = () => {
  return (
 <div className="bg-black/20 h-full text-whit relative z-50">
    <div className="h-screen flex justify-center items-center px-25">
      <div className="container grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-6 lg:pr-20">
          <h1 data-aos="fade-up" className="text-5xl font-bold uppercase">Orbite The Earth</h1>
          <p data-aos="fade-up" data-aos-delay="300">
            DUSK-SPACE takes you on a cinematic journey through the cosmos, where every orbit reveals glowing cities, endless darkness, and the beauty of our planet from above. Experience the thrill of space exploration with immersive visuals, futuristic storytelling, and a universe waiting to be discovered. Your next adventure doesn’t begin on Earth — it begins among the stars.
          </p>
          <button data-aos="fade-up" data-aos-delay="500"
          className="bg-blue-400 text-white hover:bg-blue-500 px-6 py-2 rounded-md duration-200"
          >Learn More</button>
        </div>
        <div></div>
      </div>
    </div>
   {/* Moon surface image - anchored to bottom */}
      <img
        src={MountainPng}
        alt=""
        className="absolute bottom-0 left-0 w-full brightness-50 z-[-10]"
      />

      {/* Gradient fade at bottom so it blends into next section */}
      <div className="absolute bottom-0 w-full z-30 bg-gradient-to-b from-transparent to-black h-24 sm:h-[50[px] md:[60px]" />
    </div>
  );
};

export default Hero;