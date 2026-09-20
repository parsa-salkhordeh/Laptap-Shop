"use client";

import Link from "next/link";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faComputer,
  faEnvelope,
  faCircleInfo,
  faBars,
  faXmark,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <header className="mt-5 relative flex bg-gray-100 p-5">
      <div className="flex">
        <h1 className="text-lg md:text-2xl font-vazir font-bold">
          لپتاپ <span className="text-blue-400"> خانه 💻</span>
        </h1>
      </div>

      <ul
        className={`font-vazir flex flex-col md:flex md:mx-auto text-lg md:text-2xl gap-5
                fixed top-0 right-0 h-full w-2/4 bg-gray-100 z-50 transform transition-transform duration-300
                ${isOpen ? "translate-x-0" : "translate-x-full"}
                md:static md:flex-row md:translate-x-0 md:w-auto md:bg-transparent
                
            `}
      >
        <li className="hover:text-blue-500">
          <FontAwesomeIcon icon={faHouse} className="px-2" />
          <Link href="/">خونه</Link>
        </li>

        <li className="hover:text-blue-500">
          <FontAwesomeIcon icon={faComputer} className="px-2" />
          <Link href="/products">محصولات</Link>
        </li>

        <li className="hover:text-blue-500">
          <FontAwesomeIcon icon={faEnvelope} className="px-2" />
          <Link href="/contact">ارتباط با ما</Link>
        </li>

        <li className="hover:text-blue-500">
          <FontAwesomeIcon icon={faCircleInfo} className="px-2" />
          <Link href="/about">درباره ما</Link>
        </li>

        {/* سبد خرید */}
      </ul>

       <div className="hover:text-blue-500  mx-8 md:mx-2">
        <Link className="relative" href="/cart">
          {/* استفاده از کتابخونه Font Awesome */}
          <FontAwesomeIcon icon={faCartShopping} className="text-2xl" />
          <span className=" text-white px-1 rounded-2xl ml-0 absolute left-7 bg-red-600">
            0
          </span>
        </Link>
      </div>

      {/* برای باز کردن منوی موبایل */}
      <div
        onClick={() => setOpen(!isOpen)}
        className="p-2 absolute left-10 top-3 md:hidden cursor-pointer"
      >
        <FontAwesomeIcon
          icon={isOpen ? faXmark : faBars}
          className="text-3xl"
        />
      </div>
    </header>
  );
}
