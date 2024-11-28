import React from "react";

const ProgressBar = ({ label, percentage, color }) => {
  return (
    <div className="flex flex-col items-center w-1/3 px-4">
      <div className="text-center mb-2 font-bold">{label}</div>
      <div className="relative w-full bg-gray-200 h-36 rounded-md">
        <div
          className={`absolute bottom-0 w-full ${color} rounded-md`}
          style={{ height: `${percentage}%` }}
        ></div>
      </div>
      <div className="text-center mt-2 font-bold">{percentage}%</div>
    </div>
  );
};

const ProgressBars = () => {
  const data = [
    { label: "Strength", percentage: 75, color: "bg-green-500" },
    { label: "Cardio", percentage: 30, color: "bg-gray-500" },
    { label: "Fat Burning", percentage: 70, color: "bg-green-500" },
  ];

  return (
    <div className="flex justify-center mt-10 items-center space-x-4 bg-gray-100 px-8 py-4 rounded-lg">
      {data.map((item, index) => (
        <ProgressBar
          key={index}
          label={item.label}
          percentage={item.percentage}
          color={item.color}
        />
      ))}
    </div>
  );
};

export default ProgressBars;
