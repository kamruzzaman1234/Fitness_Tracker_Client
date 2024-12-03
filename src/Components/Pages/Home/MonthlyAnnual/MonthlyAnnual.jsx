import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const MonthlyAnnual = ()=>{
    return(
        <div className="py-10 bg-slate-800">
            <div className="max-w-7xl mx-auto lg:mx-auto">
                <div className="flex flex-col lg:flex-row gap-10">
                    <div className="flex flex-col lg:flex-row gap-8">
                        <div className="w-[full] md: lg:w-[300px] h-[500px]
                        rounded-md my-8 py-[100px] px-10 bg-gray-700">
                            <div className="text-center">
                                 <h2 className="text-white text-[25px]">Day Pass</h2>
                                 <p className="text-lime-300">
                                 <h2>$ <strong className="text-[40px]">20</strong> </h2> <br /> <span>/pass</span> </p>
                            </div>
                            <div className="mt-6 space-y-2">
                                <div className="flex gap-3 items-center text-white text-[18px]">
                                    <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight>
                                    <h3>1 Day Pass</h3>
                                </div>
                                <div className="flex gap-3 items-center text-white text-[18px]">
                                    <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight>
                                    <h3>Free Gym Access</h3>
                                </div>
                                <div className="flex gap-3 items-center text-white text-[18px]">
                                    <FaRegArrowAltCircleRight></FaRegArrowAltCircleRight>
                                    <h3>24 Hour Access</h3>
                                </div>
                               
                            </div>
                            <div className="mt-10">
                                    <Link to="" className="px-8 py-2 bg-white
                                    rounded-md text-black">Get Started</Link>
                            </div>
                        </div>
                        <div className="w-[100%] lg:w-[300px] h-[550px] bg-white py-[40px] px-10">
                        <div className="text-center">
                                 <h2 className="text-white text-[25px]">Month to Month</h2>
                                 <p className="text-lime-300">
                                 <h2>$ <strong className="text-[40px]">20</strong> </h2> <br /> <span>/Month</span> </p>
                        </div>
                        <div className="mt-10 space-y-4">
                        <div className="flex gap-3 items-center  text-[18px]">
                             <FaRegArrowAltCircleRight className="text-lime-700"></FaRegArrowAltCircleRight>
                             <h3>$99 Joining Free</h3>
                        </div>
                        <div className="flex gap-3 items-center  text-[18px]">
                             <FaRegArrowAltCircleRight className="text-lime-700"></FaRegArrowAltCircleRight>
                             <h3>Non Contact</h3>
                        </div>
                        <div className="flex gap-3 items-center  text-[18px]">
                             <FaRegArrowAltCircleRight className="text-lime-700"></FaRegArrowAltCircleRight>
                             <h3>Free Gym Access</h3>
                        </div>
                        <div className="flex gap-3 items-center  text-[18px]">
                             <FaRegArrowAltCircleRight className="text-lime-700"></FaRegArrowAltCircleRight>
                             <h3>1 Group Class include</h3>
                        </div>
                        <div className="flex gap-3 items-center  text-[18px]">
                             <FaRegArrowAltCircleRight className="text-lime-700"></FaRegArrowAltCircleRight>
                             <h3>24 Hour Access</h3>
                        </div>
                       
                        </div>
                        <div className="mt-10">
                                    <Link to="" className="px-8 py-2 bg-lime-700
                                    rounded-md text-white">Get Started</Link>
                            </div>
                        </div>
                    </div>
                    <div className="mx-8">
                        <h2 className="text-white mb-10 text-[26px]">Our Member</h2>
                        <div className="text-white">
                            <h2 className="mb-10 text-[26px]">From Punch Pass to Monthly or Annual</h2>
                            <p className="mb-10">At Gym Base, we offer a wide range of membership with options to suit every 
                                budget. Everything from One Day Pass, Punch Pass to monthly or annual prepaid 
                                memberships. What’s more,
                             we won’t tie you in to a long term contract, giving you greater flexibility.</p>

                        </div>
                        <div>
                        <h2 className="text-[20px] text-white mb-10">Each Plan Include</h2>
                        <div className="space-y-3">
                        <div className="flex gap-3 items-center  text-[18px]">
                             <FaRegArrowAltCircleRight className="text-lime-400"></FaRegArrowAltCircleRight>
                             <h3 className="text-white">The best equipment global brands</h3>
                        </div>
                        <div className="flex gap-3 items-center  text-[18px]">
                             <FaRegArrowAltCircleRight className="text-lime-400"></FaRegArrowAltCircleRight>
                             <h3 className="text-white">The gym is open 24 hours a day, 7 days a week</h3>
                        </div>
                        <div className="flex gap-3 items-center  text-[18px]">
                             <FaRegArrowAltCircleRight className="text-lime-400"></FaRegArrowAltCircleRight>
                             <h3 className="text-white">Two safe payment methods</h3>
                        </div>
                        <div className="flex gap-3 items-center  text-[18px]">
                             <FaRegArrowAltCircleRight className="text-lime-400"></FaRegArrowAltCircleRight>
                             <h3 className="text-white">Group fitness classes in the price of the subscription</h3>
                        </div>
                        <div className="flex gap-3 items-center  text-[18px]">
                             <FaRegArrowAltCircleRight className="text-lime-400"></FaRegArrowAltCircleRight>
                             <h3 className="text-white">No long-term contract, period</h3>
                        </div>
                        </div>
                    </div>
                    </div>
                    
                </div>
            </div>
        </div> 

    )
}
export default MonthlyAnnual;