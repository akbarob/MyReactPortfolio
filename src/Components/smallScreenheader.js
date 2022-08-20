import { ListGroup,Navbar,NavbarBrand, Nav, NavItem, NavDropdown,Container,InputGroup ,FormControl, Offcanvas, OffcanvasHeader, OffcanvasBody,OffcanvasTitle,Button, Accordion, Row, Col, Modal} from "react-bootstrap";

export default function SsHeader(props){
    return(
        <Offcanvas show={props.show} onHide={props.onHide}>
            
            <Offcanvas.Header  closeButton></Offcanvas.Header>
                <h1>badmus</h1>
        </Offcanvas>
    )
}