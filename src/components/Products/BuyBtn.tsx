"use client"
import { ShopContext } from "@/context/ShopContext";
import { useContext } from "react";
interface Product {
  image: string;
  _id: string;
  name: string;
  price: number;
  quantity:number
}
export default function BuyBtn({product}:{product:Product}) {
  const context = useContext(ShopContext);
  console.log(context)
  return (
    <button
      type="button"
      className="flex-1 rounded-xl bg-gray-900 py-2 text-sm font-semibold text-white transition hover:bg-green-600 cursor-pointer"
      onClick={()=> context?.addToCard(product)}
    >
      خرید
    </button>
  );
}
