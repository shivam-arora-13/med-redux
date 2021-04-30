import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./Navbar.css";
import {Navbar , Nav , Button } from 'react-bootstrap';
import logo from './logo3.png';
import {connect} from "react-redux";

function Header(props) {
    
    return (
        <div>
            <Navbar expand="lg" variant="light" className="main-navbar-hf">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" variant="outline-primary" className="toggle-navbar-icon-hf" />
                <Navbar.Brand href="/" className="brand-span-hf">
                    <img alt="" src={logo} className="d-inline-block align-top logo-image-hf" />{' '}
                    <Navbar.Brand href="#home" className="navbar-brand-name-hf">
                        <span>
                            MEDONOR
                        </span>
                    </Navbar.Brand>
                </Navbar.Brand>
                
                <Navbar.Collapse id="responsive-navbar-nav" className="nav-links-section-hf">
                    <Nav className="justify-content-center"></Nav>
                    <Nav className="mr-auto ">
                        
                        <Nav.Link href="/" className="navbar-main-links-hf   ">
                            <span className="navbar-nav-links-hf hm ">Home</span>
                        </Nav.Link>
                        <Nav.Link eventKey={2} href="/about" className="navbar-main-links-hf " >
                            <span className="navbar-nav-links-hf ">About us</span>
                        </Nav.Link>
                        <Nav.Link eventKey={3} href="/wth" className="navbar-main-links-hf " >
                            <span className="navbar-nav-links-hf ">Ways to Help</span>
                        </Nav.Link>
                     { props.role && <> 
                      <Nav.Link eventKey={4} href="/blog" className="navbar-main-links-hf " >
                            <span className="navbar-nav-links-hf ">Blog</span>
                        </Nav.Link>
                        
                        </>}
                      { props.role === null && <><Button variant="outline-light" href="/Signup" className="sign-in-btn-hf" inline style={{border: "1px solid #fff" , borderRadius:"20px"}}>Sign in</Button>{' '}</>} 
 </Nav>
                    
                    
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

const mapStateToProps = (state)=>{
    return {
        role : state.user.role
    }
}
export default connect(mapStateToProps)(Header);
