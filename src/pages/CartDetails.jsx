import React from "react";
import useCart from "../hooks/useCart";
import { toast } from "react-toastify";
import useAuth from "../hooks/useAuth";
import Loading from "../components/general/Loading";

const CartDetails = () => {
  const {user,loading} = useAuth();
  const { cartData, setCartData, addToCart, removeFromCart } = useCart();
  console.log({ cartData });
    const toastValue = {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    };

  // Calculate the total price
  const totalPrice = cartData
    .reduce((acc, item) => acc + item.price, 0)
    .toFixed(2);

  // Handle removing an item from the cart
  const handleRemove = (id) => {
    removeFromCart(id);
  };

  // Placeholder for checkout function
  const handleCheckout = () => {
    // Add your checkout logic here
    setCartData([])
    toast.success("successfully checkout",toastValue);
  };

  if(loading) return <Loading/>

  return (
    <>
      {cartData?.length > 0 ? (
        <div className="container mx-auto p-4 md:p-8 bg-gray-100 min-h-screen">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-purple-700">
            Your Cart
          </h1>

          {/* Products list */}
          <div className="space-y-4">
            {cartData.map((product) => (
              <div
                key={product.id}
                className="flex items-center justify-between p-4 bg-white shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300"
              >
                {/* Product Image */}
                <div className="w-24 h-24 flex-shrink-0">
                  <img
                    className="w-full h-full object-cover rounded-lg"
                    src={product.image}
                    alt={product.title}
                  />
                </div>

                {/* Product Info */}
                <div className="ml-4 flex-1">
                  <h2 className="text-lg font-semibold text-blue-600">
                    {product.title}
                  </h2>
                  <p className="text-gray-600">Rating: {product.rating} ★</p>
                  <p className="text-gray-500">${product.price.toFixed(2)}</p>
                </div>

                {/* Remove Button */}
                <button
                  onClick={() => handleRemove(product.id)}
                  className="bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition-colors duration-300"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Total Price */}
          <div className="border-t mt-6 pt-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-bold text-green-600">Total Price</h2>
              <p className="text-xl font-bold text-green-700">${totalPrice}</p>
            </div>

            {/* Checkout Button */}
            <div className="text-center mt-6">
              <button
                onClick={handleCheckout}
                className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-4xl text-center mt-8 text-gray-600">
          Cart Data is empty
        </div>
      )}
    </>
  );
};

export default CartDetails;
