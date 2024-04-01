"use client";

import { Menu } from "lucide-react";
import { PhoneCallIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Hamburger from "../(hamburger)/Hamburger";
import { RxCross1 } from "react-icons/rx";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleButton = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="w-full flex justify-between items-center lg:p-6 p-4 bg-gradient-to-r from-lime-100 to-lime-400 border-b-4 border-black">
        <button className="lg:ml-8 ml-3" onClick={toggleButton}>
          {isMenuOpen ? <RxCross1 /> : <Menu />}
        </button>
        <Link href="/">
          <h1 className="text-black font-semibold text-2xl lg:text-4xl font-serif lg:tracking-wider font-berkshire">
            Restaurant
          </h1>
        </Link>
        <Link href="/contact" className="lg:mr-8 mr-3">
          <PhoneCallIcon />
        </Link>
      </div>
      {isMenuOpen && <Hamburger />}
    </>
  );
};

export default Navbar;
