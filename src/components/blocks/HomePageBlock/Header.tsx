// import React from 'react';
import Logo from "../../../assets/Pngs/Logo.png"

const Header = () => {
  return (
    <div className="w-full h-[80px] z-50 top-2  text-white absolute flex justify-center items-center ">

      <div className="w-[90%] h-[]  z-[100] flex justify-between items-center ">

      <div className="w-[50px] h-[50px] bg-white rounded-full ]">
          <img src={Logo} className="w-[100%]" alt="" />
      </div>

      <div className="flex items-center">
        <div className="mr-[20px] font-bold hover:text-gray-300 cursor-pointer hover:border-b-2 transition-all duration-300 ease-in-out ">Home</div>
        <div className="mr-[20px] font-bold hover:text-gray-300 cursor-pointer hover:border-b-2 transition-all duration-300 ease-in-out ">Donate</div>
        <div className="mr-[20px] font-bold hover:text-gray-300 cursor-pointer hover:border-b-2 transition-all duration-300 ease-in-out ">Gallery</div>
        <div className="mr-[20px] font-bold hover:text-gray-300 cursor-pointer hover:border-b-2 transition-all duration-300 ease-in-out">Members</div>
        <div className="mr-[20px] font-bold hover:text-gray-300 cursor-pointer hover:border-b-2 transition-all duration-300 ease-in-out">Impact Stories</div>
        <div className="mr-[20px] font-bold hover:text-gray-300 cursor-pointer hover:border-b-2 transition-all duration-300 ease-in-out">Contact</div>
        <div className="mr-[20px] font-bold hover:text-gray-300 cursor-pointer hover:border-b-2 transition-all duration-300 ease-in-out">About</div>
      </div>

      <div className="flex items-center">
        <button className="mr-[15px] text-blue-900 border-white hover:bg-blue-900 hover:text-white transition-all duration-300 ease-in-out w-[190px] h-[40px] flex justify-center items-center shadow-sm">Become a Member</button>
        <button className=" border-white text-white hover:bg-white hover:text-blue-900 hover:border-0 bg-transparent transition-all duration-300 ease-in-out w-[90px] h-[40px] flex justify-center items-center drop-shadow-sm">Signin</button>
      </div>

      </div>

    </div>
  )
}

export default Header