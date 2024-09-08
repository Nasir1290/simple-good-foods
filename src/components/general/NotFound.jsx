import React from "react";
import NotFoundBgImage from "../../assets/notfound-bg.png";
import {Link} from "react-router-dom"

const NotFound = () => {
  return (
    <div
      className="w-screen h-screen relative bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${NotFoundBgImage})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative flex flex-col justify-center items-center h-full">
        <h1 className="text-white font-bold text-3xl md:text-6xl">
          404 Not Found
        </h1>
        <div className=" text-gray-300 mt-4 text-medium">Visited Page Not Found ! Please Go To Home Page</div>

        <button className=" bg-indigo-500 px-4 py-2 rounded-md text-white font-semibold mt-4">
          <Link to="/">Home Page</Link>
        </button>
      </div>
    </div>
  );
};

export default NotFound;
