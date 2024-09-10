// ManageTestimonials.js
import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteSweep } from "react-icons/md";

function ManageTestimonials() {
  const testimonialsData = [
    {
      id: "1",
      user: "John Doe",
      feedback: "Great service!",
      date: "2024-09-01",
      img: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "2",
      user: "Jane Smith",
      feedback: "Amazing experience!",
      date: "2024-09-05",
      img: "https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "3",
      user: "Michael Johnson",
      feedback: "Loved the food!",
      date: "2024-09-07",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "4",
      user: "Emily Davis",
      feedback: "Highly recommended!",
      date: "2024-09-10",
      img: "https://images.unsplash.com/photo-1640951613773-54706e06851d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: "5",
      user: "Chris Wilson",
      feedback: "Great customer service!",
      date: "2024-09-12",
      img: "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: "1",
      user: "John Doe",
      feedback: "Great service!",
      date: "2024-09-01",
      img: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "2",
      user: "Jane Smith",
      feedback: "Amazing experience!",
      date: "2024-09-05",
      img: "https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "3",
      user: "Michael Johnson",
      feedback: "Loved the food!",
      date: "2024-09-07",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: "4",
      user: "Emily Davis",
      feedback: "Highly recommended!",
      date: "2024-09-10",
      img: "https://images.unsplash.com/photo-1640951613773-54706e06851d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: "5",
      user: "Chris Wilson",
      feedback: "Great customer service!",
      date: "2024-09-12",
      img: "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Testimonials</h2>
        <input
          type="text"
          placeholder="Search data and menu"
          className="border p-2 rounded w-1/3"
        />
      </div>
      <table className="w-full border-collapse table-auto text-small md:font-bold text-center">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">User</th>
            <th className="border p-2">Feedback</th>
            <th className="border p-2">Date</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {testimonialsData.map((testimonial) => (
            <tr key={testimonial.id} className="border-t">
              <td className="border p-2">{testimonial.id}</td>
              <td className="border p-1 md:p-2 md:text-start md:flex md:flex-row flex flex-col justify-center md:justify-start items-center md:items-start text-center">
                <img
                  src={testimonial.img}
                  alt="user"
                  className="inline-block mr-2 h-8 w-8 rounded-full object-cover"
                />
                <p className=" text-center md:text-start">{testimonial.user}</p>
              </td>
              <td className="border p-2">{testimonial.feedback}</td>
              <td className="border p-2">{testimonial.date}</td>
              <td className="border p-2 ">
                <button className="text-blue-500 bg-gray-300 ml-2 px-3 py-1 text-center rounded-md">
                  <FaRegEdit />
                </button>
                <button className="text-red-500 ml-2 bg-gray-300 px-3 py-1 text-center rounded-md">
                  <MdDeleteSweep />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManageTestimonials;
