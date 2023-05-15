// import React from 'react'
// import "./Hero.css"
// import BackgroundSlider from "react-background-slider";
import image1 from "../../assets/Jpegs/opti1.jpg";
import image2 from "../../assets/Jpegs/opti2.jpg";
import image3 from "../../assets/Jpegs/opti3.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const Hero = () => {
    
//   render() {
    const settings = {
        autoplay: true,
        autoplaySpeed: 3000,
      dots: true,
      infinite: true,
      speed: 700,
      slidesToShow: 1,
      slidesToScroll: 1,
    };


  return (
    <div className="w-full h-[120vh] overflow-hidden ">

        <div className="h-[118vh]">
        
        {/* <BackgroundSlider  
            images={[image1, image2, image3]}
            duration={10} transition={2}
         /> */}
         
         {/* <h2> Single Item</h2> */}
        <Slider {...settings}>

          <div className="relative w-full h-full ">
            <img src={image1} alt="" className="w-[100%] h-[114vh]"/>
            <div className="absolute top-0 left-0 bg-black opacity-[0.7] z-30 w-full h-full"></div>

            <div className="absolute z-40 text-white top-[35%] right-[8%]">

                <h3 className="text-white text-[65px] font-semibold leading-15">Building Hope, <br/>One Life At A Time.</h3>

                <h5 className="text-white text-[18px] font-semibold mb-[20px]">Life is too short, Give when you can</h5>

                <button className="bg-blue-900 text-white border-0 hover:bg-blue-900 hover:text-white transition-all duration-300 ease-in-out w-[250px] h-[45px] flex justify-center items-center shadow-sm font-bold">Let's Make A Difference</button>
            </div>

          </div>

          <div className="relative ">
            <img src={image2} alt=""  className="w-[100%] h-[114vh]"/>
            <div className="absolute top-0 left-0 bg-black opacity-[0.7] z-30 w-full h-full"></div>

            <div className="absolute z-40 text-white top-[35%] left-[8%]">

                <h3 className="text-white text-[65px] font-semibold leading-15">Building Hope. <br/>Uplifting Communities.</h3>

                <h5 className="text-white text-[18px] font-semibold mb-[20px]">Life is too short, Give when you can</h5>

                <button className="bg-blue-900 text-white border-0 hover:bg-blue-900 hover:text-white transition-all duration-300 ease-in-out w-[250px] h-[45px] flex justify-center items-center shadow-sm font-bold">Let's Make A Difference</button>
            </div>

          </div>

          <div className="relative ">
            <img src={image3} alt=""  className="w-[100%] h-[114vh]"/>
            <div className="absolute top-0 left-0 bg-black opacity-[0.7] z-30 w-full h-full"></div>

            <div className="absolute z-40 text-white top-[35%] right-[8%]">

                <h3 className="text-white text-[65px] font-semibold leading-15">Join Us In Making <br/>A Difference Today.</h3>

                <h5 className="text-white text-[18px] font-semibold mb-[20px]">Life is too short, give when you can</h5>

                <button className="bg-blue-900 text-white border-0 hover:bg-blue-900 hover:text-white transition-all duration-300 ease-in-out w-[250px] h-[45px] flex justify-center items-center shadow-sm font-bold">Let's Make A Difference</button>
            </div>

          </div>

        </Slider>

        </div>

    </div>
  )
}

export default Hero;