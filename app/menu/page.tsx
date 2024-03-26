"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";
import NonVeg from "../components/(menu)/NonVeg";
import Veg from "../components/(menu)/Veg";

const Menu = () => {
  const [Nonveg, setNonveg] = useState(false);
  const [Vegan, setVegan] = useState(false);

  const handleNonVeg = () => {
    setNonveg(true);
    setVegan(false);
  };

  const handleVeg = () => {
    setNonveg(false);
    setVegan(true);
  };

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="font-unbounded lg:mt-5 mt-3 lg:text-[4rem] text-[2.2rem] uppercase tracking-wider font-semibold">
        Menu
      </h1>
      {/* <p className="my-3">Click below to check Menu</p> */}
      <div className="lg:mt-6 mt-4 flex flex-row">
        <Button
          className="lg:mx-12 mx-4 border-2 border-black shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] bg-lime-300 text-black hover:bg-indigo-300 font-berkshire tracking-wide"
          onClick={handleNonVeg}
        >
          Non-Veg Food
        </Button>
        <Button
          className="lg:mx-12 mx-4 border-2 border-black shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)] bg-lime-300 text-black hover:bg-indigo-300 font-berkshire tracking-wide"
          onClick={handleVeg}
        >
          Vegan Food
        </Button>
      </div>
      {Nonveg && <NonVeg />}
      {Vegan && <Veg />}
    </div>
  );
};

export default Menu;
