import React from 'react'
import Tilt from 'react-tilt'
import {motion} from 'framer-motion';

import {styles} from '../styles'
import { services } from "../constant";
import { fadeIn, textVariant } from "../utils/motion";


const About = () => {
  return (
   <>
   <motion.div varient={textVariant()}>
    <p className={styles.sectionSubText}> Introduction </p>
    <h2 className={styles.sectionHeadText}> Overview</h2>
   </motion.div>
   <motion.p varient={fadeIn('','',0.1,1)}>
   A  passionate web developer creating visually stunning and user-friendly websites. Proficient in a wide range of programming languages, frameworks, and content management systems, I possess a strong ability to translate clients' ideas into functional and responsive web solutions. With a solid foundation in front-end and back-end development, I excel at developing robust, scalable, and efficient web applications.
I am constantly staying up-to-date with emerging trends and technologies in the web development industry, allowing me to incorporate the latest innovations into my work. I am a problem solver by nature, adept at troubleshooting and debugging complex issues, ensuring smooth functionality and optimal performance.

   </motion.p>

   </>
  )
}

export default About