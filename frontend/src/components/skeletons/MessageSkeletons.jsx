const MessageSkeleton = () => {
  return (
    <>
      <div className="flex gap-3 items-center">
        <div className="w-10 h-10 rounded-full bg-gray-600 animate-pulse shrink-0"></div>
        <div className="flex flex-col gap-1">
          <div className="h-4 w-40 bg-gray-600 animate-pulse rounded"></div>
          <div className="h-4 w-40 bg-gray-600 animate-pulse rounded"></div>
        </div>
      </div>
      <div className="flex gap-3 items-center justify-end">
        <div className="flex flex-col gap-1">
          <div className="h-4 w-40 bg-gray-600 animate-pulse rounded"></div>
        </div>
        <div className="w-10 h-10 rounded-full bg-gray-600 animate-pulse shrink-0"></div>
      </div>
    </>
  );
};

export default MessageSkeleton;
