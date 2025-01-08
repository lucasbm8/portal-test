import Link from "next/link";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  return (
    <div className="h-24 flex items-center justify-between">
      {/*left side*/}
      <div className=" md:hidden lg:block w-[20%]">
        <Link href="/" className="font-bold text-xl text-blue-600 ">
          StarSocial
        </Link>
      </div>
      {/*center*/}
      <div className="hidden md:flex w-[50%]">
        {/*links*/}

        <div className="flex gap-6 text-gray-600">
          <Link href="/" className="flex gap-2">
            <Image src="/home.png" alt="Homepage" width={16} height={16} />
            <span> Homepage</span>
          </Link>
          <Link href="/" className="flex gap-2">
            <Image src="/friends.png" alt="Homepage" width={16} height={16} />
            <span> Friends</span>
          </Link>
          <Link href="/" className="flex gap-2">
            <Image src="/stories.png" alt="Homepage" width={16} height={16} />
            <span> Stories</span>
          </Link>
        </div>
      </div>

      <div className=" w-[30%]">
        {/*right*/}
        <MobileMenu />
      </div>
    </div>
  );
};
export default Navbar;
