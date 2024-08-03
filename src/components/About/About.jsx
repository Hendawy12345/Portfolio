import React from 'react'
import Img from './canva.png'
import './About.css'
import { motion } from 'framer-motion';
export default function About() {
  return (
    <>
    
    <div className="container ">
      <div className="parent">
      <div className="left_side">
      <motion.div
            className="con"
            initial={{ x: '-100vw' }}
            animate={{ x: -100 }}
            transition={{ type: 'spring', stiffness: 10, duration: 2 }}
          >
            <div className="img">
            <img src={Img} alt="" />
            </div>
          </motion.div>
        </div>
        <div className="right_side">
          <h1>About <span style={{color :"#008cff"}}>Me</span></h1>
          <p className='about_me fs-5'>

          Hello! I'm <span style={{color :"#008cff"}}>Hasan Hendawy</span>, a dedicated Frontend Developer skilled in HTML, CSS, JavaScript, React, and Bootstrap. I have a strong foundation in web development, built through university courses and online certifications. While I haven't yet worked for a company, my portfolio demonstrates my ability to create responsive, interactive websites. I'm passionate about continuous learning and staying updated with the latest technologies. I'm eager to bring my skills and enthusiasm to a dynamic team. 

          </p>
          <div className="btn mt-4 ">
            <button id="btn_cv">Read More </button>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}
