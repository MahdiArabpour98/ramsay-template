import Image from "next/image";
import Link from "next/link";
import { AiOutlinePlayCircle } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="w-screen h-screen px-64 flex gap-y-16 relative justify-between items-center">
      <div className="flex flex-col">
        <h1 className="text-7xl font-bold text-white">
          <span className="text-pink-700">سلام</span>
          <br />
          من رمزی هستم
        </h1>
        <Link
          href="#"
          className="text-white flex gap-x-4 mt-32 items-center hover:text-pink-700 transition-all duration-300"
        >
          <AiOutlinePlayCircle className="text-7xl" />
          مشاهده رزومه
        </Link>
      </div>
      <Image
        src={"/hero.png"}
        alt=""
        height={720}
        width={480}
        className="h-screen w-[700px] -ml-80"
      />
    </div>
  );
};

export default Hero;
