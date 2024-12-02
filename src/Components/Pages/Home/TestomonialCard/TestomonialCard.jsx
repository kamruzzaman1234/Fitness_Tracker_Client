const TestomonialCard = ()=>{
    return(
        <div>
        <div className="flex items-center justify-center min-h-screen bg-gray-900">
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-96">
        <div className="flex flex-col items-center">
          {/* Profile Image */}
          <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
            <img
              src="https://i.ibb.co.com/ZKS4RMV/pexels-olly-846741.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quote Icon */}
          <div className="text-green-400 text-3xl mb-4">“</div>

          {/* Testimonial Text */}
          <p className="text-center italic text-gray-300">
            GymBase is not just a gym, we have an indoor swimming pool, sauna
            zone, two indoor team courts. Check what else we offer for our
            members.
          </p>

          {/* Author */}
          <p className="mt-4 font-semibold text-lg">LIAM HARPAUL</p>

          {/* Navigation */}
          <div className="flex items-center justify-center mt-6 space-x-4">
            <button className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
              &#8592;
            </button>
            <button className="p-2 bg-gray-700 rounded-full hover:bg-gray-600">
              &#8594;
            </button>
          </div>
        </div>
      </div>
    </div>
        </div>
    )
}
export default TestomonialCard;