// components/FavouritesScreen.jsx
"use client";
import React, { useState } from "react";
import { HiMiniBars3BottomLeft } from "react-icons/hi2";
import { FaFilter } from "react-icons/fa";
import { HiOutlineHome } from "react-icons/hi";
import { BiCandles } from "react-icons/bi";
import { IoTimeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
const FavouritesScreen = () => {
  const [activeTab, setActiveTab] = useState("Home");
  const [tabActive, setTabActive] = useState("Forex");
  const initialItems = [
    {
      category: "Forex",
      time: "15:00:00",
      pair: "EUR/GBP",
      image: "",
      value: '<span class="text-green-500">+30</span> (+23.2%)',
      numL: '147 <span class="text-red-500">8.256369</span>',
      labelL: "L:235698",
      numH: '147 <span class="text-red-500">8.256369</span>',
      labelH: "H:25.3659",
    },
    {
      category: "Forex",
      time: "15:00:00",
      pair: "EUR/GBP",
      value: '<span class="text-green-500">+30</span> (+23.2%)',
      numL: '147 <span class="text-green-500">8.256369</span>',
      labelL: "L:235698",
      numH: '147 <span class="text-green-500">8.256369</span>',
      labelH: "H:25.3659",
    },
    {
      category: "Forex",
      time: "15:00:00",
      pair: "EUR/GBP",
      value: '<span class="text-green-500">+30</span> (+23.2%)',
      numL: '147 <span class="text-green-500">8.256369</span>',
      labelL: "L:235698",
      numH: '147 <span class="text-red-500">8.256369</span>',
      labelH: "H:25.3659",
    },
    {
      category: "Forex",
      time: "15:00:00",
      pair: "EUR/GBP",
      value: '<span class="text-green-500">+30</span> (+23.2%)',
      numL: '147 <span class="text-red-500">8.256369</span>',
      labelL: "L:235698",
      numH: '147 <span class="text-green-500">8.256369</span>',
      labelH: "H:25.3659",
    },
    {
      category: "Forex",
      time: "15:00:00",
      pair: "EUR/GBP",
      value: '<span class="text-green-500">+30</span> (+23.2%)',
      numL: '147 <span class="text-red-500">8.256369</span>',
      labelL: "L:235698",
      numH: '147 <span class="text-green-500">8.256369</span>',
      labelH: "H:25.3659",
    },
    {
      category: "Forex",
      time: "15:00:00",
      pair: "EUR/GBP",
      value: '<span class="text-green-500">+30</span> (+23.2%)',
      numL: '147 <span class="text-green-500">8.256369</span>',
      labelL: "L:235698",
      numH: '147 <span class="text-red-500">8.256369</span>',
      labelH: "H:25.3659",
    },
    {
      category: "Forex",
      time: "15:00:00",
      pair: "EUR/GBP",
      value: '<span class="text-green-500">+30</span> (+23.2%)',
      numL: '147 <span class="text-red-500">8.256369</span>',
      labelL: "L:235698",
      numH: '147 <span class="text-green-500">8.256369</span>',
      labelH: "H:25.3659",
    },
    {
      category: "Forex",
      time: "15:00:00",
      pair: "EUR/GBP",
      value: '<span class="text-green-500">+30</span> (+23.2%)',
      numL: '147 <span class="text-red-500">8.256369</span>',
      labelL: "L:235698",
      numH: '147 <span class="text-green-500">8.256369</span>',
      labelH: "H:25.3659",
    },
    {
      category: "Forex",
      time: "15:00:00",
      pair: "EUR/GBP",
      value: '<span class="text-green-500">+30</span> (+23.2%)',
      numL: '147 <span class="text-green-500">8.256369</span>',
      labelL: "L:235698",
      numH: '147 <span class="text-red-500">8.256369</span>',
      labelH: "H:25.3659",
    },
    {
      category: "Forex",
      time: "15:00:00",
      pair: "EUR/GBP",
      value: '<span class="text-green-500">+30</span> (+23.2%)',
      numL: '147 <span class="text-green-500">8.256369</span>',
      labelL: "L:235698",
      numH: '147 <span class="text-red-500">8.256369</span>',
      labelH: "H:25.3659",
    },
  ];

  const tab = [
    { title: "Favourites" },
    { title: "Forex" },
    { title: "Crypto" },
    { title: "Indices" },
  ];

  const footerItems = [
    { title: "Home", icon: <HiOutlineHome size={24} /> },
    { title: "Trade", icon: <BiCandles size={24} /> },
    { title: "History", icon: <IoTimeOutline size={24} /> },
    { title: "Profile", icon: <FaRegUser size={24} /> },
  ];

  return (
    <div className="w-full min-h-screen flex justify-center items-center">
      {/* Main card */}
      <div className="relative sm:max-w-lg w-full h-[95vh] sm:m-4 bg-black text-white  shadow-lg overflow-hidden">
        {/* 🔹 Fixed Header Section */}
        <div className="absolute top-0 left-0 w-full bg-black z-20">
          {/* Icons Bar */}
          <div className="flex justify-between items-center px-6 py-3 border-b border-gray-800">
            <span className="text-[28px]">
              <HiMiniBars3BottomLeft />
            </span>
            <span className="text-[20px]">
              <FaFilter />
            </span>
          </div>

          {/* Tabs */}
          <div className="flex justify-between items-center px-4 py-3 ">
            {tab.map((value, index) => (
              <button
                key={index}
                onClick={() => setTabActive(value.title)} // 🟢 yeh missing tha
                className={`px-2 text-sm sm:text-base font-semibold transition
                    ${
                        tabActive === value.title
                        ? "text-white "
                        : "text-gray-500"
                    }`}
              >
                {value.title}
              </button>
            ))}
          </div>
        </div>

        {/* 🔸 Scrollable Content Section */}
        <div className="absolute top-[110px] left-0 right-0 bottom-0 overflow-y-auto scrollbar-hide px-6 pb-6">
          {initialItems.map((item, idx) => (
            <div
              key={idx}
              className="flex justify-between items-center w-full my-5 border-b border-gray-700 pb-4"
            >
              {/* Left: Flags + Info */}
              <div className="flex items-center gap-4">
                {/* Overlapping flags */}
                <div className="relative w-10 h-8">
                  <img
                    src="/united-states.png"
                    alt="USA"
                    className="absolute left-0 top-0 h-8 w-8 rounded-full border border-black"
                  />
                  <img
                    src="/germany.png"
                    alt="Germany"
                    className="absolute left-4 top-0 h-8 w-8 rounded-full border border-black"
                  />
                </div>

                {/* Text Info */}
                <div>
                  <h1 className="text-sm text-gray-400">{item.time}</h1>
                  <h1 className="text-xl font-bold py-1">{item.pair}</h1>
                  <h1
                    className="text-sm"
                    dangerouslySetInnerHTML={{ __html: item.value }}
                  />
                </div>
              </div>

              {/* Middle */}
              <div className="text-right">
                <h1 className="text-lg font-bold py-1">{item.labelL}</h1>
                <h1
                  className="text-sm"
                  dangerouslySetInnerHTML={{ __html: item.numL }}
                />
              </div>

              {/* Right */}
              <div className="text-right">
                <h1 className="text-lg font-bold py-1">{item.labelH}</h1>
                <h1
                  className="text-sm"
                  dangerouslySetInnerHTML={{ __html: item.numH }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* 🔻 Fixed Footer Navigation */}
        <div className="absolute bottom-0 left-0 w-full bg-black border-t border-gray-800 flex justify-between items-center px-6 py-3">
          {footerItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(item.title)}
              className={`flex flex-col items-center justify-center gap-1 text-sm ${
                activeTab === item.title
                  ? "text-yellow-400"
                  : "text-gray-500 hover:text-gray-300"
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.title}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FavouritesScreen;
