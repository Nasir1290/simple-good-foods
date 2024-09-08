import React from "react";
import FeedbackImage from "../../assets/feedback-image.png";

const FeedbackCard = () => {
  return (
    <div className=" bg-[#f7f7f7] border-medium rounded-md flex-col md:flex md:flex-row md:gap-4 px-3 py-2 justify-center m-1 md:m-0 items-center md:w-[600px]">
      <div className=" flex justify-center items-center">
        <img
          className=" h-32 md:h-52 w-32 md:w-52 rounded-full object-contain"
          src={FeedbackImage}
          alt="feed-back"
        />
      </div>
      <div className="">
        <h4 className=" text-xl font-semibold text-center md:text-left">
          Angelina
        </h4>
        <h4 className=" text-yellow-400 text-center md:text-left ">Student</h4>
        <p className="text-small text-gray-500 mt-3 text-center md:text-left">
          Thank you for all, you service was soo good and safe, i will suggest
          my friends about your fantastic services
        </p>
      </div>
    </div>
  );
};

export default FeedbackCard;
