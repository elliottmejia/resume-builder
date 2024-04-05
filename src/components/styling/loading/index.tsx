import { Skeleton } from "ui/skeleton";

const Loading = () => {
  return (
    <div
      id="splash"
      className="w-[100vh] h-[100vh] flex items-center justify-center bg-black"
    >
      <Skeleton className="w-20 h-20" />
    </div>
  );
};

export default Loading;
