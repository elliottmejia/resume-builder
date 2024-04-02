type Props = {
  color: string;
};

const Cutout = ({ color }: Props) => {
  return <svg fill={color} className="absolute  bg-black w-100 h-10"></svg>;
};

export default Cutout;
