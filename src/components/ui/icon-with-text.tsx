import { Icon } from "@iconify/react";
import { cn } from "lib/utils";

type IconWithTextProps = {
  icon: string;
  title?: string;
  text?: string;
  src?: string;
  type?: string;
  className?: string;
  target?: string;
  children?: React.ReactNode;
};

const IconWithText = (props: IconWithTextProps) => {
  const { className, icon, title, text, src, type, target, children } = props;
  return (
    <>
      <div className={cn("flex flex-inline font-bold items-center", className)}>
        <Icon icon={icon} />
        &nbsp;{title}
      </div>
      {src ? (
        <a
          href={src}
          type={type}
          target={target ? target : "_blank"}
          className="text-sm"
        >
          {children ? children : text}
        </a>
      ) : children ? (
        children
      ) : (
        <p className="text-sm">{text}</p>
      )}
    </>
  );
};

export default IconWithText;
