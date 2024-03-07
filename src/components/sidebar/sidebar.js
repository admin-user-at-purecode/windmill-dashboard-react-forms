import React, { useState } from "react";
import { Button } from "@windmill/react-ui";
import * as Icons from "../../assets/icons";
import { Transition } from "@windmill/react-ui";
import { DropdownIcon } from "../../assets/icons";

function Icon({ icon, ...props }) {
  const Icon = Icons[icon];
  return <Icon {...props} />;
}
function Sidebar() {
  const [isDropdownMenuOpen, setIsDropdownMenuOpen] = useState(false);

  function handleDropdownMenuClick() {
    setIsDropdownMenuOpen(!isDropdownMenuOpen);
  }

  const sidebardata = [
    {
      icon: "HomeIcon",
      name: "Dashboard",
    },
    {
      icon: "FormsIcon",
      name: "Forms",
    },
    {
      icon: "CardsIcon",
      name: "Cards",
    },
    {
      icon: "ChartsIcon",
      name: "Charts",
    },
    {
      icon: "ButtonsIcon",
      name: "Buttons",
    },
    {
      icon: "ModalsIcon",
      name: "Modals",
    },
    {
      icon: "TablesIcon",
      name: "Tables",
    },
    {
      icon: "PagesIcon",
      name: "Pages",
    },
  ];

  return (
    <aside className="z-30 flex-shrink-0 hidden w-64 overflow-y-auto bg-white dark:bg-gray-800 lg:block">
      <div className="py-4 text-gray-500 dark:text-gray-400">
        <a
          className="ml-6 text-lg font-bold text-gray-800 dark:text-gray-200"
          href="#"
        >
          Windmill
        </a>
        <ul className="mt-6">
          {sidebardata.map((mainItem) =>
 (
              <li className="relative px-6 py-3" key={mainItem.name}>
                <p
                
                  className="inline-flex items-center w-full text-sm font-semibold transition-colors duration-150 hover:text-gray-800 dark:hover:text-gray-200"
                  // activeClassName="text-gray-800 dark:text-gray-100"
                >
                    <span
                      className="absolute inset-y-0 left-0 w-1 rounded-tr-lg rounded-br-lg"
                      aria-hidden="true"
                    ></span>
                  <Icon
                    className="w-5 h-5"
                    aria-hidden="true"
                    icon={mainItem.icon}
                  />
                  <span className="ml-4">{mainItem.name}</span>
                </p>
              </li>
            )
          )}
        </ul>
        <div className="px-6 my-6">
          <Button>Create account</Button>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
