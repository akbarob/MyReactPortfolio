import { Navbar, NavbarBrand, Nav, NavItem,Button,Row,Col,Image } from "react-bootstrap";
import { FilterCircle, FilterLeft, FilterSquare, Lightbulb, LightbulbFill, ListUl} from "react-bootstrap-icons";
import {NavLink, Link} from "react-router-dom";

import { useState } from "react";
import SsHeader from "./smallScreenheader";

export default function Header(props){

    const [showOff, setShowOff] = useState(false)
    function handleOffcanvasNav(){
        setShowOff(prevState => !prevState)
    }
    return(
            <Navbar bg={props.isDark? 'dark':'light'} className={props.setTheme.navshade} >
                <Button variant={props.isDark? 'danger': 'warning'} onClick={handleOffcanvasNav} className='d-md-none shadow-none'>
                        <FilterLeft size={30}/>
                    </Button>
                <NavbarBrand className="ms-5 ps-5" >
                    <Link to="/home">
                        <Image src="/images/akbarbadmus-logo2.png" style={{width: 80}} />
                        </Link>
                </NavbarBrand>
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
                <Nav className="ms-auto  me-2">
                    <NavItem
                    onClick={props.toggleTheme}
                    className="theme mt-1 me-5">
                            <Row>
                                <Col className="col-7 mx-auto ">
                                <h6 className="theme">Theme:</h6>
                                </Col>
                                <Col className="">
                                    <LightbulbFill
                                        color={props.isDark? "red" : "blue" }
                                        
                                        className='pb-1'
                                        size={15}/>
                                    </Col>
                            </Row>
                        
                    </NavItem>
                    
                    <SsHeader show={showOff} onHide={handleOffcanvasNav} setTheme={props.setTheme} isDark={props.isDark} toggleTheme={props.toggleTheme}/>

                </Nav>

                
                
            </Navbar>

        
    )
}