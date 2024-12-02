import React, { useState } from 'react';

const ProgressBar = () => {
  const [height, setHeight] = useState(173); // Default Height
  const [weight, setWeight] = useState(70);  // Default Weight

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(1);
  };

  const maxProperWeight = (height / 100) ** 2 * 25;

  return (
    <div className="flex flex-col items-center bg-gray-800 text-white p-8 rounded-md space-y-8 w-full">
      <div className="flex justify-between w-full">
        <div>
          <label className="block mb-2">Your Height (cm)</label>
          <input
            type="range"
            min="100"
            max="250"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-center mt-2">{height} cm</div>
        </div>

        <div>
          <label className="block mb-2">Your Weight (kg)</label>
          <input
            type="range"
            min="30"
            max="200"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-center mt-2">{weight} kg</div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full">
        <div className="bg-gray-700 p-4 rounded-md text-center">
          <p className="text-lg">Your Maximum Proper Weight</p>
          <p className="text-2xl font-bold">{maxProperWeight.toFixed(1)} kg</p>
        </div>
        <div className="bg-gray-700 p-4 rounded-md text-center">
          <p className="text-lg">Body Mass Index (BMI)</p>
          <p className="text-2xl font-bold">{calculateBMI()}</p>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
