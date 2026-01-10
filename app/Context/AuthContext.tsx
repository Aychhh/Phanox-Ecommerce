"use client"
import { createContext, ReactNode, useState } from "react";
import toast from "react-hot-toast";

interface StoreContextType {
    
}
interface AppProvider {
    children : ReactNode
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);



export const AppProvider = ({children} : AppProvider) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [quantities, setQuantities] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [qty, setQty] = useState(1);


  const onAdd = (product : any, quantity : any) => {
    const checkCartItem = cartItems.find((item : any) => item._id === product._id)

    setTotalPrice((prevTotalPrice : any) => prevTotalPrice + product.price * quantity)
    setQuantities((prevQuantity : any) => prevQuantity + quantity)

    if(checkCartItem){
      const updateCartItem = cartItems.map((cartProduct : any) => {
        if(cartProduct._id === product._id) return {
          ...cartProduct, 
          quantity : cartProduct.quantity + quantity
        }
    })
    setCartItems(updateCartItem)
    } else {
      product.quantity = quantity

      setCartItems([...cartItems, {...product}])
    }
    toast.success(`${qty} ${product.name} added to the cart`)
  }

  const incQty = () => {
    setQty((prev) => prev + 1);
  }

  const decQty = () => {
    setQty((prev) => {
      if(prev - 1 < 1) return 1;
      return prev - 1;
    })
  }
      return (
      <StoreContext.Provider value={{
        showCart,
        setShowCart,
        cartItems,
        setCartItems,
        quantities,
        setQuantities,
        qty,
        setQty,
        incQty,
        decQty,
        onAdd,
        totalPrice
      }}>
        {children}
      </StoreContext.Provider>
    )
}

export default StoreContext;