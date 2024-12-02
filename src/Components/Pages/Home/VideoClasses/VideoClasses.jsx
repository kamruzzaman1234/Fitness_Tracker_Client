import React, { useRef, useState } from "react";
import videoSrc from "../../../../assets/video/v2.mp4";
import posterImg from "../../../../assets/images/poster.jpg";
import { CiPause1, CiPlay1 } from "react-icons/ci";
import { Link } from "react-router-dom";
import ProgressBars from "./ProgressBar";

const VideoClasses = () => {
  const videoRef = useRef(null);
  const [isPlay, setIsPlay] = useState(false);
  const [activeButton, setActiveButton] = useState(null);

  const buttons = ["BODY ATTACK", "BODY PUMP", "BODY BALANCE"];

  const togglePlayPause = () => {
    if (isPlay) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlay(!isPlay);
  };

  return (
    <div className="py-10 bg-slate-700">
      <div className="grid grid-cols-2">
        {/* Video Section */}
        <div className="relative flex justify-center items-center">
          <video
            ref={videoRef}
            className="shadow-lg border-2 border-white rounded-lg w-full"
            onClick={togglePlayPause}
            poster={posterImg} // Add a poster image
          >
            <source src={videoSrc} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Play/Pause Button */}
          <button
            onClick={togglePlayPause}
            className="absolute flex items-center justify-center w-12 h-12 bg-red-500 text-white rounded-full hover:bg-green-600"
          >
            {isPlay ? <CiPause1 size={24} /> : <CiPlay1 size={24} />}
          </button>
        </div>
        {/* Second Column */}
        <div className="mx-20">
          <h2 className="text-[26px] text-white font-bold mb-10">
            Explore Our Top Fat Burning Classes
          </h2>
          <div>
            <div className="space-x-3">
              {buttons.map((label, index) => (
                <Link
                  key={index}
                  to="#"
                  onClick={() => setActiveButton(index)}
                  className={`px-4 py-2 font-bold text-white border-2 rounded 
                ${
                  activeButton === index
                    ? "bg-green-400 border-green-400"
                    : "bg-black border-green-400"
                }`}
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className="mt-8 text-white text-[16px]">
              <p>
                Body Attack is a high-energy fitness class with moves that cater
                for total beginners to total addicts. We combine athletic
                movements like running, lunging, and jumping with strength
                exercises.
              </p>
            </div>
            <div>
              <ProgressBars></ProgressBars>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoClasses;
