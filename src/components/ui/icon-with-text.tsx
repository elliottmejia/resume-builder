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
  showTitle?: boolean;
};

const IconWithText = (props: IconWithTextProps) => {
  const {
    className,
    icon,
    title,
    showTitle = false,
    text,
    src,
    type,
    target,
    children,
  } = props;
  return (
    <div className="icon-with-text flex items-center gap-2">
      <div className={cn("flex flex-inline font-bold items-center", className)}>
        <Icon icon={icon} />
        {showTitle && ` ${title}`}
      </div>
      <div>
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
      </div>
    </div>
  );
};

export default IconWithText;
