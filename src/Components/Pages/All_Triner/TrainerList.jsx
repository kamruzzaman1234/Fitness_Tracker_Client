import {
  FaUserTie,
  FaDumbbell,
  FaMapMarkerAlt,
  FaUsers,
  FaClipboardList,
} from "react-icons/fa";

const TrainerList = ({ trainer, fetchTrainerDetails }) => {
  const { _id, trainer: trainerInfo } = trainer;

  return (
    <div className="relative bg-gray-900 rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-transform transform hover:scale-105">
      {/* Header Section with Rounded Image */}
      <div className="flex flex-col items-center py-6 bg-gradient-to-b from-gray-800 to-gray-900 rounded-t-3xl">
        <img
          src={trainerInfo.image}
          alt={trainerInfo.name}
          className="w-32 h-32 object-cover rounded-full border-4 border-blue-500 shadow-md mb-4"
        />
        <h3 className="text-xl font-bold text-white">{trainerInfo.name}</h3>
      </div>

      {/* Trainer Details */}
      <div className="p-6 bg-gray-900 rounded-b-3xl text-gray-300">
        {/* Experience */}
        <div className="flex items-center mb-4">
          <FaUserTie className="text-blue-500 text-lg mr-3" />
          <p className="text-sm">
            <strong>Experience:</strong> {trainerInfo.experience}
          </p>
        </div>

        {/* Specializations */}
        <div className="mb-4">
          <h4 className="text-sm text-blue-400 font-semibold mb-2 flex items-center">
            <FaDumbbell className="mr-2" />
            Specializations:
          </h4>
          <ul className="list-disc list-inside space-y-1 text-sm">
            {trainerInfo.specialization.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Institute */}
        <div className="flex items-center mb-4">
          <FaMapMarkerAlt className="text-green-500 text-lg mr-3" />
          <p className="text-sm">
            <strong>Institute:</strong> {trainerInfo.institute}
          </p>
        </div>

        {/* Members */}
        <div className="flex items-center mb-4">
          <FaUsers className="text-yellow-500 text-lg mr-3" />
          <p className="text-sm">
            <strong>Members:</strong> {trainerInfo.members}
          </p>
        </div>

        {/* Facility */}
        <div>
          <h4 className="text-sm text-blue-400 font-semibold mb-2 flex items-center">
            <FaClipboardList className="mr-2" />
            Facility:
          </h4>
          <p className="text-sm">{trainerInfo.facility}</p>
        </div>

        {/* Button */}
        <button
          onClick={() => fetchTrainerDetails(_id)}
          className="mt-6 w-full py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-md hover:from-purple-600 hover:to-blue-700 transition-all duration-200"
        >
          View Full Details
        </button>
      </div>
    </div>
  );
};

export default TrainerList;
