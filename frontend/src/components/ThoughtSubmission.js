import React, { useState } from 'react';
import Footer from './Footer';
import thought from "./img/experts.svg";
import './assets/thoughts.css';
import { Link } from "react-router-dom";
import join from './images/join.svg';
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
    <h1 className='subHead'>Share Your Thought</h1>
    <div className='experience_container'>
    
    <img src={join} alt="Thoughts" />
      <div className='subForm'>
      
   
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
      <Link className="button button-outline commButton" to="/thoughts">Community Posts</Link>
    </div>
    </div>
    <Footer/>
    </>
  );
}

export default ThoughtSubmission;
