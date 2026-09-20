"use client";
import { ShopContext } from "@/context/ShopContext";
import { useContext } from "react";
import Image from "next/image";

export default function Cart() {
  const { cart, deleteCart } = useContext(ShopContext);
  if (cart.length == 0)
    return (
      <h1 className="bg-gray-100 mt-5 h-90 text-center pt-45 font-bold">
        سبد خرید خالی است
      </h1>
    );
  return (
    <div className="mx-auto mt-8 max-w-4xl px-4">
      <div className="space-y-4">
        {cart.map((c ,index) => (
          <div
            key={`${c._id}-${index}`}
            className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-4 shadow-sm"
          >
            {/* تصویر محصول */}
            <Image
              src={c.image}
              alt={c.name}
              width={100}
              height={100}
              unoptimized
            />

            {/* اطلاعات محصول */}
            <div className="flex flex-1 flex-col gap-2">
              <h2 className="font-bold text-gray-800">{c.name}</h2>

              <p className="text-lg font-semibold text-green-600">
                {c.price.toLocaleString()} تومان
              </p>
            </div>

            {/* دکمه حذف */}
            <button
              onClick={()=>deleteCart(c)}
              type="button"
              className="rounded-lg bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600 cursor-pointer"
            >
              حذف
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
