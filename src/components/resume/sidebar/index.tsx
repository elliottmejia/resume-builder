type Props = {
  children: React.ReactNode;
};

const Sidebar = ({ children }: Props): React.ReactElement => {
  const ContainerClasses =
    "p-1 h-inherit w-fit bg-white border-left-2 border-black z-10";
  return (
    <div id="sidebar" className={ContainerClasses}>
      {children}
    </div>
  );
};

export default Sidebar;
