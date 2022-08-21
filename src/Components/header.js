import { Navbar, NavbarBrand, Nav, NavItem,Button,Row,Col } from "react-bootstrap";
import { Lightbulb, LightbulbFill, List} from "react-bootstrap-icons";
import {NavLink, Link} from "react-router-dom";

import { useState } from "react";
import SsHeader from "./smallScreenheader";

export default function Header(props){

    const [showOff, setShowOff] = useState(false)
    function handleOffcanvasNav(){
        setShowOff(prevState => !prevState)
    }
    return(
        <div>
            <Navbar  className={props.setTheme.navshade}>
                <Button variant="dark" onClick={handleOffcanvasNav} className='d-md-none'>
                        <List size={30}/>
                    </Button>
                <NavbarBrand className="ps-5">
                    <NavLink to='/' className={props.setTheme.Navlink}>
                        akbar
                    </NavLink>
                </NavbarBrand>
                <Nav className=" mx-auto d-none d-md-block col-8">
                    <Row >
                        <Col className="col-auto mx-auto">
                            <NavItem>
                                <NavLink to='/home'
                                className={props.setTheme.Navlink}> Home</NavLink>
                                
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
                <Nav className="ms-auto pe-5">
                    <NavItem>
                        <NavLink to='#'
                        className={props.setTheme.Navlink}
                        onClick={props.toggleTheme}>
                        
                            <Row>
                                <Col className="col-auto">
                                <h6>Theme :</h6>
                                </Col>
                                <Col className="col-auto">
                                    <LightbulbFill
                                        color={props.isDark? "red" : "blue" }
                                        
                                        className='pb-1'
                                        size={15}/>
                                    </Col>
                            </Row>
                        </NavLink>
                    </NavItem>
                    
                   
                </Nav>

                
                
            </Navbar>

            <SsHeader show={showOff} onHide={handleOffcanvasNav} />
        </div>
    )
}