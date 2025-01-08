import Link from "next/link";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="">
        {/*left side*/}
        <Link href="/" className="font-bold text-xl text-blue-600 ">
          Star
        </Link>
      </div>

      <div className="hidden">{/*center*/}</div>

      <div className="">
        {/*right*/}
        <MobileMenu />
      </div>
    </div>
  );
};
export default Navbar;
