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
      <div className="hidden md:flex w-[50%] text-sm">
        {/*links*/}

        <div className="flex gap-6 text-gray-600">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/home.png"
              alt="Homepage"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span> Homepage</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/friends.png"
              alt="Homepage"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span> Friends</span>
          </Link>
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/stories.png"
              alt="Homepage"
              width={16}
              height={16}
              className="w-4 h-4"
            />
            <span> Stories</span>
          </Link>
        </div>
      </div>

      {/*right*/}
      <div className=" w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
        <MobileMenu />
      </div>
    </div>
  );
};
export default Navbar;
