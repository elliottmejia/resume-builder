import { cn } from "lib/utils";
type Props = {
  children: React.ReactNode;
  className?: string;
};

const Sidebar = ({ children, className }: Props): React.ReactElement => {
  //TODO: Skills down to the bottom, or add button to see more?
  return (
    <div className="relative">
      <div className="relative w-full sm:w-fit h-fit sm:h-inherit">
        <div id="sidebar-wrap" className="h-full">
          <div
            id="sidebar"
            className={cn(
              "p-1 h-fit sm:h-full w-full sm:w-fit bg-white border-left-2 border-black z-10 pb-4",
              className
            )}
          >
            {children}
          </div>
        </div>
      </div>
      <div id="sidebar-after-polygon" className="hidden sm:block"></div>
    </div>
  );
};

export default Sidebar;
