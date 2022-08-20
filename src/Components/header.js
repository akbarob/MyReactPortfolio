import { Navbar, NavbarBrand, Nav, NavItem, NavLink, Button } from "react-bootstrap";
import { List} from "react-bootstrap-icons";

import { useState } from "react";
import SsHeader from "./smallScreenheader";

export default function Header(){

    const [showOff, setShowOff] = useState(false)
    function handleOffcanvasNav(){
        setShowOff(prevState => !prevState)
    }
    return(
        <div>
            <Navbar dark className="shadow-sm">
                <Button variant="dark" onClick={handleOffcanvasNav} className='d-lg-none'>
                        <List size={30}/>
                    </Button>
                <NavbarBrand>
                    akbar

                </NavbarBrand>
                <div className="d-none d-sm-block ">
                <Nav className="me-auto">
                    <NavItem>
                        <NavLink>Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>About Me</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink>Portfolio</NavLink>
                    </NavItem>
                </Nav>

                </div>
                
            </Navbar>

            <SsHeader show={showOff} onHide={handleOffcanvasNav} />
        </div>
    )
}