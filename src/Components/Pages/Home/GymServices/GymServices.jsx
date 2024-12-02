import { FaArrowAltCircleRight } from "react-icons/fa";
import { IoMdStopwatch } from "react-icons/io";
import { TiMessages } from "react-icons/ti";
import { FaPlayCircle } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { RiBodyScanFill } from "react-icons/ri";
import { FaFileContract } from "react-icons/fa6";
import { Link } from "react-router-dom";
const GymServices = () => {
    return (
      <div
        className="py-[100px] relative z-10"
        style={{
          backgroundImage:
            "url('https://i.ibb.co/NCfH6fc/pexels-willpicturethis-1954524.jpg')",
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="absolute inset-0 bg-black opacity-80 z-0"></div>
        <div className="max-w-7xl mx-auto">
          <div className="text-center text-white relative">
            <h2 className="text-3xl font-semibold mb-7">Not Only a Gym</h2>
            <p className="text-gray-50">
              Gym Base is not just a gym, we have an indoor swimming pool, sauna
              zone, two indoor team courts. <br />
              Check what else we offer for our members.
            </p>
            <div className="absolute top-11 bg-lime-400 w-[70px] h-[5px] mx-auto left-[47.5%]"></div>
          </div>
          <div className="mt-10 z-20 relative">
                <div className="grid grid-cols-4">
                    <div className="border-2 border-lime-200 transition hover:bg-lime-500 px-10 py-6">
                        <IoMdStopwatch className="text-[40px] text-white mb-10"></IoMdStopwatch>
                        <div className="text-white flex justify-between gap-8">
                            <p>Workout plans tailored to your needs</p>
                            <FaArrowAltCircleRight className="text-[28px]"></FaArrowAltCircleRight>
                        </div>
                    </div>
                    <div className="border-2 border-lime-200 transition hover:bg-lime-500 px-10 py-6">
                        <TiMessages className="text-[40px] text-white mb-10"></TiMessages>
                        <div className="text-white flex justify-between gap-8">
                            <p>Access to the client's panel</p>
                            <FaArrowAltCircleRight className="text-[28px]"></FaArrowAltCircleRight>
                        </div>
                    </div>
                    <div className="border-2 border-lime-200 transition hover:bg-lime-500 px-10 py-6">
                        <FaPlayCircle className="text-[40px] text-white mb-10"></FaPlayCircle>
                        <div className="text-white flex justify-between gap-8">
                            <p>Social media integration</p>
                            <FaArrowAltCircleRight className="text-[28px]"></FaArrowAltCircleRight>
                        </div>
                    </div>
                    <div className="border-2 border-lime-200 transition hover:bg-lime-500 px-10 py-6">
                        <TiSocialInstagram  className="text-[40px] text-white mb-10"></TiSocialInstagram>
                        <div className="text-white flex justify-between gap-8">
                            <p>Battle tournaments</p>
                            <FaArrowAltCircleRight className="text-[28px]"></FaArrowAltCircleRight>
                        </div>
                    </div>
                    <div className="border-2 border-lime-200 transition hover:bg-lime-500 px-10 py-6">
                        <RiBodyScanFill className="text-[40px] text-white mb-10"></RiBodyScanFill>
                        <div className="text-white flex justify-between gap-8">
                            <p>Battle tournaments</p>
                            <FaArrowAltCircleRight className="text-[28px]"></FaArrowAltCircleRight>
                        </div>
                    </div>
                    <div className="border-2 border-lime-200 transition hover:bg-lime-500 px-10 py-6">
                        <IoMdStopwatch className="text-[40px] text-white mb-10"></IoMdStopwatch>
                        <div className="text-white flex justify-between gap-8">
                            <p>Playing fields for team sports</p>
                            <FaArrowAltCircleRight className="text-[28px]"></FaArrowAltCircleRight>
                        </div>
                    </div>
                    <div className="border-2 border-lime-200 transition hover:bg-lime-500 px-10 py-6">
                        <FaFileContract className="text-[40px] text-white mb-10"></FaFileContract>
                        <div className="text-white flex justify-between gap-8">
                            <p>Diverse member plans</p>
                            <FaArrowAltCircleRight className="text-[28px]"></FaArrowAltCircleRight>
                        </div>
                    </div>
                    <div className="border-2 border-lime-200 transition hover:bg-lime-500 px-10 py-6">
                        <IoMdStopwatch className="text-[40px] text-white mb-10"></IoMdStopwatch>
                        <div className="text-white flex justify-between gap-8">
                            <p>Workout plans tailored to your needs</p>
                            <FaArrowAltCircleRight className="text-[28px]"></FaArrowAltCircleRight>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-10">
                    <Link to="/" className="px-6 py-3 border-2 border-gray-50 text-white">ABOUT US</Link>
                </div>
          </div>
        </div>
       
      </div>
    );
  };
  
  export default GymServices;
  