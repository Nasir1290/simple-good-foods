// import React from "react";

// const Faq = () => {
//   return (
//     <div className="lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
//       <h1 className="text-center dark:text-white lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">
//         Popular Frequently Asked Questions
//       </h1>
//       <div className="lg:mt-12 bg-gray-100 dark:bg-gray-800 md:mt-10 mt-8 lg:py-7 lg:px-6 md:p-6 py-6 px-4 lg:w-8/12 w-full mx-auto">
//         <div className="flex justify-between md:flex-row flex-col">
//           <div className="md:mb-0 mb-8 md:text-left text-center">
//             <p className="font-normal dark:text-gray-300 text-sm leading-5 text-gray-600 mx-auto">
//               Simply Good Food prepares and delivers organically sourced, fresh
//               meals to your door nationwide. Unlike other meal kit delivery
//               services that need preparation and cleaning, our meals are
//               delivered ready to consume. Our mission is to make healthy eating
//               easy and enjoyable while not sacrificing flavor. Do you have a
//               question regarding our shipping service?
//             </p>
//           </div>
//         </div>
//       </div>

//       <div className="lg:w-8/12 w-full mx-auto">
//         {/* Question 1 */}
//         <hr className="w-full lg:mt-10 md:mt-12 md:mb-8 my-8" />
//         <div className="w-full md:px-6">
//           <div
//             id="mainHeading"
//             className="flex justify-between items-center w-full"
//           >
//             <div className="">
//               <p className="flex justify-center items-center dark:text-white font-medium text-base leading-6 md:leading-4 text-gray-800">
//                 <span className="lg:mr-6 mr-4 dark:text-white lg:text-2xl md:text-lg text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
//                   Q1.
//                 </span>{" "}
//                 What are the foods like Steel Yat? How does the mail plan work?
//               </p>
//             </div>
//             <button
//               aria-label="toggler"
//               className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
//               data-menu=""
//             >
//               <img
//                 className="transform dark:hidden "
//                 src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
//                 alt="toggler"
//               />
//               <img
//                 className="transform dark:block hidden "
//                 src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg"
//                 alt="toggler"
//               />
//             </button>
//           </div>
//           <div id="menu" className="hidden mt-6 w-full">
//             <p className="text-base leading-6 text-gray-600 dark:text-gray-300 font-normal">
//               Remember you can query the status of your orders any time in My
//               orders in the My account section. if you are not resigered at
//               Mango.com, you can access dierectly in the Orders section. In this
//               cause, you will have enter your e-mail address and order number.
//             </p>
//           </div>
//         </div>

//         {/* Question 2 */}
//         <hr className="w-full lg:mt-10 my-8" />
//         <div className="w-full md:px-6">
//           <div
//             id="mainHeading"
//             className="flex justify-between items-center w-full"
//           >
//             <div className="">
//               <p className="flex justify-center items-center dark:text-white font-medium text-base leading-6 lg:leading-4 text-gray-800">
//                 <span className="lg:mr-6 dark:text-white mr-4 lg:text-2xl md:text-lg text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
//                   Q2.
//                 </span>{" "}
//                 How Do I Eat Fresh and Lean?
//               </p>
//             </div>
//             <button
//               aria-label="toggler"
//               className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
//               data-menu=""
//             >
//               <img
//                 className="transform dark:hidden "
//                 src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
//                 alt="toggler"
//               />
//               <img
//                 className="transform dark:block hidden "
//                 src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg"
//                 alt="toggler"
//               />
//             </button>
//           </div>
//           <div id="menu" className="hidden mt-6 w-full">
//             <p className="text-base leading-6 text-gray-600 dark:text-gray-300 font-normal">
//               Remember you can query the status of your orders any time in My
//               orders in the My account section. if you are not resigered at
//               Mango.com, you can access dierectly in the Orders section. In this
//               cause, you will have enter your e-mail address and order number.
//             </p>
//           </div>
//         </div>

//         {/* Question 3 */}
//         <hr className="w-full lg:mt-10 my-8" />
//         <div className="w-full md:px-6">
//           <div
//             id="mainHeading"
//             className="flex justify-between items-center w-full"
//           >
//             <div className="">
//               <p className="flex justify-center items-center dark:text-white font-medium text-base leading-6 lg:leading-4 text-gray-800">
//                 <span className="lg:mr-6 dark:text-white mr-4 lg:text-2xl md:text-lg text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
//                   Q3.
//                 </span>
//                 How long do my meals last?
//               </p>
//             </div>
//             <button
//               aria-label="toggler"
//               className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
//               data-menu=""
//             >
//               <img
//                 className="transform dark:hidden "
//                 src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
//                 alt="toggler"
//               />
//               <img
//                 className="transform dark:block hidden "
//                 src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg"
//                 alt="toggler"
//               />
//             </button>
//           </div>
//           <div id="menu" className="hidden mt-6 w-full">
//             <p className="text-base leading-6 text-gray-600 dark:text-gray-300 font-normal">
//               Remember you can query the status of your orders any time in My
//               orders in the My account section. if you are not resigered at
//               Mango.com, you can access dierectly in the Orders section. In this
//               cause, you will have enter your e-mail address and order number.
//             </p>
//           </div>
//         </div>

