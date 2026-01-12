"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";
import toast from "react-hot-toast";

interface StoreContextType {
  showCart: boolean;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
  cartItems: product[];
  setCartItems: React.Dispatch<React.SetStateAction<product[]>>;
  onAdd: (product: product, quantity: number) => void;
  toogleCartItem: (id: string, action: "inc" | "dec") => void;
  incQty: () => void;
  decQty: () => void;
  totalPrice: number;
  quantities: number;
  setQuantities: React.Dispatch<React.SetStateAction<number>>;
  setQty: React.Dispatch<React.SetStateAction<number>>;
  qty: number;
  onRemove: (product: product) => void;
}

interface product {
  name: string;
  details: string;
  price: number;
  _id: string;
  image: any[];
  quantity: number;
  slug: string;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState<product[]>([]);
  const [quantities, setQuantities] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [qty, setQty] = useState(1);

  // ADD ITEM TO THE CART LOGIC
  const onAdd = (product: product, quantity: number) => {
    const checkCartItem = cartItems.find(
      (item: any) => item._id === product._id
    );

    setTotalPrice(
      (prevTotalPrice) => prevTotalPrice + product.price * quantity
    );
    setQuantities((prevQuantity) => prevQuantity + quantity);

    if (checkCartItem) {
      const updateCartItem = cartItems.map((cartProduct: product) => {
        if (cartProduct._id === product._id)
          return {
            ...cartProduct,
            quantity: cartProduct.quantity + quantity,
          };
        return cartProduct;
      });
      setCartItems(updateCartItem);
    } else {
      product.quantity = quantity;

      setCartItems([...cartItems, { ...product }]);
    }
    toast.success(`${qty} ${product.name} added to the cart`);
  };

  // CHANGE THE QUANTITY OF SPECIFIC ITEM IN CART
  const toogleCartItem = (id: string, action: "inc" | "dec") => {
    const foundItems = cartItems.find((item: product) => item._id === id);

    if (!foundItems) return;

    const updateCartItem = cartItems.map((item: product) => {
      if (item._id !== foundItems._id) return item;

      if (action === "inc") {
        return { ...item, quantity: foundItems.quantity + 1 };
      }
      if (action === "dec" && item.quantity > 1) {
        return { ...item, quantity: foundItems.quantity - 1 };
      }
      return item;
    });
    setCartItems(updateCartItem);
    if (action === "inc") {
      setTotalPrice((prev) => prev + foundItems.price);
      setQuantities((prev) => prev + 1);
    }
    if (action === "dec" && foundItems.quantity > 1) {
      setTotalPrice((prev) => prev - foundItems.price);
      setQuantities((prev) => prev - 1);
    }
  };

  // REMOVE ITEM FORM THE CART
  const onRemove = (product: product) => {
    const foundItems = cartItems.find(
      (item: product) => item._id === product._id
    );
    if (!foundItems) return;
    const newCartItems = cartItems.filter(
      (item: product) => item._id !== product._id
    );

    setTotalPrice(
      (prevTotalPrice) =>
        prevTotalPrice - foundItems.price * foundItems.quantity
    );
    setQuantities((prevTotalQty) => prevTotalQty - foundItems.quantity);
    setCartItems(newCartItems);
  };
  const incQty = () => {
    setQty((prev) => prev + 1);
  };

  const decQty = () => {
    setQty((prev) => {
      if (prev - 1 < 1) return 1;
      return prev - 1;
    });
  };
  return (
    <StoreContext.Provider
      value={{
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
        totalPrice,
        toogleCartItem,
        onRemove,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContext;

export const useStateContext = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error(
      "useStateContext must be used within a StateContextProvider"
    );
  }
  return context;
};
