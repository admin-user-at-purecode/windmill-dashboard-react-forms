import React from "react";
import { Windmill } from "@windmill/react-ui";
import Header from "../header/header";

const Layout = ({ children }) => {
  return (
    <Windmill usePreferences>
      <div className="h-screen">
        <div className="flex flex-col">
          <Header />
          <div className="flex-1 p-4 dark:bg-gray-800">{children}</div>
        </div>
      </div>
    </Windmill>
  );
};

export default Layout;
