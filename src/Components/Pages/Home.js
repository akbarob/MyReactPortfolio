import {Row, Col, Image, Button, } from 'react-bootstrap'
import { Github, Instagram, Twitter, Linkedin, Behance } from 'react-bootstrap-icons'
import {NavLink, Link} from "react-router-dom";
import {motion} from 'framer-motion'


export default function Home(props){
    
    
    return(
        <motion.div
            initial={{opacity:0, width:0}}
            animate={{opacity:1, width:"100%"}}
            exit={{opacity:0, x:window.innerWidth, transition:{duration:0.5}}}
            style={{minHeight: "90vh"}} className="container d-flex justify-content-center align-items-center">
            <Row className='text-center '> 
                <Col className='col-12 col-md-5 mx-auto mb-5'>
                    <div className='user-bg  d-flex justify-content-center mx-auto my-auto'>
                        <Image className='pic user img-fluid align-self-center' src='images/me.png'/>
                    </div>

                    

                </Col>
                <Col className='col-12  col-md-7  mx-auto'>
                <h1>Hello, I'm Akbar <span className='hand'>🤚</span></h1>
                <h4>I'm a Front-end devloper</h4>
                <ul className='list-unstyled my-4 '>
                    <li> 💻 Developer</li>
                    <li> 👨‍💻 UI Desinger</li>
                    
                    <li >📧<a href="mailto:akbarbadmus07@gmail.com" className={props.setTheme.a}> Contact me</a> </li>
                    <li>📄<a href="Cv/Akbar React Cv.pdf" download="Akbar React Cv" target='_blank' className={props.setTheme.a}>  Resume
                    </a></li>

                </ul>
                <div className="col-12 text-center">
                    <Button variant="outline-dark" className="border-0 shadow-none" href='https://github.com/akbarob' target='_blank'><Github size={30}/></Button>
                    <Button  variant="outline-primary" className="border-0 shadow-none" href='https://www.linkedin.com/in/akbar-badmus-10790a179/' target='_blank' ><Linkedin size={30}/></Button>
                    <Button  variant="outline-primary" className="border-0 shadow-none" href='https://www.behance.net/akbarbadmus' target='_blank'><Behance size={30}/></Button>
                </div>

                
                </Col>
            </Row>
        </motion.div>
    )
}