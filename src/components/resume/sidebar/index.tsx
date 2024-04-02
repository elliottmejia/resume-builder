type Props = {
  children: React.ReactNode;
};

const Sidebar = ({ children }: Props): React.ReactElement => {
  const ContainerClasses = "bg-slate-200 p-1 h-inherit w-fit";
  return (
    <div id="sidebar" className={ContainerClasses}>
      {children}
    </div>
  );
};

export default Sidebar;
