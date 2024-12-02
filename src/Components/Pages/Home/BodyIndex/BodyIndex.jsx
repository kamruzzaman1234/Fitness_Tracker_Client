import { DiVim } from "react-icons/di"
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import ProgressBar from "./ProgressBar";

const BodyIndex = ()=>{
    return(
        <div className="py-10">
            <div className="max-w-7xl mx-auto">
                <div className="flex gap-8">
                    <div className="w-[30%]">
                        <div>
                            <h2 className="text-[26px] text-white mb-10">Body Mass index</h2>
                            <p className="text-white">Body Mass Index (BMI) is a measure of body
                             fat based on height and weight that applies to adult men and women.</p>
                        </div>
                        <div className="mt-8 space-y-1">
                        <div className="flex gap-3 items-center  text-[18px]">
                             <FaRegArrowAltCircleRight className="text-lime-700"></FaRegArrowAltCircleRight>
                             <h3 className="text-white">18-25 – Normal Weight</h3>
                        </div>
                        <div className="flex gap-3 items-center  text-[18px]">
                             <FaRegArrowAltCircleRight className="text-lime-700"></FaRegArrowAltCircleRight>
                             <h3 className="text-white">25-30 – Overweight</h3>
                        </div>
                        <div className="flex gap-3 items-center  text-[18px]">
                             <FaRegArrowAltCircleRight className="text-lime-700"></FaRegArrowAltCircleRight>
                             <h3 className="text-white">30-40 – Obesity</h3>
                        </div>
                        <div className="flex gap-3 items-center  text-[18px]">
                             <FaRegArrowAltCircleRight className="text-lime-700"></FaRegArrowAltCircleRight>
                             <h3 className="text-white">Above 40 – Morbid Obesity</h3>
                        </div>
                        </div>
                    </div>
                    <div className="w-[70%]">
                        <div className="grid grid-cols-1">
                            <ProgressBar></ProgressBar>
                        </div>
                    </div>
                </div>
            </div>
        </div> 


    )
}
export default BodyIndex;