import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <>
      <header className="bg-[#A29875] w-full h-auto flex flex-col md:flex-row items-center justify-between p-4 md:p-6 lg:px-14">
        
       
        <div className="flex items-center justify-center md:justify-start w-full md:w-auto mb-4 md:mb-0">
          <Image
            src="/logo1.png"
            width={140}
            height={50}
            alt="logo"
            className="my-auto"
          />
        </div>

       
        <div className="flex w-full md:w-auto md:flex-grow items-center justify-center p-4">
          <div className="relative w-full max-w-[300px] md:max-w-[500px] lg:max-w-[600px]">
            <input
              type="text"
              placeholder="Search for Gold Jewelry, Diamond Jewelry, and more..."
              className="w-full px-4 py-2 pr-12 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Image
              width={20}
              height={20}
              src="/search.png"
              alt="Search icon"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
            />
          </div>
        </div>

      
        <div className="flex items-center justify-center md:justify-end w-full md:w-auto mt-4 md:mt-0">
          <Image
            src="/Frame 22.png"
            alt="frame"
            width={120}
            height={28}
            className=""
          />
        </div>
      </header>
    </>
  );
};

export default Header;
