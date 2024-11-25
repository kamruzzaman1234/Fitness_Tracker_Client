import React from "react";

const AboutBody = () => {
  return (
    <div className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://i.ibb.co.com/vD0VyNY/pexels-olly-868483.jpg"
            alt="Gym 1"
            className="rounded-md shadow-lg"
          />
          <img
            src="https://i.ibb.co.com/jGnppZ6/pexels-olly-863926.jpg"
            alt="Gym 2"
            className="rounded-md shadow-lg"
          />
          <img
            src="https://i.ibb.co.com/Tk0YynN/pexels-olly-864990.jpg"
            alt="Gym 3"
            className="rounded-md shadow-lg"
          />
          <img
            src="https://i.ibb.co.com/mNbpvj3/pexels-pavel-danilyuk-6339494.jpg"
            alt="Gym 4"
            className="rounded-md shadow-lg"
          />
        </div>
        {/* Text Section */}
        <div className="flex flex-col ">
          <h2 className="text-4xl font-bold mb-4">About Us</h2>
          <h4 className="mb-4 font-normal text-[14px]">
            From the moment you walk through the door you know Gymbase is a
            unique place. We created Gymbase to provide members with the most
            effective tools for success. This meant offering classes for
            children and adults and providing a welcoming atmosphere for all.
          </h4>
          <p className="font-normal text-[14px]">When we created Gym Base, we knew we wanted to be more than just a simple gym. 
            Having worked in traditional gyms in the past, we knew we needed to create a
             concept that would provide our members with the most effective tools for success.
              This meant we needed to offer a wide range of classes both for children and adults.

        This also meant we needed to provide a learning environment run by
        experienced and successful coaches. However, our most important goal
         was to create a welcoming atmosphere and community in which everyone feels a 
         sense of belonging.</p>
          <div className="grid grid-cols-3 gap-4  mt-6">
            <div>
              <h3 className="text-sm font-semibold">Environment</h3>
              <p className="text-lg">Clean and Airy</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Classes</h3>
              <p className="text-lg">Every Level</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Prices</h3>
              <p className="text-lg">Affordable</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutBody ;
