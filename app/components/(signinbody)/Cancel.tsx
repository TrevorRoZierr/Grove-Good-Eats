import Link from "next/link";
import { RxCross2 } from "react-icons/rx";

const Cancel = () => {
  return (
    <div className="absolute lg:top-[110px] lg:right-6 top-[80px] right-3">
      <Link href="/reservations/accessed" className="font-semibold text-3xl">
        <RxCross2 />
      </Link>
    </div>
  );
};

export default Cancel;
