import {
  Dialog,
  DialogContent,
  // DialogDescription,
  // DialogHeader,
  // DialogTitle,
  DialogTrigger,
} from "components/ui/dialog";
import { cn } from "lib/utils";

interface Props extends React.PropsWithChildren {
  title?: string;
  trigger?: React.ReactNode | string | "";
  header?: React.ReactNode | string | "";
  description?: React.ReactNode | string | "";
  children?: React.ReactNode;
  className?: string;
  triggerClass?: string;
  contentClass?: string;
}

const Mail: React.FC<Props> = ({
  // title,
  children,
  trigger,
  // header,
  // description,
  className,
  triggerClass,
  contentClass,
}) => {
  return (
    <div className={cn("", className)}>
      <Dialog>
        <DialogTrigger className={triggerClass}>
          {trigger || "Mail me"}
        </DialogTrigger>
        <DialogContent className={contentClass}>{children}</DialogContent>
      </Dialog>
    </div>
  );
};

export default Mail;
