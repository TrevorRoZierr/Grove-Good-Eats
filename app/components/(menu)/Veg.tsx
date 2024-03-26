"use client";

import { useState, useEffect } from "react";

const NonVeg = () => {
  const [isVeg, setVeg] = useState([]);

  useEffect(() => {
    fetch("https://grove-good-eats.vercel.app/api/vegmenu")
      .then((response) => response.json())
      .then((data) => setVeg(data))
      .catch((err) => console.error("Failed to fetch", err));
  }, []);

  return (
    <div className="bg-gradient-to-br from-indigo-100 to-indigo-400 font-unbounded flex justify-center items-center flex-col lg:my-16 my-10 lg:p-10 p-2 border-2 border-black shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] rounded-md">
    <ul>
      {isVeg.map((item: any) => (
          <li key={item.id} className="lg:p-5 p-3">
              <p className="p-3 lg:text-xl text-sm font-semibold capitalize">{item.name}</p>
              <p className="lg:text-md text-xs font-semibold">₹ {item.price}</p>
          </li>
      ))}
    </ul>
  </div>
  );
};

export default NonVeg;
