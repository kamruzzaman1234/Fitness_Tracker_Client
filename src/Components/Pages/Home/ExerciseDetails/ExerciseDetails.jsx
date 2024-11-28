import { RiContactsBookLine } from "react-icons/ri";
import { FaRegClock } from "react-icons/fa";
import { FaDeskpro } from "react-icons/fa6";
import { BsBuildingDash } from "react-icons/bs";
const ExerciseDetails = ()=>{
    return(
        <div className="">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div className="grid grid-cols-2 gap-10 py-20 text-white">
                        <div className="space-y-4">
                            <RiContactsBookLine className="text-4xl text-lime-400"></RiContactsBookLine>
                            <h2 className="text-[24px] font-semibold text-yellow-100">Long Term Contact</h2>
                            <p>Our popular month to month plan is offered as 
                            pay as you work-out with no longterm contract</p>
                        </div>
                        <div className="space-y-4">
                            <FaRegClock className="text-4xl text-lime-400"></FaRegClock>
                            <h2 className="text-[24px] font-semibold text-yellow-100">Excercise round the clock</h2>
                            <p>Take advantage from gym’s benefits 24 hours a day,
                             7 days a week in each plans available</p>
                        </div>
                        <div className="space-y-4">
                            <FaDeskpro className="text-4xl text-lime-400"></FaDeskpro>
                            <h2 className="text-[24px] font-semibold text-yellow-100">Best equipment</h2>
                            <p>Practice on the best equipment global brands that addresses
                             a wide range of people</p>
                        </div>
                        <div className="space-y-4">
                            <BsBuildingDash  className="text-4xl text-lime-400"></BsBuildingDash>
                            <h2 className="text-[24px] font-semibold text-yellow-100">Dedicated gym app</h2>
                            <p>App users can book space at your gym’s classes,
                             with personal trainers

</p>
                        </div>
                    </div>
                    <div className="h-full  py-20">
                        <img src="https://i.ibb.co.com/mNbpvj3/pexels-pavel-danilyuk-6339494.jpg" 
                        alt="" className="rounded-lg"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ExerciseDetails;