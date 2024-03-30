"use client";

import { useEffect, useState } from "react";
import Cancel from "../(signinbody)/Cancel";

const ReservationCheck = () => {
  const [detailCheck, setDetailCheck] = useState([]);
  const timeArray = [
    "12:00 PM - 2:00 PM",
    "2:00 PM - 4:00 PM",
    "4:00 PM - 6:00 PM",
    "6:00 PM - 8:00 PM",
  ];

  useEffect(() => {
    fetch("http://localhost:3000/api/reservations")
      .then((response) => response.json())
      .then((data) => {
        const formattedData = data.reserve.map((item: any) => ({
          ...item,
          date: new Date(item.date).toISOString().split("T")[0],
        }));
        setDetailCheck(formattedData);
      })
      .catch((err) => console.error("Failed to fetch...", err));
  }, []);

  return (
    <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-10 gap-7 lg:m-12 mt-10">
      {detailCheck.map((item: any) => (
        <div
          className="lg:p-6 p-3 border-2 border-black rounded-lg"
          key={item.id}
        >
          <h1 className="font-unbounded lg:text-xl text-[18px] lg:p-4 p-2">
            {item.name}
          </h1>
          <p className="text-xs">{item.email}</p>
          <p>{item.date}</p>
          <p>{timeArray[Math.floor(Math.random() * timeArray.length)]}</p>
        </div>
      ))}
      <Cancel />
    </div>
  );
};

export default ReservationCheck;
