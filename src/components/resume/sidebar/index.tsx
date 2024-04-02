type Props = {
  children: React.ReactNode;
};

const Sidebar = ({ children }: Props): React.ReactElement => {
  const ContainerClasses =
    "p-1 h-full w-fit bg-white border-left-2 border-black z-10";
  return (
    <div id="sidebar-wrap">
      <div id="sidebar" className={ContainerClasses}>
        {children}
      </div>
    </div>
  );
};

export default Sidebar;
