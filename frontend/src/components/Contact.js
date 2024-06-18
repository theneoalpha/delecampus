import React, { useState } from "react";
import axios from 'axios';
import Navbar from "./Navbar";
import contact from "../images/boy.svg";
import "../components/assets/contact.css";
import Footer from "./Footer";
import LinkedIn from "@mui/icons-material/LinkedIn";

export default function Contact() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    skill: "",
    ig_username: "",
    linkedIn:"",
    twitter:"",
    github:"",
    password:"",
    cpassword:""
    
    
  });

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name,  email, skill, ig_username, linkdin, twitter, github, password, cpassword } = user;

    try {
      const res = await fetch("/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          skill,
          ig_username,
          linkdin,
          twitter,
          github,
          password,
          cpassword
          
        }),
      });

      const data = await res.json();

      if (res.status === 422 || !data) {
        window.alert("Invalid Message");
        console.log("Invalid Message");
      } else {
        window.alert("User Registered Successfully");
        
        console.log("User Registered Successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />
      <section className="contact">
        <div className="container mt-5">
          <h1>Enroll Now</h1>
          <div className="contact-content">
            <img src={contact} alt="contact illustration" />
            <div className="contact-form">
              <form method="POST" className="contactpage-form">
                <div className="first">
                  <div className="form-group">
                    <label htmlFor="name"></label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      placeholder="Enter Your name   *"
                      value={user.name}
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email"></label>
                    <input
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Email Address   *"
                      value={user.email}
                      onChange={handleInputs}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="skill"></label>
                    <input
                      type="text"
                      name="skill"
                      id="skill"
                      placeholder="Skills    *"
                      value={user.skill}
                      onChange={handleInputs}
                    />
                  </div>
                </div>
                <div className="second">
                  <div className="form-group">
                    <label htmlFor="ig_username"></label>
                    <input
                      type="text"
                      name="ig_username"
                      id="ig_username"
                      placeholder="Instagram Link"
                      value={user.ig_username}
                      onChange={handleInputs}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="linkdin"></label>
                    <input
                      type="text"
                      name="linkdin"
                      id="linkdin"
                      placeholder="LinkedIn Profile"
                      value={user.linkdin}
                      onChange={handleInputs}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="twitter"></label>
                    <input
                      type="text"
                      name="twitter"
                      id="twitter"
                      placeholder="Batch"
                      value={user.twitter}
                      onChange={handleInputs}
                    />
                  </div>
                </div>
                <div className="third">
                  <div className="form-group">
                    <label htmlFor="github"></label>
                    <input
                      type="text"
                      name="github"
                      id="github"
                      placeholder="Github Profile"
                      value={user.github}
                      onChange={handleInputs}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="password"></label>
                    <input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password   *"
                      value={user.password}
                      onChange={handleInputs}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cpassword"></label>
                    <input
                      type="password"
                      name="cpassword"
                      id="cpassword"
                      placeholder="Confirm Password    *"
                      value={user.cpassword}
                      onChange={handleInputs}
                    />
                  </div>
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="contact"
                    value="Submit"
                    className="submit"
                    onClick={handleSubmit}
                  />
                </div>
                <div>
                  <h6>* Batch is in the numeric form only eg. 2020-24</h6>
                  <h6>* If you don't have any social media account simply leave it blank.</h6>
                  <h6>" * " Fields are mandatory</h6>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
