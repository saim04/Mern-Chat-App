import useGetMessages from "../../hooks/useGetMessages";
import MessageSkeleton from "../skeletons/MessageSkeletons";
import Message from "./Message";
import { useEffect, useRef } from "react";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  console.log("MESSAGES", messages);
  const lastMsgRef = useRef(null);
  useEffect(() => {
    if (lastMsgRef.current) {
      lastMsgRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message, i) => (
          <div key={message._id}>
            <Message message={message} />
            {i === messages.length - 1 && <div ref={lastMsgRef}></div>}
          </div>
        ))}

      {loading && [...Array(5)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};
export default Messages;
