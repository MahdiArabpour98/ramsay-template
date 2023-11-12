import { FiMonitor } from "react-icons/fi";
import { ImMobile } from "react-icons/im";
import { GiCutDiamond } from "react-icons/gi";
import Link from "next/link";

const items = [
  {
    logo: <FiMonitor className="text-7xl text-pink-700" />,
    title: "طراحی وب",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کارب",
  },
  {
    logo: <ImMobile className="text-7xl text-pink-700" />,
    title: "طراحی موبایل",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کارب",
  },
  {
    logo: <GiCutDiamond className="text-7xl text-pink-700" />,
    title: "تصویر گری",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کارب",
  },
];

const MyExperties = () => {
  return (
    <div className="w-screen h-screen px-64 py-32 flex gap-y-16 flex-col relative">
      <h2 className="text-white text-5xl font-bold">
        <span className="text-pink-700">تخصص</span> من
      </h2>
      <div className="flex w-full justify-between">
        {items.map((item, index) => (
          <div key={index} className="flex w-1/3 flex-col gap-y-10 p-5 px-5">
            {item.logo}
            <h3 className="text-2xl text-white font-bold">{item.title}</h3>
            <p className="text-gray-300 text-justify text-base">{item.text}</p>
          </div>
        ))}
      </div>
      <Link href="#" className="text-white text-lg mr-8 hover:underline">
        دانلود رزومه
      </Link>
      <div className="tracking-wider rotate-90 absolute top-[50%] -right-40 text-8xl opacity-30">
        <span className="text-pink-700">انجام</span> میدهم
      </div>
    </div>
  );
};

export default MyExperties;
