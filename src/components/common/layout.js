import React from "react";
import { Windmill } from "@windmill/react-ui";
import Sidebar from "../sidebar/sidebar";

const Layout = ({ children }) => {
  return (
    <Windmill usePreferences>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex flex-1">
          <div className="flex-1 p-4 dark:bg-gray-800">{children}</div>
        </div>
      </div>
    </Windmill>
  );
};

export default Layout;
