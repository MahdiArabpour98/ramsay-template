const links = [
  {
    href: "#",
  },
  {
    href: "#",
  },
  {
    href: "#",
  },
  {
    href: "#",
  },
  {
    href: "#",
  },
  {
    href: "#",
  },
  {
    href: "#",
  },
  {
    href: "#",
  },
];

const NavigationButtons = () => {
  return (
    <div className="fixed left-20 z-10 top-[50%] -translate-y-[50%] flex flex-col gap-y-9">
      {links.map((link, index) => (
        <div key={index} className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer" />
      ))}
    </div>
  );
};

export default NavigationButtons;
