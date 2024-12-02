import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

const OurTeam = ()=>{
    return(
        <div className="py-20">
            <div className="max-w-7xl mx-auto">
            <div className="text-center text-white relative">
                    <h2 className="text-3xl font-semibold mb-7">Meet Our Team</h2>
                    <p className="text-gray-50">We are a team of experienced people, nutrition, sports and fitness passionate experts with talent <br />
                    and knowledge unsurpassed in the industry. Get to know us.</p>
                    <div className="absolute top-11 bg-lime-400 w-[70px] h-[5px] mx-auto left-[47.5%]"></div>
            </div>
            <div className="grid grid-cols-4 text-white mt-10">
                <div className="h-[400px] transition hover:bg-lime-400 cursor-pointer">
                    <img src="https://i.ibb.co.com/d4fbdv7/pexels-olly-868483.jpg"
                    className="h-[300px] object-cover" alt="" />
                    <div className="flex justify-between items-center my-5 px-4">
                        <div>
                            <h2 className="text-[20px] font-semibold">Amitee Loiselle</h2>
                            <p className="text-yellow-50">strength, speed, stamina</p>
                        </div>
                        <div>
                            <Link to="">
                                <FaArrowRightLong className="text-[20px]"></FaArrowRightLong>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="h-[400px] transition hover:bg-lime-400 cursor-pointer">
                    <img src="https://i.ibb.co.com/Zfp996R/pexels-olly-863926-1.jpg"
                    className="h-[300px] object-cover" alt="" />
                    <div className="flex justify-between items-center my-5 px-4">
                        <div>
                            <h2 className="text-[20px] font-semibold">Amitee Loiselle</h2>
                            <p className="text-yellow-50">strength, speed, stamina</p>
                        </div>
                        <div>
                            <Link to="">
                                <FaArrowRightLong className="text-[20px]"></FaArrowRightLong>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="h-[400px] transition hover:bg-lime-400 cursor-pointer">
                    <img src="https://i.ibb.co.com/wWNP60M/pexels-yankrukov-8436605.jpg"
                    className="h-[300px] object-cover" alt="" />
                    <div className="flex justify-between items-center my-5 px-4">
                        <div>
                            <h2 className="text-[20px] font-semibold">Amitee Loiselle</h2>
                            <p className="text-yellow-50">strength, speed, stamina</p>
                        </div>
                        <div>
                            <Link to="">
                                <FaArrowRightLong className="text-[20px]"></FaArrowRightLong>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="h-[400px] transition hover:bg-lime-400 cursor-pointer">
                    <img src="https://i.ibb.co.com/PzySSm1/pexels-olly-864990.jpg"
                    className="h-[300px] object-cover" alt="" />
                    <div className="flex justify-between items-center my-5 px-4">
                        <div>
                            <h2 className="text-[20px] font-semibold">Amitee Loiselle</h2>
                            <p className="text-yellow-50">strength, speed, stamina</p>
                        </div>
                        <div>
                            <Link to="">
                                <FaArrowRightLong className="text-[20px]"></FaArrowRightLong>
                            </Link>
                        </div>
                    </div>
                </div>
                
                
            </div>
            <div className="flex justify-center items-center mt-10">
                <Link className="px-7 py-3 border-2 hover:bg-lime-700 border-lime-600 text-white">SEE THE WHOLE TEAM</Link>
            </div>
        </div>
        </div> 

    )
}
export default OurTeam;