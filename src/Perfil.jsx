import React from 'react'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import foto from '../src/assets/img/foto.png'

function MessageInput({ foto, username, onMessageSubmit }) {
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message.trim()) {
      const newPost = { id: uuidv4(), message: message.trim() };
      onMessageSubmit(newPost);
      setMessage('');
    }
  };

  return (
    <div className="flex">
      <img className='w-5vw' src={foto} alt="" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Write a message..."
        />
      </form>
      <div className="relative">
        <h3 className="ml-9 text-gray-400 mt-[-1vw]">@{username}</h3>
      </div>
    </div>
  );
}

function Message({ message }) {
  return <li>{message}</li>;
}

const Perfil()  {
    const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState('Andrea Zárate');
//   const [foto, setFoto] = useState(''); // assume you have a foto URL

  const handleMessageSubmit = (newPost) => {
    setPosts([...posts, newPost]);
  };


  return (
    <div>
      <MessageInput foto={foto} username={username} onMessageSubmit={handleMessageSubmit} />
      <ul>
        {posts.map((post) => (
          <Message key={post.id} message={post.message} />
        ))}
      </ul>
    </div>
  )
}

export default Perfil