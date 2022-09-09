import { Image,Navbar,NavbarBrand, Nav, NavItem, NavDropdown,Container,InputGroup ,FormControl, Offcanvas, OffcanvasHeader, OffcanvasBody,OffcanvasTitle,Button, Accordion, Row, Col, Modal} from "react-bootstrap";
import {NavLink, Link} from "react-router-dom";
import { LightbulbFill, XLg } from "react-bootstrap-icons";

export default function SsHeader(props){
    return(
        <Offcanvas className={props.isDark? 'off-navi':''} show={props.show} onHide={props.onHide}>
            <Offcanvas.Header >
                <NavbarBrand className="mx-auto ps-5">
                        <Image src="/images/akbarbadmus-logo2.png" style={{width: 80}} />
                </NavbarBrand>
                 <XLg className={props.setTheme.color}
                    onClick={props.onHide}/>
            </Offcanvas.Header>
            <Navbar>
                <Nav className=" mx-auto ">
                    
                        <Col className="col-auto mx-auto ">
                            <NavItem className="my-5">
                                <NavLink to="/home"
                                className={props.setTheme.Navlink}
                                onClick={props.onHide}> Home

                                </NavLink>
                                
                            </NavItem>
                            <NavItem className="my-5">
                                <NavLink to='/about'
                                className={props.setTheme.Navlink}
                                onClick={props.onHide}> About Me</NavLink>
                                
                            </NavItem>
                            <NavItem className="my-5">
                                <NavLink to='/projects'
                                className={props.setTheme.Navlink}
                                onClick={props.onHide}> Projects</NavLink>

                            </NavItem>
                            
                        </Col>
                </Nav>
                
            </Navbar> 
            <Nav className="mx-auto mt-auto">
                    <NavItem
                    onClick={props.toggleTheme}
                    className="theme mt-1 text-center">
                            <Row>
                                <Col className="col-7 mx-auto ">
                                <h6 className={props.setTheme.color}>Theme:</h6>
                                </Col>
                                <Col className="c">
                                    <LightbulbFill
                                        color={props.isDark? "brown" : "yellow" }
                                        
                                        className='pb-1'
                                        size={15}/>
                                    </Col>
                            </Row>
                        
                    </NavItem>
                    
                   
                </Nav> 
            <div className="mt-auto">
                    <div className={props.setTheme.footer}>
                    <p className="">made with 🤎 by Akbar Badmus</p>
                    <p> akbarbadmus ™️ 2022. </p>
                    </div>   
            </div> 
                      
        </Offcanvas>
    )
}