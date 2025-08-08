import { useState } from "react";
import { useSocketContext } from "../../context/SocketContext";
import useConversation from "../../zustand/useConversation";

const Conversation = ({ key, conversation, emoji, lastIndex }) => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const { onlineUsers } = useSocketContext();
  const [imageError, setImageError] = useState(false);

  const isSelected = selectedConversation?._id === conversation._id;
  const isOnline = onlineUsers.includes(conversation._id);

  const handleImageError = () => {
    setImageError(true);
  };

  const getInitials = (fullName) => {
    if (!fullName) return "U";
    return fullName
      .split(" ")
      .map((name) => name.charAt(0))
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  const hasValidProfilePic =
    conversation?.profilePic && conversation.profilePic.trim() !== "";

  return (
    <>
      <div
        key={key}
        className={`${
          isSelected ? "bg-sky-500" : ""
        } flex gap-2 items-center hover:bg-sky-500 rounded p-2 py-1 cursor-pointer`}
        onClick={() => setSelectedConversation(conversation)}
      >
        <div className={`avatar ${isOnline ? "online" : ""}`}>
          <div className="w-12 mr-2 h-12 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500 to-purple-600 overflow-hidden">
            {hasValidProfilePic && !imageError ? (
              <img
                src={conversation.profilePic}
                alt={`${conversation?.fullName || "User"} avatar`}
                loading="lazy"
                onError={handleImageError}
                className="w-full h-full object-cover"
              />
            ) : (
              <span
                className="w-full h-full text-white font-bold text-md select-none"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {getInitials(conversation?.fullName)}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-200">
              {conversation?.fullName || "Unknown User"}
            </p>
            <span className="text-xl">{emoji}</span>
          </div>
        </div>
      </div>

      {!lastIndex && <div className="divider my-0 py-0 h-1" />}
    </>
  );
};

export default Conversation;
