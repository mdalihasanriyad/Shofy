import React from "react";
import { FaPhoneVolume } from "react-icons/fa6";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoChevronDownSharp } from "react-icons/io5";

const BottomHeader = () => {
  const navigation = [
    { title: "Home", href: "/" },
    { title: "Shop", href: "/shop" },
    { title: "Products", href: "/products" },
    { title: "Coupons", href: "/coupons" },
    { title: "Blog", href: "/blog" },
    { title: "Contact", href: "/contact" },
  ];
  return (
    <div className="max-w-screen-xl mx-auto flex items-center justify-between">
      <div className="flex items-center gap-8">
        <h3 className=" flex items-center justify-between gap-4 bg-blue-600 text-white p-4 w-80 hover:bg-black duration-300">
          {" "}
          <span className="flex items-center gap-4">
            <HiMenuAlt2 className="text-2xl" /> All Departments
          </span>{" "}
          <IoChevronDownSharp />
        </h3>
        <ul className="flex items-center justify-center gap-x-5 ">
          {navigation?.map((item) => (
            <li
              key={item.title}
              className="cursor-pointer hover:text-blue-600 duration-300 text-base font-semibold"
            >
              {item?.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center gap-2">
        <FaPhoneVolume className="text-2xl text-blue-500" />
        <div className=" ">
          <p className="text-xs">Hotline:</p>
          <p className="cursor-pointer font-semibold text-sm hover:text-blue-600 duration-300">
            +(402) 763 282 46
          </p>
        </div>
      </div>
    </div>
  );
};

export default BottomHeader;
