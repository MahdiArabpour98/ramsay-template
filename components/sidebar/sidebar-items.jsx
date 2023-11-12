const sidebarItems = [
  {
    title: "صفحه اصلی",
    href: "#",
  },

  {
    title: "تخصص",
    href: "#",
  },
  {
    title: "از سرگیری",
    href: "#",
  },
  {
    title: "درباره ما",
    href: "#",
  },
  {
    title: "پروژه ها",
    href: "#",
  },
  {
    title: "بررسی ها",
    href: "#",
  },
  {
    title: "مقاله ها",
    href: "#",
  },
  {
    title: "تماس با ما",
    href: "#",
  },
];

const SidebarItems = () => {
  return (
    <ul className="text-white h-full w-full flex flex-col gap-y-5">
      {sidebarItems.map((item, index) => (
        <li key={index}>{item.title}</li>
      ))}
    </ul>
  );
};

export default SidebarItems;
