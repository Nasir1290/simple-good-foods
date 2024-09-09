import React, { createContext, useState, useEffect } from "react";
import useAuth from "../hooks/useAuth"; // Assuming you have a hook to get the logged-in user's info
import cartContext from "../contexts/CartContext";



// Create the CartContext

// CartProvider component
const CartProvider = ({ children }) => {
  const { user } = useAuth(); // Getting user info (like email)
  const [cartData, setCartData] = useState([]);

  // Load user-specific cart data from localStorage (or any other persistence storage)
  useEffect(() => {
    if (user?.email) {
      // Retrieve cart data for the logged-in user by their email
      const storedCart = localStorage.getItem(`cart_${user.email}`);
      if (storedCart) {
        setCartData(JSON.parse(storedCart));
      }
    }
  }, [user?.email]);

  // Update cart data when it changes and save it to localStorage
  useEffect(() => {
    if (user?.email) {
      // Save the user's cart data to localStorage whenever cartData is updated
      localStorage.setItem(`cart_${user.email}`, JSON.stringify(cartData));
    }
  }, [cartData, user?.email]);

  // Function to update cart
  const addToCart = (product) => {
    setCartData((prevCart) => [...prevCart, product]);
  };

  // Function to remove item from cart
  const removeFromCart = (productId) => {
    setCartData((prevCart) =>
      prevCart.filter((product) => product.id !== productId)
    );
  };

  // Context value that will be provided to other components
  const contextValue = {
    cartData,
    setCartData,
    addToCart,
    removeFromCart,
  };

  return (
    <cartContext.Provider value={contextValue}>
      {children}
    </cartContext.Provider>
  );
};

// Export the CartContext and CartProvider
export { CartProvider };
