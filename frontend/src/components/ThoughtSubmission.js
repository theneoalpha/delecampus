import React, { useState } from 'react';
import "../components/assets/thoughts.css";
import Navbar from "./Navbar.js";
import { Link } from "react-router-dom";
import Footer from "./Footer";

export default function ThoughtSubmission() {
  const [thought, setThought] = useState({
    content: ''
  });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setThought({ ...thought, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { content } = thought;

    try {
      const res = await fetch("/thought", { // Using the relative URL
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content
        }),
      });

      const data = await res.json();

      if (res.status === 422 || !data) {
        window.alert("Invalid Message");
        console.log("Invalid Message");
      } else {
        window.alert("Successfully Posted in Community");
        console.log("Successfully Posted in Community");
        setThought({ content: '' }); // Clear the input field after successful submission
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <div className='experience_container'>
        <h1>Share on Community</h1>
        <form onSubmit={handleSubmit}>
          <textarea
            name="content"
            value={thought.content}
            onChange={handleInput}
            placeholder="What's on your mind?"
            required
            style={{ width: '400px', height: '200px' }} // Inline styles to increase width and height
          ></textarea>
          <button type="submit" className='button button-outline thoughtbutton'>Share</button>
        </form>
        <Link className="button button-outline" to="/thoughts">See Community Posts</Link>
      </div>
      <Footer />
    </>
  );
}
