import Link from "next/link";

const Hamburger = () => {
  return (
    <div className="lg:w-[10%] w-[40%] font-berkshire tracking-wider h-[30%] bg-gradient-to-l from-lime-200 to-lime-400 text-black absolute lg:top-[15%] top-[9%] lg:left-2 left-1 flex justify-center items-center border-black border-2 rounded-lg shadow-[0.25rem_0.25rem_0px_0px_rgba(0,0,0,1)]">
      <ul className="flex flex-col">
        <li className="mb-6">
          <Link href="/ERD.pdf" target="_blank">ER-Diagram</Link>
        </li>
        <li>
          <Link href="/owners">Project Owners</Link>
        </li>
      </ul>
    </div>
  );
};

export default Hamburger;
