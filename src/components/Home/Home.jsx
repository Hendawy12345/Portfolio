import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Typewriter } from 'react-simple-typewriter';
import Img from './CANVA2.png';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="left">
          <h6>Software Developer</h6>
          <div className="text">
            <h1>Hello I'm </h1>
            <span>
              <Typewriter
                words={['Hasan Hendawy', 'Frontend Developer']}
                loop={false}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </div>
          <p className='fs-5'> I'm Frontend Developer skilled in HTML, CSS, JavaScript, React, and Bootstrap. I have a strong foundation in web development, built through university courses and online certifications. While I haven't yet worked for a company, my portfolio demonstrates my ability to create responsive, interactive websites. I'm passionate about continuous learning and staying updated with the latest technologies. I'm eager to bring my skills and enthusiasm to a dynamic team. </p>
          <div className="icon_btn">
            <div className="btn">
              <button id="btn_cv">Download CV</button>
            </div>
            <div className="icons">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className='icon' icon={faGithub} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className='icon' icon={faLinkedin} />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className='icon' icon={faTwitter} />
              </a>
              <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon className='icon' icon={faInstagram} />
              </a>
            </div>
          </div>
        </div>
        <div className="right">
          <motion.div
            className="con"
            initial={{ x: '100vw' }}
            animate={{ x: 0 }}
            transition={{ type: 'spring', stiffness: 10, duration: 2 }}
          >
            <img src={Img} alt="" />
          </motion.div>
        </div>
      </div>
    </>
  );
}
