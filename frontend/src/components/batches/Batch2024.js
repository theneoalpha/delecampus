import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

import "../assets/cards.css";
import "./batch.css";

import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import VerifiedIcon from "@mui/icons-material/Verified";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export default function Batch2024() {
  const team = [
    {
      name: "Vikash Kaushik",
      src: "https://pbs.twimg.com/profile_images/1784856757527076864/qClEWx8X_400x400.jpg",
      linkedin: "https://www.linkedin.com/in/vikashkaushik79/",
      email: "vikashkaushik910@gmail.com",
      github: "https://github.com/theneoalpha",
      instagram: "https://instagram.com/_vikashkaushik/",
    },
    {
      name: "Avinash Singh",
      src: require("../stud/2024/avinash.jpg"),
      linkedin: "",
      email: "avinash1221@gmail.com",
      github: "",
      instagram: "https://www.instagram.com/avinash__117/",
    },
    {
      name: "Tikesh Usendi",
      src: require("../stud/2024/tikesh.jpg"),
      linkedin: "",
      email: "tikeshbhilai1234@gmail.com",
      github: "",
      instagram: "https://instagram.com/itst_ikesh/",
    },
    {
      name: "Tushar Sahu",
      src: require("./image/boy.jpg"),
      linkedin: "https://www.linkedin.com/in/tushar-sahu-6b15b4231/",
      email: "tusharsahu0212@gmail.com",
      github: "",
      instagram: "",
    },
    {
      name: "Neetish Yadu",
      src: require("../stud/2024/neetish.jpg"),
      linkedin: "",
      email: "neetishyadu123456@gmail.com",
      github: "",
      instagram: "https://www.instagram.com/neetishyadu/",
    },
    {
      name: "Dushyant Verma",
      src: require("../stud/2024/dushyant.jpg"),
      linkedin: "https://www.linkedin.com/in/dushyant-verma-3679021bb/",
      email: "dushyantkuverma2001@gmail.com",
      github: "",
      instagram: "https://www.instagram.com/dush_yantverma/",
    },
    {
      name: " Derhu Joshi",
      src: require("./image/boy.jpg"),
      linkedin: "",
      email: "dpiitian181149@gmail.com",
      github: "",
      instagram: "https://www.instagram.com/thejoshi31/",
    },
    {
      name: "Riddhi Netam",
      src: require("./image/girl.jpg"),
      linkedin: "",
      email: "netamriddhi@gmail.com",
      github: "",
      instagram: "https://www.instagram.com/netam_riddhi/",
    },
    {
      name: "Damini Sahu",
      src: require("../stud/2024/damini.jpg"),
      linkedin: "",
      email: "daminisahu2608@gmail.com",
      github: "",
      instagram: "https://www.instagram.com/sdamini293/",
    },
    {
      name: "Ajay Patel",
      src: require("../stud/2024/ajay.jpg"),
      linkedin: "https://www.linkedin.com/in/ajay-patel-9b4125222/",
      email: "ajaypatel30080@gmail.com",
      github: "",
      instagram: "https://www.instagram.com/ajaykashyap_a01/",
    },
    {
      name: "Lisha Palia",
      src: require("../stud/2024/lisha.jpg"),
      linkedin: "",
      email: "lisha.palia@gmail.com",
      github: "",
      instagram: "https://www.instagram.com/er.lishapalia/",
    },
    {
      name: "Dooman Maitry",
      src: require("../stud/2024/dooman.jpg"),
      linkedin: "",
      email: "doomanmaitry287@gmail.com",
      github: "",
      instagram: "https://www.instagram.com/dooman.maitry/",
    },
    {
      name: "Aayush Verma",
      src: require("../stud/2024/aayush.jpg"),
      linkedin: "",
      email: "aayushverma1708@gmail.com",
      github: "",
      instagram: "https://www.instagram.com/aayush__verma__21/",
    },
    {
      name: "Ankit Kumar Jha",
      src: require("../stud/2024/ankit.jpg"),
      linkedin: "",
      email: "akjha12345@gmail.com",
      github: "",
      instagram: "https://www.instagram.com/ajkj0816/",
    },
    {
      name: "Japneet Singh Dadiala",
      src: require("../stud/2024/japneet.jpg"),
      linkedin: "",
      email: "japneetsinghjdp@gmail.com",
      github: "",
      instagram: "https://www.instagram.com/japneet_singh_at_jdp/",
    },
    {
      name: "Khageshwar Nag",
      src: require("../stud/2024/khageshwar.jpg"),
      linkedin: "",
      email: "khageshwarnag31@gmail.com",
      github: "",
      instagram: "https://www.instagram.com/k.n._vinayak_31/",
    },
  ];

  return (
    <>
      <Navbar />

      
      <div className="batch_container">
      <div>
        <h1>Batch 2020-24</h1>
      </div>
        <div className="row ">
          {team.map((teammate, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div >
              <div className="our-team">
                <div className="picture">
                  <img
                    className="img-fluid"
                    src={teammate.src}
                    alt={`${teammate.name}'s Profile`}
                  />
                </div>
                <div className="team-content">
                  <h3 className="name">
                    {teammate.name}{" "}
                    {teammate.name === "Vikash Kaushik" && <VerifiedIcon />}
                  </h3>
                  <h4 className="title">Batch 2020-24(IT)</h4>
                </div>
                <ul className="social">
                  {teammate.linkedin && teammate.linkedin !== "" && (
                    <li>
                      <a
                        href={teammate.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <LinkedInIcon />
                      </a>
                    </li>
                  )}
                  <li>
                    <a href={`mailto:${teammate.email}`}>
                      <EmailIcon />
                    </a>
                  </li>
                  {teammate.github && teammate.github !== "" && (
                    <li>
                      <a
                        href={teammate.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <GitHubIcon />
                      </a>
                    </li>
                  )}
                  {teammate.instagram && teammate.instagram !== "" && (
                    <li>
                      <a
                        href={teammate.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <InstagramIcon />
                      </a>
                    </li>
                  )}
                </ul>
              </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
