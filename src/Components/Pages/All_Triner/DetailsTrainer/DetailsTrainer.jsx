import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const DetailsTrainer = ({bookingTrainers}) => {
  const { id } = useParams(); // Get the trainer id from URL
  const [trainerData, setTrainerData] = useState(null);
  const [error, setError] = useState(null);
  const {user} = useAuth(); 


  useEffect(() => {
    // Fetch the trainer's details using the trainer id
    fetch(`http://localhost:6012/trainerInfo/${id}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch trainer details");
        }
        return res.json();
      })
      .then((data) => {
        setTrainerData(data);
      })
      .catch((err) => setError(err.message));
  }, [id]);

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  if (!trainerData) {
    return <div className="text-center text-white">Loading...</div>;
  }

  const {
    _id,
    trainer: {
      name,
      image,
      experience,
      specialization,
      institute,
      members,
      facility,
    },
    categories,
    gym_schedule,
  } = trainerData;
  const handleAddCart = (category) => {
    if(user && user.email){

    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'You need to log in to add items to the cart!',
      })

    }
    console.log("Category added to cart:", category, user.email);
    alert(`Added ${category.category_name} to cart`);
  };

  // Check if facility is an array or an object
  const isFacilityArray = Array.isArray(facility);

  return (
    <div className="pt-20 pb-10 max-w-7xl mx-auto text-white px-4">
      <div className="bg-gray-800 rounded-lg shadow-xl p-8 space-y-8">
        {/* Trainer Header */}
        <div className="flex items-center mb-10">
          <img
            src={image}
            alt={name}
            className="w-40 h-40 object-cover rounded-full border-4 border-blue-500 shadow-md"
          />
          <div className="ml-6">
            <h2 className="text-4xl font-bold text-blue-400">{name}</h2>
            <p className="text-lg text-gray-300">Experience: {experience}</p>
            <p className="text-sm text-gray-400">Institute: {institute}</p>
            <p className="text-sm text-gray-400">Members: {members} active members</p>
            {/* <div className="mt-4">
              <h4 className="text-lg font-semibold text-yellow-400">Facilities:</h4>
              {isFacilityArray && facility.length > 0 ? (
                <ul className="list-disc ml-6 space-y-1 text-gray-400">
                  {facility.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              ) : !isFacilityArray && facility && Object.keys(facility).length > 0 ? (
                <ul className="list-disc ml-6 space-y-1 text-gray-400">
                  {Object.entries(facility).map(([key, value], index) => (
                    <li key={index}>{`${key}: ${value}`}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-400">No facilities available.</p>
              )}
            </div> */}
          </div>
        </div>

        {/* Categories Section */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-green-400">Categories</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg shadow-md hover:bg-gray-600">
                <div className="flex justify-between my-3">
                <h4 className="text-xl font-bold text-blue-500">{category.category_name}</h4>
                <button onClick={()=> handleAddCart(category)} className="px-4 py-1
                 bg-yellow-400 rounded-full">Add Cart</button>
                </div>
                <p className="text-sm text-gray-300">{category.details}</p>
                <p className="text-lg text-gray-200 mt-2">Price: ${category.price}</p>
                <div className="mt-4">
                  <h5 className="font-semibold text-yellow-400">Time Schedule:</h5>
                  <p className="text-sm text-gray-400">Morning: {category.time_schedule.morning}</p>
                  <p className="text-sm text-gray-400">Evening: {category.time_schedule.evening}</p>
                </div>
                {/* Video Classes */}
                <div className="mt-4">
                  <h5 className="font-semibold text-red-400">Video Classes:</h5>
                  {category.video_classes && category.video_classes.length > 0 ? (
                    category.video_classes.map((video, idx) => (
                      <div key={idx} className="mt-2 text-sm text-gray-300">
                        <a
                          href={video.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-400 hover:underline"
                        >
                          {video.title}
                        </a>
                        <p className="text-gray-400">{video.description}</p>
                        <p className="text-gray-400">Duration: {video.duration}</p>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-400">No video classes available.</p>
                  )}
                </div>
                <div className="mt-5">
  <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300">
    <Link to={`/booking/${_id}`} className="flex items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-5 h-5 mr-2"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 9V5.25a2.25 2.25 0 10-4.5 0V9m-3 0a6 6 0 0112 0v6a6 6 0 11-12 0V9zm3 7.5h6"
        />
      </svg>
      Booking Class
    </Link>
    
  </button>

</div>


              </div>
            ))}
          </div>
        </div>

        {/* Gym Schedule Section */}
        <div>
          <h3 className="text-2xl font-semibold text-purple-400">Gym Schedule</h3>
          <div className="bg-gray-700 p-6 rounded-lg mt-6">
            <h4 className="text-lg text-gray-200">Age Group: Kids</h4>
            <p className="text-sm text-gray-400">
              Morning: {gym_schedule.age_group.kids.morning}, Afternoon: {gym_schedule.age_group.kids.afternoon}
            </p>
            <h4 className="text-lg text-gray-200 mt-4">Age Group: Adults</h4>
            <p className="text-sm text-gray-400">
              Morning: {gym_schedule.age_group.adults.morning}, Evening: {gym_schedule.age_group.adults.evening}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsTrainer;
