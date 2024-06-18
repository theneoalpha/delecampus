import React, { useState } from 'react';
import { Link } from "react-router-dom";
import "../components/assets/thoughts.css";
import Footer from './Footer';
import thought from "./img/thought.svg";
import Navbar from './Navbar';
function ThoughtSubmission() {
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://delecampus.vercel.app/thought', { // Adjust the port if necessary
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ content }),
      });

      if (response.ok) {
        setMessage('Thought shared successfully!');
        setContent('');
      } else {
        setMessage('Failed to share thought');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred');
    }
  };

  return (
    <>
    <Navbar/>
    <div className='experience_container'>
    <img src={thought} alt="Thoughts" />
      <div >
      
      <h1>Share Your Thought</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          required
        ></textarea>
        <button className='button button-outline' type="submit">Share</button>
      </form>
      {message && <p>{message}</p>}
      <Link className="button button-outline" to="/thoughts">Community Posts</Link>
    </div>
    </div>
    <Footer/>
    </>
  );
}

export default ThoughtSubmission;
