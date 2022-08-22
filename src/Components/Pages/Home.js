import {Row, Col, Image, Button, } from 'react-bootstrap'
import { Github, Instagram, Twitter, Linkedin, Behance } from 'react-bootstrap-icons'
import { propTypes } from 'react-bootstrap/esm/Image';
import {NavLink, Link} from "react-router-dom";

export default function Home(props){
    return(
        <div style={{minHeight: "90vh"}} className="container ">
            <Row className='align-items-center text-center'> 
                <Col className='col-12 col-md-5 mt-5 mx-auto'>
                    <div className='user-bg mx-auto d-flex align-items-center justify-content-center'>
                        <Image className='pic user img-fluid align-self-center' src='images/me.png'/>
                    </div>

                    

                </Col>
                <Col className='col-12 col-md-5 mt-5 mx-auto'>
                <h1>Hello, I'm Akbar <span className='hand'>🤚</span></h1>
                <h4>I'm a Front-end devloper</h4>
                <ul className='list-unstyled'>
                    <li> 💻 Developer</li>
                    <li> 👨‍💻 Desinger</li>

                    <li>📄<a href="Cv/Akbar React Cv.pdf" download="Akbar React Cv" target='_blank' className={props.setTheme.a}> Download Cv
                    </a></li>
                    <li >📧<a href="mailto:akbarbadmus07@gmail.com" className={props.setTheme.a}> Contact me</a> </li>

                </ul>
                <div className="col-12 text-center">
                    <Button variant="outline-primary" className="border-0"><Github size={30}/></Button>
                    <Button  variant="outline-primary" className="border-0" ><Linkedin size={30}/></Button>
                    <Button  variant="outline-warning" className="border-0 " ><Behance size={30}/></Button>
                </div>

                
                </Col>
            </Row>
        </div>
    )
}