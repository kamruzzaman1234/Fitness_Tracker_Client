import { FaAngleRight, FaMapLocation, FaPhone, FaVoicemail } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = ()=>{
    const hours = [
        { day: 'Monday', time: '09:00 pm - 10:00 pm' },
        { day: 'Tuesday', time: '08:00 am - 10:00 pm' },
        { day: 'Wednesday', time: '08:00 am - 10:00 pm' },
        { day: 'Thursday', time: '08:00 am - 10:00 pm' },
        { day: 'Friday', time: '08:00 am - 12:00 pm' },
      ];
    
    return(
        <div className="py-10 bg-slate-950">
            <div className="max-w-7xl mx-8 lg:mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <div>
                        <div className="text-white">
                            <h2 className="text-[26px] text-semibold mb-6">Gym Base</h2>
                            <p>The longest running gym in Chicago. Owned and operated by a
                                 personal trainer with over 25 years experience.</p>
                        </div>
                    <div className="mt-8 space-y-5">
                        <div className="flex gap-8 text-white">
                            <div>
                                <FaMapLocation className="text-2xl"></FaMapLocation>
                            </div>
                            <div>
                                <h3>2702 Memory Lane <br />
                                Chicago, IL 60605</h3>
                            </div>
                        </div>
                        <div className="flex gap-8 text-white">
                            <div>
                                <FaPhone className="text-2xl"></FaPhone>
                            </div>
                            <div>
                                <h3>(510) 210-5225 <br />
                                (510) 210-5226</h3>
                            </div>
                        </div>
                        <div className="flex gap-8 text-white">
                            <div>
                                <FaVoicemail className="text-2xl"></FaVoicemail>
                            </div>
                            <div>
                                <h3>kamruzzamancse22@gmail.com</h3>
                            </div>
                        </div>
                        <div>

                        </div>
                    </div>
                    </div>
                    <div>
                    <div>
    <div className="text-white">
        <h2 className="text-[26px] text-semibold mb-6">About US</h2>
    </div>
    <div className="grid grid-cols-2 gap-4 text-white">
        <div className="flex items-center gap-2">
            <FaArrowRight className="text-lime-300"></FaArrowRight>
            <Link to="/" className="text-white">Home</Link>
        </div>
        <div className="flex items-center gap-2">
            <FaArrowRight className="text-lime-300"></FaArrowRight>
            <Link to="/" className="text-white">About</Link>
        </div>
        <div className="flex items-center gap-2">
            <FaArrowRight className="text-lime-300"></FaArrowRight>
            <Link to="/" className="text-white">Classes</Link>
        </div>
        <div className="flex items-center gap-2">
            <FaArrowRight className="text-lime-300"></FaArrowRight>
            <Link to="/" className="text-white">Gallery</Link>
        </div>
        <div className="flex items-center gap-2">
            <FaArrowRight className="text-lime-300"></FaArrowRight>
            <Link to="/" className="text-white">Membership</Link>
        </div>
        <div className="flex items-center gap-2">
            <FaArrowRight className="text-lime-300"></FaArrowRight>
            <Link to="/" className="text-white">BRM Calc</Link>
        </div>
        <div className="flex items-center gap-2">
            <FaArrowRight className="text-lime-300"></FaArrowRight>
            <Link to="/" className="text-white">Blog</Link>
        </div>
        <div className="flex items-center gap-2">
            <FaArrowRight className="text-lime-300"></FaArrowRight>
            <Link to="/" className="text-white">Our Team</Link>
        </div>
        <div className="flex items-center gap-2">
            <FaArrowRight className="text-lime-300"></FaArrowRight>
            <Link to="/" className="text-white">Time Table</Link>
        </div>
        <div className="flex items-center gap-2">
            <FaArrowRight className="text-lime-300"></FaArrowRight>
            <Link to="/" className="text-white">Shop</Link>
        </div>
        <div className="flex items-center gap-2">
            <FaArrowRight className="text-lime-300"></FaArrowRight>
            <Link to="/" className="text-white">Contact</Link>
        </div>
        <div className="flex items-center gap-2">
            <FaArrowRight className="text-lime-300"></FaArrowRight>
            <Link to="/" className="text-white">BMI Calc</Link>
        </div>
    </div>
</div>

                    </div>
                <div>
                <div className="text-white">
                    <h2 className="text-[26px] text-semibold mb-6">Latest Project</h2>
                </div>
                <div className="space-y-4">
                   <div className="flex flex-col">
                   <Link to="" className="text-[17px] text-white">How to Build Discipline to Exercise </Link>
                   <span className="text-gray-500">26 Nov, 2019</span>
                   </div>
                   <div className="flex flex-col">
                   <Link to="" className="text-[17px] text-white">How to Get Organised for the Week Ahead </Link>
                   <span className="text-gray-400">26 Nov, 2019</span>
                   </div>
                   <div className="flex flex-col">
                   <Link to="" className="text-[17px] text-white">
                   Common Workout Mistakes to Avoid </Link>
                   <span className="text-gray-400">26 Nov, 2019</span>
                   </div>
                </div>
                 </div>
                 <div>
                 <div className="text-white">
                    <h2 className="text-[26px] text-semibold mb-6">Operating Time</h2>
                </div>
                <div>
                <ul className="space-y-2">
        {hours.map((hour, index) => (
          <li
            key={index}
            className="flex justify-between items-center text-white border-b-2 border-slate-400 px-4 py-2 rounded-lg"
          >
            <span>{hour.day}</span>
            <span>{hour.time}</span>
          </li>
        ))}
      </ul>
                </div>
                 </div>
                </div>
            </div>
        </div>
    )
}
export default Footer;