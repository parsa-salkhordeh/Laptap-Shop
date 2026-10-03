"use client";

import { createContext, useState } from "react";
import toast from "react-hot-toast";
type ShopContextType = {
  addToCard: (product: Product) => void;
  cart: Product[];
  deleteCart: (indexToDelete: any) => void;
};
interface Product {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}
export const ShopContext = createContext<ShopContextType>(
  {} as ShopContextType,
);

export default function ShopProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<Product[]>([]);

  function addToCard(product: Product) {
    // setCart((prev) => [...prev, product] );
    setCart((prev) => {
      const selectedProduct: Product | undefined = prev.find(
        (item) => item._id === product._id,
      );

      if (!selectedProduct) {
        return [...prev, { ...product, quantity: 1 }];
      } else {
        return prev.map((item) =>
          item._id === product._id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
    });

    toast.success("محصول به سبد خرید اضافه شد");
  }

  function deleteCart(product: Product) {
    setCart((prev) => prev.filter((item) => item._id !== product._id));
  }

  return (
    <ShopContext.Provider value={{ addToCard, cart, deleteCart }}>
      {children}
    </ShopContext.Provider>
  );
}
