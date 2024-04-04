import React from "react";

type Props = {
  children: React.ReactNode;
};

const MobileSidebar = ({ children }: Props): React.ReactElement => {
  return (
    <div className="relative w-fit h-fit block sm:hidden">
      <div id="mobile-sidebar-wrap">
        <div id="sidebar" className="p-1 h-fit w-full bg-white z-10"></div>
      </div>
    </div>
  );
};

export default MobileSidebar;
