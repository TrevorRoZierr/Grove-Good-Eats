"use client";

import { useState, useEffect } from "react";

const NonVeg = () => {
  const [isNonVeg, setIsNonVeg] = useState([]);

  useEffect(() => {
    fetch("https://grove-good-eats.vercel.app/api/nonvegmenu")
      .then((response) => response.json())
      .then((data) => setIsNonVeg(data))
      .catch((err) => console.error("Failed to fetch", err));
  }, []);

  return (
    <div className="bg-gradient-to-br from-lime-100 to-lime-400 font-unbounded flex justify-center items-center flex-col lg:my-16 my-10 lg:p-10 border-2 border-black shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] rounded-md">
      <ul>
        {isNonVeg.map((item: any) => (
            <li key={item.id} className="border-b-2 p-5 border-black">
                <p className="p-3 lg:text-xl text-lg font-semibold capitalize">{item.name}</p>
                <p className="lg:text-md text-sm font-semibold">₹ {item.price}</p>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default NonVeg;
