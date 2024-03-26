import { Menu } from "lucide-react";
import { PhoneCallIcon } from "lucide-react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full flex justify-between items-center lg:p-6 p-4 bg-gradient-to-r from-lime-100 to-lime-400 border-b-4 border-black">
      <button className="lg:ml-8 ml-3">
        <Menu />
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
  );
};

export default Navbar;
