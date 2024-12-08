import Image from "next/image";
import React from "react";
import Imagee from "../../../public/image.jpg";

function Hero() {
  return (
    <div className="h-screen flex flex-col lg:flex-row items-center lg:items-start px-4 lg:px-20 mt-16 md:mt-32">
      
      {/* Left Section (Text & Button) */}
      <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left">
        <div className="font-bold text-3xl sm:text-4xl lg:text-5xl mt-10 lg:mt-20">
          <h1>IMPECCABLE</h1>
          <h1>CRAFTSMANSHIP AND</h1>
          <h1>FINESSE</h1>
        </div>
        
        <p className="mt-4 text-sm sm:text-base lg:text-lg font-semibold text-[#A29875] w-full lg:w-[550px]">
          An example of intricate workmanship and detail, elegant necklaces and long and short chains form a part of our desirable collection.
        </p>
        
        <button className="mt-8 lg:mt-10 text-white bg-[#A29875] w-[200px] sm:w-[250px] lg:w-[288px] h-[50px] rounded-lg hover:bg-[#b8aa75]">
          Explore Now
        </button>
      </div>

      {/* Right Section (Image) */}
      <div className="w-full sm:w-[380px] md:w-[400px] lg:w-[462px] h-auto mt-10 lg:mt-0 lg:ml-16 flex justify-center">
        <Image
          src={Imagee}
          alt="Craftsmanship Image"
          width={462}
          height={525.43}
          className="rounded-lg object-cover"
        />
      </div>

    </div>
  );
}

export default Hero;
