// import React from 'react';
import Logo from "../../../assets/Pngs/Logo.png"

const Header = () => {
  return (
    <div className="w-full h-[70px]  z-50 top-0  text-white absolute flex justify-between items-center">

      <div className="w-[50px]  ml-[30px] bg-white rounded-full">
          <img src={Logo} className="w-[100%]" alt="" />
      </div>

      <div className="flex items-center">
        <div className="mr-[20px] font-bold hover:text-gray-200 cursor-pointer ">Home</div>
        <div className="mr-[20px] font-bold hover:text-gray-200 cursor-pointer ">Donate</div>
        <div className="mr-[20px] font-bold hover:text-gray-200 cursor-pointer ">Contact</div>
        <div className=" font-bold hover:text-gray-200 cursor-pointer">About</div>
      </div>

      <div className="flex items-center">
        <button className="mr-[15px] text-blue-900 border-white hover:bg-blue-900 hover:text-white transition-all duration-300 ease-in-out w-[190px] h-[40px] flex justify-center items-center shadow-sm">Become a Member</button>
        <button className="mr-[30px] border-white text-white hover:bg-white hover:text-blue-900 hover:border-0 bg-transparent transition-all duration-300 ease-in-out w-[90px] h-[40px] flex justify-center items-center drop-shadow-sm">Signin</button>
      </div>

    </div>
  )
}

export default Header