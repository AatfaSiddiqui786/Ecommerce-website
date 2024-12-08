import Image from "next/image";
import React from "react";

const Hero1 = () => {
  return (
    <>
      <section className="flex flex-col md:flex-col sm:flex-col lg:flex-row">
      <div className="w-full md:w-4/5 sm-center:w-[100%]   lg:w-[89%] xl:w-[90%] font-libreBodoni flex flex-col items-center justify-center h-screen px-4 md:px-8 lg:px-8 space-y-6 md:space-y-8 lg:space-y-10 ">
  <div className="text-3xl sm:text-4xl md:text-5xl sm-center:text-center lg-center:text-left  lap:text-47px font-bold text-center md:text-left leading-tight md:leading-snug ">
    IMPECCABLE <br className="hidden md:block" /> CRAFTSMANSHIP AND
    <br className="hidden lg:block" /> FINESSE
  </div>
  <div className="w-full sm:w-11/12 md:w-10/12 lg:w-9/12 xl:w-8/12 text-[#787054] font-medium text-sm sm:text-base md:text-lg lg:text-xl text-center md:text-left leading-relaxed lg:-ml-[100px]">
    An example of intricate workmanship and detail. Elegant necklaces and
    chains of various lengths are part of our desirable collection.
  </div>
  <button className="font-libreBodoni text-2xl bg-[#A29875] w-64 h-14 text-white rounded-lg p-2"> Explore Now </button>
</div>


<div className="relative w-full flex justify-center items-center">
  <div className="relative  max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg font-medium text-xl flex justify-center">
    <Image
      width={300}
      height={300}
      alt="picture"
      src="/logo.png"
      className="w-[349px] h-auto object-contain" 
    />
    
    
    <div
      className="absolute inset-0 bg-black opacity-10"
      style={{
        borderTopLeftRadius: '7rem',
        borderBottomRightRadius: '7rem',
      }}
    ></div>
    

    <div
      className="absolute inset-2 border border-white"
      style={{
        borderTopLeftRadius: '7rem',
        borderBottomRightRadius: '7rem', 
      }}
    ></div>
  </div>
</div>



      </section>
    </>
  );
};

export default Hero1;
