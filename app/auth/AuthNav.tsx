import { Menu, PhoneCallIcon } from "lucide-react";
import Link from "next/link";

const AuthNav = () => {
  return (
    <div className="w-full flex justify-between items-center lg:p-6 p-4 bg-gradient-to-r from-lime-100 to-lime-400 border-b-4 border-black">
      <button className="ml-8">
        <Menu />
      </button>
      <Link href="/">
        <h1 className="text-black font-bold text-2xl lg:text-4xl font-serif lg:tracking-wide uppercase font-unbounded">
          GoodEats
        </h1>
      </Link>
      <Link href="/contact" className="mr-8">
        <PhoneCallIcon />
      </Link>
    </div>
  );
};

export default AuthNav;
