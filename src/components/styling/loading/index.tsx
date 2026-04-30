import { Skeleton } from "ui/skeleton";

const Loading = () => {
  return (
    <div
      id="splash"
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-black"
    >
      <Skeleton className="w-20 h-20" />
    </div>
  );
};

export default Loading;
