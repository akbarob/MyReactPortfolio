import { Navbar, NavbarBrand, Nav, NavItem,Button,Row,Col,Image, Container } from "react-bootstrap";
import { FilterCircle, FilterLeft, FilterSquare, Lightbulb, LightbulbFill, ListUl} from "react-bootstrap-icons";
import {NavLink, Link} from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";
import SsHeader from "./smallScreenheader";
export default function Header(props){
    
    const [showOff, setShowOff] = useState(false)
    function handleOffcanvasNav(){
        setShowOff(prevState => !prevState)
    }
    return(
            <Navbar bg={props.isDark? 'dark':'light'} className={props.setTheme.navshade} >
                <Container>
                
                <div className="px-2">
                    <Button variant = {props.isDark? 'danger': 'warning'} onClick={handleOffcanvasNav} className='d-md-none shadow-none'>
                            <FilterLeft size={30}/>
                        </Button>
                </div>
                
                <motion.div whileTap={{ scale: 0.9, }}>
                <NavbarBrand
                 className="mx-auto ps-5 mt-2" >
                    <Link to="/home">
                        <Image src="/images/logo-svg.svg" style={{width: 70}} />
                    </Link>
                </NavbarBrand>

                </motion.div>
                
                <Nav className=" mx-auto d-none d-md-block col-7">
                    <Row >
                        <Col className="col-auto mx-auto">
                            <NavItem>
                                <NavLink to='/home'
                                className={props.setTheme.Navlink} > Home</NavLink>
                                
                            </NavItem>
                        </Col>
                        <Col className="col-auto mx-auto">
                            <NavItem >
                                <NavLink to='/about'
                                className={props.setTheme.Navlink}> About Me</NavLink>
                                
                            </NavItem>
                        </Col>
                        <Col className="col-auto mx-auto">
                            <NavItem>
                                <NavLink to='/projects'
                                className={props.setTheme.Navlink}> Projects</NavLink>

                            </NavItem>
                            
                        </Col>
                    </Row>
                </Nav>
                <Nav className=" " >
                    <motion.div
                        whileTap={{ scale: 0.9, }} onClick={props.toggleTheme}>
                    <NavItem className="theme mt-2 me-auto">
                        <Row>
                            <Col className="col-7 mx-auto ">
                            <h6 className="theme">Theme:</h6>
                            </Col>
                            <Col className="">
                                <LightbulbFill
                                    color={props.isDark? "brown" : "yellow" }                                        
                                    className='pb-1'
                                    size={15}/>
                                </Col>
                        </Row>
                        
                    </NavItem>

                    </motion.div>
                    
                    
                    <SsHeader show={showOff} onHide={handleOffcanvasNav} setTheme={props.setTheme} isDark={props.isDark} toggleTheme={props.toggleTheme}/>

                </Nav>

                
                </Container>
            </Navbar>

        
    )
}