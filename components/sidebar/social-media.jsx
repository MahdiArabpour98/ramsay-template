import { AiFillInstagram } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const socialIcons = [
  {
    icon: <AiFillInstagram />,
    href: "#",
  },
  {
    icon: <BsTelegram />,
    href: "#",
  },
  {
    icon: <IoLogoWhatsapp />,
    href: "#",
  },
];

const SocialMedia = () => {
  return (
    <div className="flex gap-x-4 items-center text-gray-600 text-2xl ">
      {socialIcons.map((item, index) => (
        <div
          className="cursor-pointer hover:text-pink-700 hover:scale-110 transition-all duration-200"
          key={index}
        >
          {item.icon}
        </div>
      ))}
    </div>
  );
};

export default SocialMedia;
