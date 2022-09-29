import { Row,Col } from 'react-bootstrap'
import {motion, useAnimation} from 'framer-motion' 
import {AiFillHtml5} from 'react-icons/ai'
import {DiCss3} from 'react-icons/di'
import {IoLogoJavascript} from 'react-icons/io'
import {FaReact} from 'react-icons/fa'

import { Skills } from '../Info'

export default function AboutMe(){
  
        const boxVariant = {
            visible: { opacity: 1, scale: 1.1, x:0,transition:{duration:0.5} },
            hidden: { opacity: 0, scale: 0, x:'-50%' },
        }
        const logo = Skills.map(item => {
            return(
                <Row className='col-5 mx-auto my-2' >
                    <Col> <img src={item.img} className='logo-img '/> <br/> <h6 className="logo-name my-2">{item.skill}</h6></Col>
                </Row>
            )
        })
    return(
        <motion.div
            initial={{opacity:0, width:0}}
            animate={{opacity:1, width:"100%"}}
            exit={{opacity:0, x:window.innerWidth, transition:{duration:0.5}}}
            className="container my-5 " style={{minHeight: "80vh"}}>

            <motion.div 
            variants={boxVariant}
            initial="hidden"
            whileInView='visible'
            className="col-10 col-md-8 mx-auto about-bg"> 
                <h5 className="text-center ">About Me</h5>
                <p className="text-justify">Hello! I'm Akbar, a front-end developer from Nigeria. I love building web applications with React, and I'm currently studying server side. I am on a journey to make the world a better place while constantly learning daily .

                    I still don't know if it's "front-end", "frontend, or "front end", and at this point I'm too afraid to ask.</p>
            </motion.div>

            <motion.div 
             variants={boxVariant}
             initial="hidden"
             whileInView='visible'
             className="col-10 col-md-8 mx-auto about-bg text-center">
                <h5 className="text-center ">Skills</h5>
                <div className='row mx-auto'> {logo}</div>

            </motion.div>

            <motion.div 
             variants={boxVariant}
             initial="hidden"
             whileInView='visible'
          
             className="col-10 col-md-8 mx-auto about-bg ">
                <h5 className="text-center">Hobbies</h5>
                <p> While I am not coding or busy in the world you can catch me doing the following...</p>
                <ul className="list-unstyled offset-1">
                    <li>🎮  Playing video Games</li>
                    <li>♟️   Wining at Chess</li>
                    <li>⚽  Watching Footall</li>
                    <li>🎥  Watching (Quality) movies</li>
                </ul>
            </motion.div>




        </motion.div>
    )
}