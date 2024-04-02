import { Icon } from "@iconify/react";

type IconWithTextProps = {
  icon: string;
  title?: string;
  text: string;
  src?: string;
};

const IconWithText = ({ icon, title, text, src }: IconWithTextProps) => {
  return (
    <>
      <div className="flex flex-inline font-bold items-center">
        <Icon icon={icon} />
        &nbsp;{title}
      </div>
      <p>{src ? <a href={src}>{text}</a> : <span>{text}</span>}</p>
    </>
  );
};

export default IconWithText;