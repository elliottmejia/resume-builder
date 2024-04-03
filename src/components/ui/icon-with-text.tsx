import { Icon } from "@iconify/react";
import { cn } from "lib/utils";

type IconWithTextProps = {
  icon: string;
  title?: string;
  text: string;
  src?: string;
  type?: string;
  className?: string;
  target?: string;
};

const IconWithText = ({
  icon,
  title,
  text,
  src,
  type,
  className,
  target,
}: IconWithTextProps) => {
  !target && target === "_blank";
  return (
    <>
      <div className={cn("flex flex-inline font-bold items-center", className)}>
        <Icon icon={icon} />
        &nbsp;{title}
      </div>
      {src ? (
        <a href={src} type={type} target={target} className="text-sm">
          {text}
        </a>
      ) : (
        <p className="text-sm">{text}</p>
      )}
    </>
  );
};

export default IconWithText;
