import { useState, useEffect } from "react";
import TrainerList from "./TrainerList";
import { useNavigate } from "react-router-dom";

const AllTrainer = () => {
  const [trainers, setTrainers] = useState([]); // List of trainers
  const [selectedTrainer, setSelectedTrainer] = useState(null); // For showing detailed info
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://localhost:6012/trainerInfo")
      .then((res) => res.json())
      .then((data) => {
        setTrainers(data);
        console.log("Your data is", data); // Confirming fetched data structure
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const fetchTrainerDetails = (id) => {
    navigate(`/detailsTrainer/${id}`); // Navigate to DetailsTrainer with the trainer's id
  };
  const bookingTrainers = (id)=>{
    navigate(`/bookingTrainer/${id}`)
  }

  return (
    <div className="pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-8">
        <div className="my-8 flex justify-center items-center flex-col">
        <h2 className="text-2xl font-bold mt-8">All Trainers</h2>
        <p>Its a Professional Trainer . Its experience is Very High</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainers.map((trainer) => (
            <TrainerList
              key={trainer._id}
              trainer={trainer}
              fetchTrainerDetails={fetchTrainerDetails}
              bookingTrainers={bookingTrainers}
            />
          ))}
        </div>
        {selectedTrainer && (
          <div className="mt-10 bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold mb-4">{selectedTrainer.name}</h3>
            <img
              src={selectedTrainer.image}
              alt={selectedTrainer.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <p><strong>Experience:</strong> {selectedTrainer.experience}</p>
            <p><strong>Institute:</strong> {selectedTrainer.institute}</p>
            <p><strong>Members:</strong> {selectedTrainer.members}</p>
            <p><strong>Specializations:</strong></p>
            <ul className="list-disc list-inside">
              {selectedTrainer.specialization.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="mt-4"><strong>Facility:</strong> {selectedTrainer.facility}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllTrainer;
