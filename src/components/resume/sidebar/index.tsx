import { forwardRef } from "react";
import { cn } from "lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Sidebar = forwardRef<HTMLDivElement, Props>(
  ({ children, className }, ref): React.ReactElement => {
    //TODO: Skills down to the bottom, or add button to see more?
    return (
      <div className="relative" ref={ref}>
        <div className="relative w-full sm:w-fit h-fit sm:h-full">
          <div id="sidebar-wrap" className="h-full">
            <div
              id="sidebar"
              className={cn(
                "p-4 h-fit sm:h-full w-full sm:w-fit z-10 pb-4",
                className
              )}
            >
              {children}
            </div>
          </div>
        </div>
      </div>
    );
  }
);

Sidebar.displayName = "Sidebar";

export default Sidebar;
