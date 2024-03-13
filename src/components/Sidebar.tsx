import React from "react";
import { Link } from "react-router-dom";
import sidebarList from "./constant";

const Sidebar = () => {
  return (
    <div className="flex w-[200px] h-[100vh] flex-col gap-3 text-white">
      {sidebarList.map((item) => (
        <div
          key={item.title}
          className="pl-6 pr-2 bg-clip-border p-2 cursor-pointer"
        >
          <Link to={`${item.path}`}>{item.title}</Link>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
