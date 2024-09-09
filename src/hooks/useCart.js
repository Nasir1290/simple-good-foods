import { createContext, useContext } from "react"
import cartContext from "../contexts/CartContext";

const useCart = () => {
    return useContext(cartContext);
};

export default useCart;