import React from "react";
import rating from "/rating.svg";
import Pricing from "./pricing";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Gym Owner",
      quote:
        "This system transformed how we manage our gym. Member satisfaction increased by 40%!",
      rating,
    },
    {
      name: "Emma Davis",
      role: "Fitness Member",
      quote:
        "The workout plans are so easy to follow and super motivating. I've never been more consistent!",
      rating,
    },
    {
      name: "Mike Chen",
      role: "Personal Trainer",
      quote:
        "It helps me manage all my clients and track their progress in one place. Total game-changer.",
      rating,
    },
  ];

  return (
    <div className="w-full min-h-screen px-4 py-16 bg-[#111818] flex flex-col items-center justify-center">
      <div className="text-center max-w-2xl mx-auto mt-10">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-[#39FF14] to-cyan-400 text-transparent bg-clip-text">
          What People Say
        </h1>
        <p className="mt-4 text-gray-300 text-sm sm:text-base md:text-xl">
          Trusted by gym owners, trainers, and fitness enthusiasts worldwide
        </p>
      </div>

      <div className="mt-12 flex flex-wrap gap-6 justify-center">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#0d1414] rounded-xl p-6 shadow-md hover:scale-105 transition-transform duration-300 w-full sm:w-[300px] md:w-[350px] lg:w-[400px]"
          >
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <img
                  key={i}
                  src={testimonial.rating}
                  alt="Rating"
                  className="w-5 mr-1"
                />
              ))}
            </div>
            <p className="italic text-sm text-gray-200">"{testimonial.quote}"</p>
            <div className="flex items-center gap-4 mt-6">
              <div className="w-12 h-12 rounded-full bg-white" />
              <div>
                <h3 className="font-semibold text-white">{testimonial.name}</h3>
                <span className="text-sm text-gray-400">{testimonial.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Pricing/>
    </div>
  );
};

export default Testimonials;
