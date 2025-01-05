import React, { useContext, useEffect, useState } from 'react';
import { Context, server } from '../index'; // Import context and server URL
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import "./GetMessages.css"

const GetMessages = () => {
  const { isAuthenticated } = useContext(Context);
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        if (isAuthenticated) {
          const { data } = await axios.get(`${server}/users/messages`, {
            withCredentials: true,
          });
          setMessages(data.messages);
        }
      } catch (error) {
        toast.error('Failed to fetch messages');
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, [isAuthenticated]);

  // Move the toast error message inside a useEffect to avoid triggering during render
  useEffect(() => {
    if (!isAuthenticated) {
      toast.error('Please login first');
    }
  }, [isAuthenticated]);

  // Redirect to login if the user is not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="messages-container">
      <h2>Your Messages</h2>
      {loading ? (
        <p>Loading messages...</p>
      ) : (
        <ul>
          {messages.length > 0 ? (
            messages.map((msg, index) => (
              <li key={index}>
                <p>{msg.message}</p>
                <small>{new Date(msg.createdAt).toLocaleString()}</small>
              </li>
            ))
          ) : (
            <p>No messages found</p>
          )}
        </ul>
      )}
    </div>
  );
};

export default GetMessages;
