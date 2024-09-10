// import React, { useState } from "react";
// import Transactions from "./Transactions";
// import ManageMenu from "./ManageMenu";
// import ManageTestimonials from "./ManageTestimonials";
// import TransactionImage from "../../assets/transaction.png";
// import ManageMenuImage from "../../assets/manage-menu.png";
// import ManageTestimonialImage from "../../assets/manate-testimonial.png";
// import { BiMessageSquareDetail } from "react-icons/bi";

// function Dashboard() {
//   const [activeMenu, setActiveMenu] = useState("transactions");

//   const renderContent = () => {
//     switch (activeMenu) {
//       case "transactions":
//         return <Transactions />;
//       case "manage-menu":
//         return <ManageMenu />;
//       case "manage-testimonials":
//         return <ManageTestimonials />;
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="flex flex-col lg:flex-row h-screen">
//       {/* Left-side menu */}
//       <div className="md:bg-white md:text-black text-white bg-slate-500 lg:w-[26%] font-bold w-full lg:border-r border-gray-300 py-1 md:p-1 px-3 flex lg:flex-col justify-around lg:justify-start fixed lg:static bottom-0 lg:bottom-auto">
//         {/* Transactions */}
//         <div
//           className={`cursor-pointer text-center lg:text-left ${
//             activeMenu === "transactions"
//               ? "bg-blue-500 text-white lg:bg-green-200"
//               : "md:text-black"
//           } lg:text-base text-sm py-2 md:px-1 px-3 lg:py-0 bg-blue-100 text-[#79c41e] lg:bg-transparent lg:hover:bg-green-200 rounded lg:rounded-none`}
//           onClick={() => setActiveMenu("transactions")}
//         >
//           <img
//             className="hidden md:inline-flex mr-2 h-5 w-5"
//             src={TransactionImage}
//             alt=""
//           />
//           Transactions
//         </div>

//         {/* Manage Menu */}
//         <div
//           className={`cursor-pointer text-center lg:text-left ${
//             activeMenu === "manage-menu"
//               ? "bg-blue-500 text-white lg:bg-green-200"
//               : "md:text-black"
//           } lg:text-base text-sm py-2 md:p-1 px-3 lg:py-0 bg-blue-100 text-[#79c41e] lg:bg-transparent lg:hover:bg-green-200 rounded lg:rounded-none`}
//           onClick={() => setActiveMenu("manage-menu")}
//         >
//           <img
//             className="hidden md:inline-flex mr-2 h-5 w-5"
//             src={ManageMenuImage}
//             alt=""
//           />
//           Manage Menu
//         </div>

//         {/* Manage Testimonials */}
//         <div
//           className={`cursor-pointer text-center lg:text-left ${
//             activeMenu === "manage-testimonials"
//               ? "bg-blue-500 text-white lg:bg-green-200"
//               : "md:text-black"
//           } lg:text-base text-sm py-2 md:p-1 px-3 lg:py-0 bg-blue-100 text-[#79c41e] lg:bg-transparent lg:hover:bg-green-200 rounded lg:rounded-none`}
//           onClick={() => setActiveMenu("manage-testimonials")}
//         >
//           <BiMessageSquareDetail className="hidden md:inline-flex mr-2 h-5 w-5 text-[#515050]" />
//           Manage Testimonials
//         </div>
//       </div>

//       {/* Right-side content */}
//       <div className="md:w-full ml-auto overflow-auto md:p-4 p-2">
//         {renderContent()}
//       </div>
//     </div>
//   );
// }

// export default Dashboard;




import React, { useState } from "react";
import Transactions from "./Transactions";
import ManageMenu from "./ManageMenu";
import ManageTestimonials from "./ManageTestimonials";
import TransactionImage from "../../assets/transaction.png";
import ManageMenuImage from "../../assets/manage-menu.png";
import ManageTestimonialImage from "../../assets/manate-testimonial.png";
import { BiMessageSquareDetail } from "react-icons/bi";

function Dashboard() {
  const [activeMenu, setActiveMenu] = useState("transactions");

  const renderContent = () => {
    switch (activeMenu) {
      case "transactions":
        return <Transactions />;
      case "manage-menu":
        return <ManageMenu />;
      case "manage-testimonials":
        return <ManageTestimonials />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen">
      {/* Left-side menu */}
      <div className="md:bg-white md:text-black text-white bg-slate-500 lg:w-[26%] font-bold w-full lg:border-r border-gray-300 py-1 md:p-1 px-3 flex lg:flex-col justify-around lg:justify-start fixed lg:static bottom-0 lg:bottom-auto">
        {/* Transactions */}
        <div
          className={`cursor-pointer md:mb-2 text-center lg:text-left ${
            activeMenu === "transactions"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          } lg:text-base text-sm py-2 md:px-1 px-3 lg:py-0 rounded lg:rounded-none transition-colors`}
          onClick={() => setActiveMenu("transactions")}
        >
          <img
            className="hidden md:inline-flex mr-2 h-5 w-5"
            src={TransactionImage}
            alt=""
          />
          Transactions
        </div>

        {/* Manage Menu */}
        <div
          className={`cursor-pointer text-center md:mb-2 lg:text-left ${
            activeMenu === "manage-menu"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          } lg:text-base text-sm py-2 md:p-1 px-3 lg:py-0 rounded lg:rounded-none transition-colors`}
          onClick={() => setActiveMenu("manage-menu")}
        >
          <img
            className="hidden md:inline-flex mr-2 h-5 w-5"
            src={ManageMenuImage}
            alt=""
          />
          Manage Menu
        </div>

        {/* Manage Testimonials */}
        <div
          className={`cursor-pointer text-center md:mb-2 lg:text-left ${
            activeMenu === "manage-testimonials"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          } lg:text-base text-sm py-2 md:p-1 px-3 lg:py-0 rounded lg:rounded-none transition-colors`}
          onClick={() => setActiveMenu("manage-testimonials")}
        >
          <BiMessageSquareDetail className="hidden md:inline-flex mr-2 h-5 w-5 text-[#515050]" />
          Manage Testimonials
        </div>
      </div>

      {/* Right-side content */}
      <div className="md:w-full ml-auto overflow-auto md:p-4 p-2">
        {renderContent()}
      </div>
    </div>
  );
}

export default Dashboard;
