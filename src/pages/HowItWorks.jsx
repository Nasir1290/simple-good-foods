import React from "react";
import HowItWorkImage from "../assets/how-it-work.png";
import HealthAwarnessImage from "../assets/health-awareness.png";
import MoreProteinImage from "../assets/more-protein.png";
import UnEndingVarietyImage from "../assets/unending-variety.png";

const HowItWorks = () => {
  return (
    // parent div
    <div>
      <div className=" flex flex-col items-center md:items-center  md:flex-row gap-8 justify-center mx-4 md:mx-20 mt-12">
        {/* image */}
        <div className=" w-full md:w-1/2 mt-8">
          <img src={HowItWorkImage} alt="catering" />
        </div>
        {/* about */}
        <div className=" w-full md:w-1/2">
          <h1 className="text-3xl font-semibold text-center md:text-start mb-2">
            How It Work
          </h1>
          <p className=" text-small font-thin mb-3">
            scelerisque convallis. Sed faucibus dui. sit tincidunt eu placerat.
            eget Ut nisi cursus venenatis tortor. leo. faucibus dui diam est. Ut
            at sed tincidunt eget consectetur non, tincidunt In efficitur.
            laoreet non felis, faucibus Praesent id id diam elementum Donec ex
            venenatis id porta ex tincidunt dui. sodales. Sed tempor eget
            Vestibulum Quisque luctus dui lacus sed gravida facilisis adipiscing
            id sed Ut vitae odio gravida In venenatis felis, tempor faucibus
            amet, Nunc sapien vitae ex convallis. tortor. dolor nisi massa amet,
            urna tincidunt ac eget sed nulla, eu nec malesuada venenatis
            convallis. quam nisl. Donec In sed quis urna. ullamcorper elementum
            gravida enim. sit nisl. sollicitudin. hendrerit fringilla lacus dui.
            consectetur venenatis placerat. placerat lacus, at viverra{" "}
          </p>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center mt-12">
        <div className=" text-3xl font-bold">Why Simply Good Food </div>
        {/* benefit wrapper */}
        <div className=" mt-6 md:flex md:flex-row flex-col gap-9">
          <div className=" flex flex-col justify-center items-center mt-6 shadow-md w-[345px] p-2 border">
            <img
              src={HealthAwarnessImage}
              alt="health-awarness"
              className=" h-16 w-16 mb-6"
            />
            <h1 className=" text-2xl font-semibold text-gray-700 mb-2">
              Health awareness
            </h1>
            <p className="text-center text-small text-gray-400">
              Our portions are bigger. Meals designed to fill you up with the
              nutrients you need to perform at your best.
            </p>
          </div>

          <div className=" flex flex-col justify-center items-center mt-6 shadow-md w-[345px] p-2 border">
            <img
              src={MoreProteinImage}
              alt="more-protein"
              className=" h-16 w-16 mb-6"
            />
            <h1 className=" text-2xl font-semibold text-gray-700 mb-2">
              More Protein
            </h1>
            <p className="text-center text-small text-gray-400">
              Protein-rich meals to FUEL your workouts, improve recuperation,
              and increase outcomes.
            </p>
          </div>

          <div className=" flex flex-col justify-center items-center mt-6 shadow-md w-[345px] p-2 border">
            <img
              src={UnEndingVarietyImage}
              alt="unending-variety"
              className=" h-16 w-16 mb-6"
            />
            <h1 className=" text-2xl font-semibold text-gray-700 mb-2">
              Unending Variety
            </h1>
            <p className="text-center text-small text-gray-400">
              Select breakfasts, snacks, and bulk proteins/sides. You can change
              it up at any moment or stick with the same routine.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
