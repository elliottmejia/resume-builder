import "./screentone.css";
import { forwardRef } from "react"; // Ensure React is in scope when using JSX
import { cn } from "src/lib/utils";

type Props = {
  className?: string;
  variant?: "default" | "dark";
  gradient?: boolean;
};

const Screentone = forwardRef<HTMLDivElement, Props>((props, ref) => {
  // Destructure props with default values
  const { className = "", variant, gradient = false } = props;

  // Use the variables directly, no need for the additional assignments

  return (
    <div
      ref={ref}
      className={cn(
        `${variant === "dark" ? "screentone-dark" : "screentone"} ${gradient && "screentone-opacity-gradient"} w-full h-full absolute top-0 left-0 z-0`,
        className
      )}
    ></div>
  );
});

export default Screentone;
