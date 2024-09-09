import React, { useState } from "react";
import { FaEdit } from "react-icons/fa"; // For the edit icon
import useAuth from "../../hooks/useAuth";

const UserProfile = () => {
  const { auth, setAuth } = useAuth();
  const firstLetter = auth?.username?.charAt(0);
  console.log(auth)

  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    contact: "123-456-7890",
    address: "123 Main St, Springfield",
    image: "https://via.placeholder.com/150", // Placeholder image for now
    orders: [
      {
        meal: "Pizza",
        orderDate: "2024-09-01",
        deliveryDate: "2024-09-02",
        price: "$10",
        status: "Delivered",
      },
      {
        meal: "Burger",
        orderDate: "2024-09-05",
        deliveryDate: "2024-09-06",
        price: "$8",
        status: "Pending",
      },
      // Add more orders here
    ],
  };

  const [activeSection, setActiveSection] = useState("orderHistory");

  // Render Edit Profile Form
  const renderEditProfile = () => (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-4">Edit Profile</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1">Username</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded"
            defaultValue={auth?.username}
          />
        </div>
        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 p-2 rounded"
            defaultValue={auth?.email}
          />
        </div>
        <div>
          <label className="block mb-1">Contact No.</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded"
            defaultValue={auth?.contact}
          />
        </div>
        <div>
          <label className="block mb-1">Address</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded"
            defaultValue={auth?.address}
          />
        </div>
        <button className="bg-blue-500 text-white p-2 rounded mt-2">
          Save Changes
        </button>
      </form>
    </div>
  );

  // Render Change Password Form
  const renderChangePassword = () => (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-4">Change Password</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-1">Old Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1">New Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <div>
          <label className="block mb-1">Confirm Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 p-2 rounded"
          />
        </div>
        <button className="bg-blue-500 text-white p-2 rounded mt-2">
          Update Password
        </button>
      </form>
    </div>
  );

  // Render Order History Table
  const renderOrderHistory = () => (
    <div className="mt-4">
      <h2 className="text-xl font-semibold mb-4">Order History</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2">Ordered Meal</th>
              <th className="px-4 py-2">Order Date</th>
              <th className="px-4 py-2">Delivery Date</th>
              <th className="px-4 py-2">Price</th>
              <th className="px-4 py-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {user.orders.map((order, index) => (
              <tr key={index} className="bg-white border-b hover:bg-gray-50">
                <td className="px-4 py-2">{order.meal}</td>
                <td className="px-4 py-2">{order.orderDate}</td>
                <td className="px-4 py-2">{order.deliveryDate}</td>
                <td className="px-4 py-2">{order.price}</td>
                <td className="px-4 py-2">
                  <span
                    className={`${
                      order.status === "Delivered"
                        ? "text-green-500"
                        : "text-yellow-500"
                    } font-semibold`}
                  >
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto p-4">
      {/* User Info Section */}
      <div className="flex flex-col items-center justify-center gap-4">
        {/* User Image with Edit Icon */}
        <div className="relative">
          {auth?.userImage ? (
            <img
              className="h-32 w-32 md:h-52 md:w-52 rounded-full object-cover overflow-hidden"
              src={auth?.userImage}
              alt={user.name}
            />
          ) : (
            <div className="flex items-center justify-center bg-gray-400 h-32 w-32 md:h-48 md:w-48 rounded-full text-white text-4xl font-semibold uppercase">
              {firstLetter}
            </div>
          )}

          <button className="absolute bottom-2 right-2 bg-gray-800 text-white p-2 rounded-full">
            <FaEdit />
          </button>
        </div>
        {/* User Name and Email */}
        <div className="text-center">
          <h1 className="text-2xl font-semibold">{auth?.username}</h1>
          <p className="text-gray-600">{auth?.email}</p>
        </div>
      </div>

      {/* Buttons Section */}
      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={() => setActiveSection("editProfile")}
          className={`${
            activeSection === "editProfile"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          } p-2 rounded`}
        >
          Edit Profile
        </button>
        <button
          onClick={() => setActiveSection("orderHistory")}
          className={`${
            activeSection === "orderHistory"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          } p-2 rounded`}
        >
          Order History
        </button>
        <button
          onClick={() => setActiveSection("changePassword")}
          className={`${
            activeSection === "changePassword"
              ? "bg-blue-500 text-white"
              : "bg-gray-200 text-gray-700"
          } p-2 rounded`}
        >
          Change Password
        </button>
      </div>

      {/* Conditional Rendering of Forms or Table */}
      <div>
        {activeSection === "editProfile" && renderEditProfile()}
        {activeSection === "orderHistory" && renderOrderHistory()}
        {activeSection === "changePassword" && renderChangePassword()}
      </div>
    </div>
  );
};

export default UserProfile;
