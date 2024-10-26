'use client';
import { MdDashboard, MdManageAccounts } from "react-icons/md";
import { GrTransaction } from "react-icons/gr";
import { IoAnalytics, IoSettings } from "react-icons/io5";
import { RiShoppingCartLine } from "react-icons/ri";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Sidebar = () => {
  const pathName = usePathname();
  const menus = [
    {
      title: "Dashboard",
      icon: <MdDashboard />,
      href: "/admin/dashboard",
    }, {
      title: "Products",
      icon: <RiShoppingCartLine />,
      href: "/admin/products"
    }, {
      title: "Accounts",
      icon: <MdManageAccounts />,
      href: "#"
    }, {
      title: "Transactions",
      icon: <GrTransaction />,
      href: "#",
    },
    {
      title: "Analytics",
      icon: <IoAnalytics />,
      href: "#",
    }, {
      title: "Setting",
      icon: <IoSettings />,
      href: "#",
    },
  ];

  return (
    <div className="bg-gray-800 w-[300px] min-h-screen p-4 shrink-0 text-gray-200">
      <div className="flex items-center gap-4 p-2">
        <img className="w-10 h-10 rounded-lg" src="/path-to-your-logo.png" alt="logo" />
        <h2 className="text-[22px] font-bold tracking-wide text-teal-400">Brave Coder</h2>
      </div>
      <ul className="space-y-2 mt-6">
        {menus.map(menu => (
          <Link 
            key={menu.title} 
            href={menu.href} 
            className={`flex gap-3 items-center p-3 rounded-md cursor-pointer text-gray-300 hover:bg-gray-600 hover:text-white transition-colors duration-200 ease-in-out ${pathName.startsWith(menu.href) ? "bg-teal-600 text-white" : "bg-gray-700"}`}
          >
            <div className="text-[22px]">{menu.icon}</div>
            <p className="font-medium">{menu.title}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
