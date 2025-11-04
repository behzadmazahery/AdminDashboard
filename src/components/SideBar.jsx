import { ShoppingBasket } from "lucide-react";
import { useSelector } from "react-redux";
import * as Icons from "lucide-react"; 

const SideBar = () => {
  const menuItems = useSelector((state) => state.panelMenuSlice.menuItems);
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  return (
    <aside className={`w-[250px] h-screen p-5 font-bold text-white rounded-2xl transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-800' : 'bg-[#7258db]'
    }`}>
      <h2 className="flex items-center gap-2 text-2xl">
        <ShoppingBasket /> پنل مدیریت
      </h2>

      <nav className="mt-5">
        <ul className="flex flex-col gap-4">
          {menuItems.map((item) => {
            const Icon = Icons[item.icon]; 
            return (
              <li
                key={item.id}
                className={`flex text-sm items-center gap-3 rounded-md p-2 cursor-pointer transition-colors ${
                  isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-[#5a42c1]'
                }`}
              >
                {Icon && <Icon size={20} />}
                {item.title}
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
};

export default SideBar;
