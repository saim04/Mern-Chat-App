import { useState } from "react";
import useConversation from "../zustand/useConversation";
import toast from "react-hot-toast";
import { apiFetch } from "../utils/apiFetch"; // adjust path if needed

const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversation();

  const sendMessage = async (message) => {
    if (!selectedConversation?._id) {
      toast.error("No conversation selected");
      return;
    }

    setLoading(true);
    try {
      const data = await apiFetch(
        `/api/messages/send/${selectedConversation._id}`,
        {
          method: "POST",
          body: JSON.stringify({ message }),
        }
      );

      setMessages([...messages, data]);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { sendMessage, loading };
};

export default useSendMessage;
