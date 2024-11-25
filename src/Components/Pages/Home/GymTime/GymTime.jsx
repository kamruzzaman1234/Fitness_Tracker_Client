import { MdManageAccounts } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaUserClock } from "react-icons/fa";
const GymTime = ()=>{
    return(
        <div className="-mt-[100px] z-20 relative ">
            <div className="max-w-7xl mx-auto">
                <div className="">
                    <div className="grid grid-cols-3">
                        <div className="bg-white px-6 py-4">
                             <div>
                             <h2 className="text-2xl font-semibold ">Upcoming Classes</h2>
                             <p className="italic text-[20px] font-bold">See What is Next</p>   
                             </div>
                            <div className="space-y-2 mt-6">
                            <div className="flex justify-between py-3 border-b-2 border-gray-100">
                                <h2>Active Adults</h2>
                                <p>07.00am - 09.00am</p>
                             </div>
                             <div className="flex justify-between py-3 border-b-2 border-gray-100">
                                <h2>Body Attack</h2>
                                <p>09.00am - 11.00am</p>
                             </div>
                             <div className="flex justify-between py-3 border-b-2 border-gray-100">
                                <h2>Active Adults</h2>
                                <p>11.00am - 01.00pm</p>
                             </div>
                            </div>
                       
                        </div>
                        <div className="bg-lime-500 px-6 py-3">
                        <div>
                             <h2 className="text-2xl font-semibold text-white">Upcoming Classes</h2>
                             <p className="italic text-[20px] font-bold">Experience healthier life</p>   
                        </div>
                        <div className="flex mt-6 gap-7 justify-center items-center">
                            <MdManageAccounts className="text-[100px] text-white "/>
                            <p className="text-white font-semibold">Ready to kick start your new healthy lifestyle? Contact us
                             for a 20% off your introductory training session.</p>
                        </div>
                        <div className="border-2 border-white hover:bg-white mt-3
                         text-white hover:text-black px-4 py-2 w-[60%]">
                            <Link className="">VIEW CLASS SCHEDULE</Link>
                        </div>
                        </div>
                        <div className="bg-lime-600 px-6 py-3">
                        <div>
                             <h2 className="text-2xl font-semibold text-white">Train Day and Night</h2>
                             <p className="italic text-[20px] font-semibold">Around-the-clock access</p>   
                        </div>
                        <div className="flex mt-6 gap-7 justify-center items-center">
                            <FaUserClock className="text-[100px] text-white "/>
                            <p className="text-white font-semibold">Our members wanted more flexible opening hours, 
                            so we offer them 24/7 access since the last year.</p>
                        </div>
                        <div className="border-2 border-white hover:bg-white mt-3
                         text-white hover:text-black px-4 py-2 w-[60%]">
                            <Link className="">FIND MY PROJECT PLAN</Link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default GymTime;