//         {/* Question 4 */}
//         <hr className="w-full lg:mt-10 my-8" />
//         <div className="w-full md:px-6">
//           <div
//             id="mainHeading"
//             className="flex justify-between items-center w-full"
//           >
//             <div className="">
//               <p className="flex justify-center items-center dark:text-white font-medium text-base leading-6 lg:leading-4 text-gray-800">
//                 <span className="lg:mr-6 dark:text-white mr-4 lg:text-2xl md:text-lg text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
//                   Q4.
//                 </span>
//                 What if I don&apos;t eat them all at once?
//               </p>
//             </div>
//             <button
//               aria-label="toggler"
//               className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
//               data-menu=""
//             >
//               <img
//                 className="transform dark:hidden "
//                 src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
//                 alt="toggler"
//               />
//               <img
//                 className="transform dark:block hidden "
//                 src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg"
//                 alt="toggler"
//               />
//             </button>
//           </div>
//           <div id="menu" className="hidden mt-6 w-full">
//             <p className="text-base leading-6 text-gray-600 dark:text-gray-300 font-normal">
//               Remember you can query the status of your orders any time in My
//               orders in the My account section. if you are not resigered at
//               Mango.com, you can access dierectly in the Orders section. In this
//               cause, you will have enter your e-mail address and order number.
//             </p>
//           </div>
//         </div>

//         {/* Question 5 */}
//         <hr className="w-full lg:mt-10 my-8" />
//         <div className="w-full md:px-6">
//           <div
//             id="mainHeading"
//             className="flex justify-between items-center w-full"
//           >
//             <div className="">
//               <p className="flex justify-center items-center dark:text-white font-medium text-base leading-6 lg:leading-4 text-gray-800">
//                 <span className="lg:mr-6 dark:text-white mr-4 lg:text-2xl md:text-lg text-lg leading-6 md:leading-5 lg:leading-4 font-semibold text-gray-800">
//                   Q5.
//                 </span>
//                 What&apos;s in the food? Is it organic? Is it gluten free?
//               </p>
//             </div>
//             <button
//               aria-label="toggler"
//               className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
//               data-menu=""
//             >
//               <img
//                 className="transform dark:hidden "
//                 src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
//                 alt="toggler"
//               />
//               <img
//                 className="transform dark:block hidden "
//                 src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg"
//                 alt="toggler"
//               />
//             </button>
//           </div>
//           <div id="menu" className="hidden mt-6 w-full">
//             <p className="text-base leading-6 text-gray-600 dark:text-gray-300 font-normal">
//               Remember you can query the status of your orders any time in My
//               orders in the My account section. if you are not resigered at
//               Mango.com, you can access dierectly in the Orders section. In this
//               cause, you will have enter your e-mail address and order number.
//             </p>
//           </div>
//         </div>
//         <hr className="w-full lg:mt-10 my-8" />
//       </div>
//     </div>
//   );
// };

// export default Faq;





import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const Faq = () => {
  const [openFaq, setOpenFaq] = useState(null);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 600, // Animation duration
      easing: "ease-in-out", // Animation easing
    });
  }, []);

  const toggleFaq = (index) => {
    if (openFaq === index) {
      setOpenFaq(null); // Close if already open
    } else {
      setOpenFaq(index); // Open the clicked FAQ
    }
  };

  const faqData = [
    {
      question:
        "What are the foods like Steel Yat? How does the meal plan work?",
      answer:
        "Remember you can query the status of your orders any time in My orders in the My account section. If you're not registered, you can access directly in the Orders section by entering your e-mail address and order number.",
    },
    {
      question: "How Do I Eat Fresh and Lean?",
      answer:
        "You can query the status of your orders any time in My orders section. If you're not registered, enter your e-mail and order number directly.",
    },
    {
      question: "How long do my meals last?",
      answer:
        "You can check the shelf life of your meals under My orders. For better freshness, we recommend consuming them within a few days of delivery.",
    },
    {
      question: "What if I don't eat them all at once?",
      answer:
        "Meals can be stored for a few days, but it’s best to consume them fresh for the optimal taste and nutrition.",
    },
    {
      question: "What's in the food? Is it organic? Is it gluten free?",
      answer:
        "Our meals are prepared with organic ingredients and are gluten-free. You can check the ingredients list for detailed information.",
    },
  ];

  return (
    <div className="lg:container lg:mx-auto lg:py-16 md:py-12 md:px-6 py-12 px-4">
      <h1 className="text-center dark:text-white lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 font-semibold">
        Popular Frequently Asked Questions
      </h1>
      <div className="lg:w-8/12 w-full mx-auto">
        {faqData.map((faq, index) => (
          <div key={index} className="mt-8">
            <div
              className="flex justify-between items-center w-full cursor-pointer"
              onClick={() => toggleFaq(index)}
              data-aos="fade-up" // AOS animation trigger
            >
              <p className="flex items-center dark:text-white font-medium text-base lg:text-lg text-gray-800">
                <span className="lg:mr-6 mr-4 dark:text-white lg:text-2xl text-lg font-semibold">
                  Q{index + 1}.
                </span>
                {faq.question}
              </p>
              <button
                aria-label="toggler"
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
              >
                {openFaq === index ? (
                  <img
                    className="transform dark:hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                    alt="collapse"
                  />
                ) : (
                  // <img
                  //   className="transform dark:hidden"
                  //   src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2dark.svg"
                  //   alt="expand"
                  // />
                  <img
                    className="transform dark:hidden"
                    src="https://tuk-cdn.s3.amazonaws.com/can-uploader/faq-8-svg2.svg"
                    alt="collapse"
                  />
                )}
              </button>
            </div>
            {openFaq === index && (
              <div
                className="mt-4"
                data-aos="fade-in" // Fade-in effect for answers
              >
                <p className="text-base leading-6 text-gray-600 dark:text-gray-300 font-normal">
                  {faq.answer}
                </p>
              </div>
            )}
            <hr className="w-full lg:mt-10 my-8" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
