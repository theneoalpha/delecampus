// ThoughtList.js
import "../components/assets/thoughts.css";
import Footer from './Footer';

import Navbar from './Navbar';
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import experts from "./img/experts.svg";

const ThoughtList = () => {
    const [thoughts, setThoughts] = useState([]);

    useEffect(() => {
        const fetchThoughts = async () => {
            try {
                const response = await fetch('/thoughts');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const data = await response.json();
                setThoughts(data);
            } catch (error) {
                console.error('Error fetching thoughts:', error);
            }
        };

        fetchThoughts();
    }, []);

    return (
        <>
         <Navbar/>
        <div>
          
            <div className="thoughts_container ">
            <h1>Community Posts</h1>
                <div className="thoughts_page">
                    <img src={experts} />
                    <ul>
                        {thoughts.map(thought => (
                            <div className="message-orange">   <li key={thought._id}>{thought.content}</li> </div>
                            
                        ))}
                    </ul>
            </div>
            <br></br>
            <Link className="button button-outline" to="/thought">Share Knowledge</Link>
           
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default ThoughtList;
