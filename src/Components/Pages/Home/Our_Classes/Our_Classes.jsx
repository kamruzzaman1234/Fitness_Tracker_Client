import ClassSlider from "./ClassSlider/ClassSlider";

const Our_Classes = ()=>{
    return(
        <div className="py-20 bg-slate-900">
            <div className="max-w-7xl mx-8 lg:mx-auto">
                <div className="text-center text-white relative">
                    <h2 className="text-3xl font-semibold mb-7">Our Class</h2>
                    <p>Whether you want to loose weight, tone up, gain muscle or improve strength,
                     we provide a wide <br />
                    range of classes to help you achieve your goals in a friendly and airy environment.</p>
                    <div className="absolute top-11 bg-lime-400 w-[60px] lg:w-[70px] h-[5px] mx-auto left-[40%] lg:left-[47%]"></div>
                </div>
                <ClassSlider></ClassSlider>
            </div>
        </div>
    )
}
export default Our_Classes;