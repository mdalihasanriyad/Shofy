import React from "react";
import TopHeader from "./TopHeader";
import Image from "next/image";
import logo from "./../app/asset/logo.png";
import { CgProfile } from "react-icons/cg";
import { RiArrowUpDownLine } from "react-icons/ri";
import { MdFavoriteBorder } from "react-icons/md";
import { FaAngleDown, FaBagShopping } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import BottomHeader from "./BottomHeader";

const Header = () => {
  return (
    <div className="">
      <TopHeader />
      <div className="border-b-[1px] text-gray-500">
        <div className="max-w-screen-xl mx-auto py-6 ">
          <div className="flex items-center justify-between">
            <Image src={logo} alt="logo" className="w-32" />
            <div className="flex items-center justify-center  border-[1px] border-blue-500">
              <form
                action="#"
                className="flex justify-center items-center gap-2"
              >
                <input
                  type="text"
                  placeholder="Search for products..."
                  className=" p-2 outline-none "
                />
                |
                <select name="category" className="outline-none p-2" id="#">
                  <option value="Select Category" className="text-bold">
                    Select Category
                  </option>
                  <option value="Mobile">Mobile</option>
                  <option value="Digital Watch">Digital Watch</option>
                  <option value="Computer">Computer</option>
                  <option value="Watch">Watch</option>
                </select>
              </form>
              <button className="bg-blue-500 p-4 text-xl">
                <IoSearch />
              </button>
            </div>
            <div className="flex justify-center items-center gap-8">
              <div className="flex justify-center items-center gap-2 cursor-pointer">
                <CgProfile className="text-4xl" />
                <div className="">
                  <p className="text-xs text-black/60 font-semibold">
                    Hello,Sing In
                  </p>
                  <p className="text-xl font-semibold ">Your Account</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 text-2xl cursor-pointer ">
                <RiArrowUpDownLine className="hover:text-[#0989FF] duration-300" />
                <MdFavoriteBorder className="hover:text-[#0989FF] duration-300" />
                <FaBagShopping className="hover:text-[#0989FF] duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <BottomHeader />
    </div>
  );
};

export default Header;
