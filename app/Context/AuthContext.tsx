"use client"
import { createContext, ReactNode, useState } from "react";

interface StoreContextType {
    
}
interface AppProvider {
    children : ReactNode
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);



export const AppProvider = ({children} : AppProvider) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState();
  const [quantities, setQuantities] = useState(0);
  const [qty, setQty] = useState(1);

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
        decQty
      }}>
        {children}
      </StoreContext.Provider>
    )
}

export default StoreContext;