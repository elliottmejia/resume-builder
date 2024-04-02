type Props = {
  children: React.ReactNode;
};

const Sidebar = ({ children }: Props): React.ReactElement => {
  return (
    <div className="relative w-fit h-full">
      <div id="sidebar-wrap" className="h-full">
        <div
          id="sidebar"
          className="p-1 h-full w-fit bg-white border-left-2 border-black z-10"
        >
          {children}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
