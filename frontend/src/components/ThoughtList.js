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
                const response = await fetch('https://delecampus.vercel.app/thoughts'); // Ensure this URL is correct

                console.log('Response headers:', response.headers); // Log response headers

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const contentType = response.headers.get('content-type');
                console.log('Content-Type:', contentType); // Log content type

                if (!contentType || !contentType.includes('application/json')) {
                    const textResponse = await response.text();
                    console.error('Non-JSON response:', textResponse); // Log the non-JSON response
                    throw new TypeError("Received non-JSON response");
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
            <Navbar />
            <div>
                <div className="thoughts_container">
                    <h1>Community Posts</h1>
                    <div className="thoughts_page">
                        <img src={experts} alt="experts" />
                        <ul>
                            {thoughts.map(thought => (
                                <div className="message-orange" key={thought._id}>
                                    <li>{thought.content}</li>
                                </div>
                            ))}
                        </ul>
                    </div>
                    <br />
                    <Link className="button button-outline" to="/thought">Share Knowledge</Link>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ThoughtList;
