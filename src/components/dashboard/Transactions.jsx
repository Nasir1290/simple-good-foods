// Transactions.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Transactions() {
  const transactionsData = [
    {
      id: 1,
      user: "John Doe",
      orders: 5,
      orderDate: "2023-09-01",
      deliveryDate: "2023-09-05",
      price: "$50",
      status: "Completed",
      img: "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      user: "Jane Smith",
      orders: 3,
      orderDate: "2023-09-03",
      deliveryDate: "2023-09-07",
      price: "$30",
      status: "Pending",
      img: "https://images.unsplash.com/photo-1640951613773-54706e06851d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      user: "Alice Johnson",
      orders: 2,
      orderDate: "2023-09-05",
      deliveryDate: "2023-09-09",
      price: "$20",
      status: "Shipped",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      user: "Bob Brown",
      orders: 4,
      orderDate: "2023-09-07",
      deliveryDate: "2023-09-11",
      price: "$40",
      status: "Completed",
      img: "https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 5,
      user: "Sara Lee",
      orders: 6,
      orderDate: "2023-09-10",
      deliveryDate: "2023-09-15",
      price: "$60",
      status: "Pending",
      img: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 1,
      user: "John Doe",
      orders: 5,
      orderDate: "2023-09-01",
      deliveryDate: "2023-09-05",
      price: "$50",
      status: "Completed",
      img: "https://plus.unsplash.com/premium_photo-1669882305273-674eff6567af?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      user: "Jane Smith",
      orders: 3,
      orderDate: "2023-09-03",
      deliveryDate: "2023-09-07",
      price: "$30",
      status: "Pending",
      img: "https://images.unsplash.com/photo-1640951613773-54706e06851d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJ8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      user: "Alice Johnson",
      orders: 2,
      orderDate: "2023-09-05",
      deliveryDate: "2023-09-09",
      price: "$20",
      status: "Shipped",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      user: "Bob Brown",
      orders: 4,
      orderDate: "2023-09-07",
      deliveryDate: "2023-09-11",
      price: "$40",
      status: "Completed",
      img: "https://plus.unsplash.com/premium_photo-1664541336896-b3d5f7dec9a3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 5,
      user: "Sara Lee",
      orders: 6,
      orderDate: "2023-09-10",
      deliveryDate: "2023-09-15",
      price: "$60",
      status: "Pending",
      img: "https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D",
    },
    
  ];


    useEffect(() => {
      AOS.init({ duration: 2000 }); // Initialize AOS
    }, []);
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Transactions</h2>
        <input
          type="text"
          placeholder="Search date and menu"
          className="border p-2 rounded w-1/3"
        />
      </div>
      <table
        data-aos="fade-out"
        className="w-full border-collapse text-small md:font-bold text-center"
      >
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-1 md:p-2">ID</th>
            <th className="border p-1 md:p-2">Orders</th>
            <th className="border p-1 md:p-2">Order Date</th>
            <th className="border p-1 md:p-2">Delivery Date</th>
            <th className="border p-1 md:p-2">User</th>
            <th className="border p-1 md:p-2">Price</th>
            <th className="border p-1 md:p-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {transactionsData.map((transaction) => (
            <tr key={transaction.id} className="border-t">
              <td className="border p-1 md:p-2">{transaction.id}</td>
              <td className="border p-1 md:p-2 md:text-start md:flex md:flex-row flex flex-col justify-center md:justify-start items-center md:items-start text-center">
                <img
                  src={transaction.img}
                  alt="user"
                  className="inline-block mr-2 h-8 w-8 object-cover rounded-full"
                />
                <p className=" text-center md:text-start">{transaction.user}</p>
              </td>
              <td className="border p-1 md:p-2">{transaction.orders}</td>
              <td className="border p-1 md:p-2">{transaction.orderDate}</td>
              <td className="border p-1 md:p-2">{transaction.deliveryDate}</td>
              <td className="border p-1 md:p-2">{transaction.price}</td>
              <td
                // className={`border p-1 md:p-2 text-${
                //   transaction.status === "Completed"
                //     ? "bg-green-500"
                //     : transaction.status === "Pending"
                //     ? "bg-red-500"
                //     : transaction.status === "Shipped"
                //     ? "bg-yellow-500"
                //     : ""
                // }`}
                className={`border p-1 md:p-2 ${
                  transaction.status === "Completed"
                    ? "bg-green-100 text-green-600"
                    : transaction.status === "Pending"
                    ? "bg-red-100 text-red-600"
                    : transaction.status === "Shipped"
                    ? "bg-yellow-100 text-yellow-600"
                    : ""
                }`}
              >
                {transaction.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Transactions;
