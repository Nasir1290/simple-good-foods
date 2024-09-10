

// ManageMenu.js
import React from 'react';
import { MdDeleteSweep } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";


function ManageMenu() {

  const menuData = [
    {
      id: 1,
      image: "/food.jpg",
      menuName: "Pasta",
      ourMenu: "Breakfast",
      mealPlan: "Medium Meal",
      img: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2R8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      image: "/food.jpg",
      menuName: "Salad",
      ourMenu: "Snacks",
      mealPlan: "Small Paleo Meal",
      img: "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      image: "/food.jpg",
      menuName: "Pizza",
      ourMenu: "Lunch",
      mealPlan: "Large Meal",
      img: "https://images.unsplash.com/photo-1432457990754-c8b5f21448de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      image: "/food.jpg",
      menuName: "Burger",
      ourMenu: "Dinner",
      mealPlan: "Small Meal",
      img: "https://images.unsplash.com/photo-1481931715705-36f5f79f1f3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 5,
      image: "/food.jpg",
      menuName: "Soup",
      ourMenu: "Snacks",
      mealPlan: "Medium Meal",
      img: "https://plus.unsplash.com/premium_photo-1670601440146-3b33dfcd7e17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 1,
      image: "/food.jpg",
      menuName: "Pasta",
      ourMenu: "Breakfast",
      mealPlan: "Medium Meal",
      img: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2R8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      image: "/food.jpg",
      menuName: "Salad",
      ourMenu: "Snacks",
      mealPlan: "Small Paleo Meal",
      img: "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      image: "/food.jpg",
      menuName: "Pizza",
      ourMenu: "Lunch",
      mealPlan: "Large Meal",
      img: "https://images.unsplash.com/photo-1432457990754-c8b5f21448de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      image: "/food.jpg",
      menuName: "Burger",
      ourMenu: "Dinner",
      mealPlan: "Small Meal",
      img: "https://images.unsplash.com/photo-1481931715705-36f5f79f1f3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 5,
      image: "/food.jpg",
      menuName: "Soup",
      ourMenu: "Snacks",
      mealPlan: "Medium Meal",
      img: "https://plus.unsplash.com/premium_photo-1670601440146-3b33dfcd7e17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 1,
      image: "/food.jpg",
      menuName: "Pasta",
      ourMenu: "Breakfast",
      mealPlan: "Medium Meal",
      img: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGZvb2R8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 2,
      image: "/food.jpg",
      menuName: "Salad",
      ourMenu: "Snacks",
      mealPlan: "Small Paleo Meal",
      img: "https://plus.unsplash.com/premium_photo-1675252369719-dd52bc69c3df?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZvb2R8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 3,
      image: "/food.jpg",
      menuName: "Pizza",
      ourMenu: "Lunch",
      mealPlan: "Large Meal",
      img: "https://images.unsplash.com/photo-1432457990754-c8b5f21448de?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      id: 4,
      image: "/food.jpg",
      menuName: "Burger",
      ourMenu: "Dinner",
      mealPlan: "Small Meal",
      img: "https://images.unsplash.com/photo-1481931715705-36f5f79f1f3d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2R8ZW58MHx8MHx8fDA%3D",
    },
    {
      id: 5,
      image: "/food.jpg",
      menuName: "Soup",
      ourMenu: "Snacks",
      mealPlan: "Medium Meal",
      img: "https://plus.unsplash.com/premium_photo-1670601440146-3b33dfcd7e17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Add Menu</h2>
        <input
          type="text"
          placeholder="Search date and menu"
          className="border p-2 rounded w-1/4"
        />
        <select className="border p-2 rounded ml-2">
          <option>Our Menu</option>
          <option>Breakfast</option>
          <option>Snacks</option>
        </select>
        <select className="border p-2 rounded ml-2">
          <option>Small Meal</option>
          <option>Medium Meal</option>
          <option>Large Meal</option>
        </select>
        <button className="bg-blue-500 text-white p-2 rounded ml-2">
          + Add Menu
        </button>
      </div>
      <table className="w-full border-collapse table-auto text-center text-small md:font-bold ">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Image</th>
            <th className="border p-2">Menu Name</th>
            <th className="border p-2">Our Menu</th>
            <th className="border p-2">Meal Plan</th>
            <th className="border p-2">Action</th>
          </tr>
        </thead>
        <tbody>
          {menuData.map((menu) => (
            <tr key={menu.id} className="border-t">
              <td className="border p-2">{menu.id}</td>
              <td className="border p-2 text-start">
                <img src={menu.img} alt="menu" className="inline-block w-8 h-8 rounded-full object-cover" />
              </td>
              <td className="border p-2">{menu.menuName}</td>
              <td className="border p-2">{menu.ourMenu}</td>
              <td className="border p-2">{menu.mealPlan}</td>
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

export default ManageMenu;
