import React from 'react';
import Navbar from '../Navbar';
import Footer from '../Footer';


import '../assets/cards.css';
import './batch.css';

import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import VerifiedIcon from '@mui/icons-material/Verified';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function Batch2026() {
  const team = [ {
    name: 'Yash Gupta',
    src: require('../stud/2026/yash.jfif'),
    linkedin: 'https://linkedin.com/in/yash-gupta-004499256',
    email: 'guptayash.hg@gmail.com',
    github: 'https://github.com/Yash-gupta-3732',
    instagram: '',
  }, {
    name: 'Amit Kumar Koram',
    src: require('../stud/2026/amit.jpg'),
    linkedin: 'https://in.linkedin.com/in/amit-koram-8934a02b6',
    email: 'amitkumarkoram69@gmail.com',
    github: '',
    instagram: 'https://www.instagram.com/amit__23.__',
  },
  {
    name: 'Nitin Kumar Kashyap',
    src: require('../stud/2026/nitin.jpg'),
    linkedin: '',
    email: 'nitinkkashyap273@gmail.com',
    github: '',
    instagram: 'https://www.instagram.com/mr.nikk_27/',
  }
 
  ]
   
  

  return (
    <>
      <Navbar />

      <div className="batch_container">
        <div className='row'>
        {team.map((teammate, index) => (

        <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="our-team">
              <div className="picture">
                <img className="img-fluid" src={teammate.src} alt={`${teammate.name}'s Profile`} />
              </div>
              <div className="team-content">
              <h3 className="name">
                  {teammate.name} {teammate.name === 'Vikash Kaushik' && <VerifiedIcon />}
                </h3>
                <h4 className="title">Batch 2022-26(IT)</h4>
              </div>
              <ul className="social">
              {teammate.linkedin && teammate.linkedin !== '' && (
                  <li>
                    <a href={teammate.linkedin} target="_blank" rel="noopener noreferrer">
                      <LinkedInIcon />
                    </a>
                  </li>
                )}
                <li>
                  <a href={`mailto:${teammate.email}`}>
                    <EmailIcon />
                  </a>
                </li>
                {teammate.github && teammate.github !== '' && (
                  <li>
                    <a href={teammate.github} target="_blank" rel="noopener noreferrer">
                      <GitHubIcon />
                    </a>
                  </li>
                )}
                {teammate.instagram && teammate.instagram !== '' && (
                  <li>
                    <a href={teammate.instagram} target="_blank" rel="noopener noreferrer">
                      <InstagramIcon />
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </div>
        ))}
      </div>
      </div>

      <Footer />
    </>
  );
}
