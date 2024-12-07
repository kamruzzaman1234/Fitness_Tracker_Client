import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";

const BookingPage = () => {
  const { id } = useParams();
  const [trainerData, setTrainerData] = useState(null);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    userName: "",
    userEmail: "",
    timeSchedule: "",
    category: "",
    price: "",
  });

  useEffect(() => {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => {
      let updatedData = { ...prevData, [name]: value };

      if (name === "category") {
        const selectedCategory = trainerData?.categories?.find(
          (cat) => cat.category_name === value
        );
        updatedData.price = selectedCategory ? selectedCategory.price : "";
      }

      return updatedData;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { userName, userEmail, timeSchedule, category, price } = formData;

    // Prepare the data object, including trainer details and image
    const allData = {
      trainerName: trainerData?.trainer?.name || "",
      trainerImage: trainerData?.trainer?.image || "", // Add trainer's image
      userName,
      userEmail,
      timeSchedule,
      category,
      price,
    };

    // Reset the form
    e.target.reset();

    // Send data to the database
    fetch("http://localhost:6012/bookingTrainer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(allData),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Failed to submit data");
        }
      })
      .then((data) => {
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: "Your booking has been submitted successfully.",
          confirmButtonText: "OK",
        });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error!",
          text: "There was an issue submitting your booking. Please try again.",
          confirmButtonText: "OK",
        });
      });
  };

  if (error) {
    return <div className="text-red-500 text-center">{error}</div>;
  }

  const name = trainerData?.trainer?.name || "Loading...";
  const image = trainerData?.trainer?.image || "";
  const categories = trainerData?.categories || [];

  return (
    <div className="pt-20 pb-10 bg-slate-500 border-2 border-slate-300">
      <div className="pb-10 max-w-7xl mx-auto px-4 bg-slate-800" style={{backgroundImage:`url('')`,
         backgroundSize:'cover', backgroundRepeat:'no-repeat', backgroundAttachment:'fixed'}}>
      <div className=" shadow-lg rounded-lg  p-10 space-y-8">
        <h2 className="text-4xl font-extrabold mb-0 text-center text-white tracking-wide">
          Book Your Trainer
        </h2>
        <p className="text-center text-white">Chose Your Best Trainer and Booking</p>

        {image && (
          <div className="text-center">
            <img
              src={image}
              alt={name}
              className="w-40 h-40 mx-auto rounded-full border-4 border-white shadow-lg"
            />
          </div>
        )}

        <div className="flex gap-8 items-center  shadow-lg">
          <div className="w-[60%] px-4 py-4">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-3">
            <div>
            <label
              htmlFor="trainerName"
              className="block text-lg font-medium text-white"
            >
              Trainer Name
            </label>
            <input
              type="text"
              id="trainerName"
              name="trainerName"
              value={name}
              disabled
              className="w-full mt-2 p-3 bg-gray-800 text-white rounded-lg border border-gray-700 shadow-md focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
          </div>

          {/* Form fields for user inputs */}
          <div>
            <label
              htmlFor="userName"
              className="block text-lg font-medium text-white"
            >
              Your Name
            </label>
            <input
              type="text"
              id="userName"
              name="userName"
              onChange={handleChange}
              placeholder="Enter your name"
              required
              className="w-full mt-2 p-3 bg-gray-800 text-white rounded-lg border border-gray-700 shadow-md focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="userEmail"
              className="block text-lg font-medium text-white"
            >
              Your Email
            </label>
            <input
              type="email"
              id="userEmail"
              name="userEmail"
              onChange={handleChange}
              placeholder="Enter your email"
              required
              className="w-full mt-2 p-3 bg-gray-800 text-white rounded-lg border border-gray-700 shadow-md focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="timeSchedule"
              className="block text-lg font-medium text-white"
            >
              Time Schedule
            </label>
            <input
              type="text"
              id="timeSchedule"
              name="timeSchedule"
              onChange={handleChange}
              placeholder="e.g., 10:00 AM - 11:00 AM"
              required
              className="w-full mt-2 p-3 bg-gray-800 text-white rounded-lg border border-gray-700 shadow-md focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-lg font-medium text-white"
            >
              Category
            </label>
            <select
              id="category"
              name="category"
              onChange={handleChange}
              required
              className="w-full mt-2 p-3 bg-gray-800 text-white rounded-lg border border-gray-700 shadow-md focus:ring-2 focus:ring-purple-400 focus:outline-none"
            >
              <option value="" disabled>
                Select a category
              </option>
              {categories.length > 0
                ? categories.map((category, index) => (
                    <option key={index} value={category.category_name}>
                      {category.category_name}
                    </option>
                  ))
                : <option disabled>No categories available</option>}
            </select>
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-lg font-medium text-white"
            >
              Price (Auto-filled)
            </label>
            <input
              type="text"
              id="price"
              name="price"
              value={formData.price}
              disabled
              className="w-full mt-2 p-3 bg-gray-800 text-white rounded-lg border border-gray-700 shadow-md focus:ring-2 focus:ring-purple-400 focus:outline-none"
            />
          </div>
            </div>

          <button
            type="submit"
            className="w-full p-4 bg-purple-600 hover:bg-purple-700 transition rounded-lg text-white font-bold shadow-lg"
          >
            Book Now
          </button>
        </form>
          </div>
          <div className="w-[40%]">
              <img src="https://i.ibb.co.com/fXzJLtg/pexels-anush-1229356-removebg-preview.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    </div> 

   
  );
};

export default BookingPage;
