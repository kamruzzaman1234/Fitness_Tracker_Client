import { MdCardMembership } from "react-icons/md";
import { GiTennisRacket } from "react-icons/gi";
import { IoLocation } from "react-icons/io5";
const ExtraArea = ()=>{
    return(
        <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 gap-4 lg:gap-0 md:grid-cols-2 lg:grid-cols-3">
                <div className="flex gap-6 bg-white px-6 py-6 items-center">
                        <div>
                            <MdCardMembership className="text-[36px] text-lime-400"></MdCardMembership>
                        </div>
                        <div>
                            <h3 className="text-[23px] font-semibold">Membership Cards</h3>
                            <span>Discount for all members</span>
                        </div>
                </div>
                <div className="flex gap-6 bg-lime-600 px-6 py-4 items-center">
                        <div>
                            <GiTennisRacket className="text-[36px] text-white"></GiTennisRacket>
                        </div>
                        <div className="text-white">
                            <h3 className="text-[23px] font-semibold">Rackets Sports</h3>
                            <span>Over 40 fitness classes</span>
                        </div>
                </div>
                <div className="flex gap-6 bg-lime-800 px-6 py-4 items-center">
                        <div>
                            <IoLocation className="text-[36px] text-white"></IoLocation>
                        </div>
                        <div className="text-white">
                            <h3 className="text-[23px] font-semibold">Find a Club</h3>
                            <span>Add Your Preferred Location</span>
                        </div>
                </div>
            </div>
        </div> 

    )
}
export default ExtraArea;