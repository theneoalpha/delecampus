import React, { useState } from 'react';

function ThoughtSubmission() {
  const [content, setContent] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:8000/thought', { // Adjust the port if necessary
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
    <div>
      <h1>Share Your Thought</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="What's on your mind?"
          required
        ></textarea>
        <button type="submit">Share</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ThoughtSubmission;
