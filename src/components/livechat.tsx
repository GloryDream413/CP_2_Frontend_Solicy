import React, { useState, useEffect } from 'react';
import socket from './socket';

interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'agent';
  timestamp: number;
}

interface ChatDialog {
  messages: ChatMessage[];
}

const ChatDialogComponent: React.FC<ChatDialog> = ({ messages }) => {
  const [currentMsg, setCurrentMsg] = useState('');
  const [chat, setChat] = useState<ChatMessage[]>([]);

  useEffect(() => {
    socket.on('message', (data: ChatMessage) => {
      setChat((prev) => [...prev, data]);
    });
  }, [socket]);

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (currentMsg !== '') {
      const msgData: ChatMessage = {
        id: Date.now().toString(),
        text: currentMsg,
        sender: 'user',
        timestamp: Date.now(),
      };
      await socket.emit('send_msg', msgData);
      setCurrentMsg('');
    }
  };

  return (
    <div className="chat-dialog">
      <div className="chat-messages">
        {chat.map((message, index) => (
          <div key={index} className="chat-message">
            <span className="chat-message-text">{message.text}</span>
            <span className="chat-message-sender">{message.sender}</span>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={currentMsg}
          onChange={(e) => setCurrentMsg(e.target.value)}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default ChatDialogComponent;