import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Modal, Navbar, Nav, Form, Button, FormControl, NavDropdown } from 'react-bootstrap'
import useWindowSize from '@rehooks/window-size';

function  Navigation() {
    let windowSize = useWindowSize();
    const [bg, setBg] = useState("light");

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <header style={{ width: '100%', backgroundColor: 'white', height: '100%' }}>
            {/*<nav  className="navbar navbar-expand-md fixed-top  p-0 ">
    <div className="container-xl px-0">

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon navbar-toggler-icon-light" style={{ backgroundImage: 'url(static/img/navbar_toggler_icon.svg)'}}></span>
        <span className="navbar-toggler-icon navbar-toggler-icon-dark " style={{ backgroundImage: 'url(static/img/navbar_toggler_icon_secondary.svg)'}}></span>
      </button>
      <a className="navbar-brand d-md-none d-sm-block" href="/"> <img src="static/img/fintuu_text.svg" /></a>
      <a className="navbar-brand d-md-none d-sm-block" href="/"> <img src="static/img/fintuu_img.svg" /></a>

      <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mr-auto nav-menu">
                <li>                  
                  <Link className="navbar-brand m-0 py-0 px-2" to="/">  <img src="static/img/logo_fintuu.svg" className="logo-fintuu" /></Link>
                </li>
                <li className="nav-item mt-md-0 mt-5">
                  <Link className="nav-link" to="/exchange">EXCHANGE <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item mt-md-0 mt-3">
                  <Link className="nav-link" to="/albus">ALBUS</Link>
                </li>
                <li className="nav-item mt-md-0 mt-3">
                  <a className="nav-link" href="nosotros.html">NOSOTROS</a>
                </li>
                <li className="nav-item mt-md-0 mt-3">
                      <a className="nav-link" href="ayuda.html">AYUDA</a>
                </li>
                <li className="nav-item mt-md-0 mt-3">
                      <a className="nav-link" href="blog.html">BLOG</a>
                </li>
              </ul>
              <br className="clear" />


              <div className="d-inline mt-2 mt-md-0 ml-4 pl-4 nav-options">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item px-sm-2 nav-register">
                    <a className="nav-link" href="registrarme.html" style={{ padding: ".5rem" }}>QUIERO UNIRME</a>
                  </li>
                  <li className="nav-item nav-login "  data-toggle="modal" data-target="#exampleModal">
                    <a className="nav-link" >INGRESAR</a>
                  </li>
                </ul>
              
              </div>
          </div>
    </div>
</nav>*/}

            <Navbar fixed='top'  className="w-100 d-block d-md-none" style={{ marginTop: "50px"}}>
                <Nav className="w-100">
                    <Nav.Link className="bg-dark text-white text-center font-weight-bold w-100 py-3" bg="dark" variant="dark" onClick={handleShow}>INGRESAR</Nav.Link>
                </Nav>
            </Navbar>

            <Navbar fixed='top' collapseOnSelect expand="md"
                    bg={ (windowSize.innerWidth > 768)?"light":bg }
                    variant={ (windowSize.innerWidth > 768)?"light":bg }
                    onToggle={ toggled => (!toggled)?setBg("light"):setBg("dark")}
                    style={{ 'borderBottom': "solid 1px #000"}}
            >
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Brand as={Link} to="/" href="/"  className="navbar-brand d-md-none d-sm-block"> <img src="static/img/fintuu_text.svg" /></Navbar.Brand>
                <Navbar.Brand as={Link} to="/" href="/"  className="navbar-brand d-md-none d-sm-block"> <img src="static/img/fintuu_img.svg" /></Navbar.Brand>
                <Navbar.Brand as={Link} to="/" href="/" className="d-none d-md-block ml-3"> <img src="static/img/logo_fintuu.svg" className="logo-fintuu" /> </Navbar.Brand>


                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto  pt-5 pt-xs-0">
                        <Nav.Link as={Link} to="/exchange" href="/exchange" className="px-4 px-xs-2 px-lg-3  mt-5 mt-xs-0">EXCHANGE</Nav.Link>
                        <Nav.Link as={Link} to="/albus" href="/albus" className="px-4 px-xs-2 px-lg-3">ALBUS</Nav.Link>
                        <Nav.Link as={Link} to="/albus" href="/albus" className="px-4 px-xs-2 px-lg-3">NOSOTROS</Nav.Link>
                        <Nav.Link as={Link} to="/albus" href="/albus" className="px-4 px-xs-2 px-lg-3">AYUDA</Nav.Link>
                        <Nav.Link as={Link} to="/albus" href="/albus" className="px-4 px-xs-2 px-lg-3">BLOG</Nav.Link>
                    </Nav>

                    <Nav className="mb-5 mb-xs-0">
                        <Nav.Link as={Link} to="/albus" href="/albus"  className=" px-2 px-md-3 px-lg-5">QUIERO UNIRME</Nav.Link>
                        <Nav.Link className="bg-dark text-white px-2 px-md-3 px-lg-5" bg="dark" variant="dark" onClick={handleShow}>INGRESAR</Nav.Link>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton className={"pb-0 border-bottom-0"}>
                    <Modal.Title></Modal.Title>
                </Modal.Header>
                <Modal.Body className="pt-0 px-0">

                    <div className="container p-0">
                        <div className="row">
                            <div className="col-md-6 offset-md-3 p-3 p-md-0">
                                <h4 className="font-weight-bold fs-35 pb-3">ingresar.</h4>

                                <div className="input-group my-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text border-right-0" id="basic-addon1"><img
                                            src="static/img/ico_username.svg"/></span>
                                    </div>
                                    <input type="text" className="form-control border-left-0" placeholder="Username"
                                           aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text border-right-0" id="basic-addon2"><img
                                            src="static/img/ico_password.svg"/></span>
                                    </div>
                                    <input type="password" className="form-control border-left-0" placeholder="Password"
                                           aria-label="Password" aria-describedby="basic-addon2" />
                                </div>

                                <div className="input-group">

                                    <button className="btn btn-block btn-secondary" type="button">Iniciar sesión
                                    </button>

                                </div>
                                <div className="my-5">
                                    <p className=" separator text-center">
                                        <span>o</span>
                                    </p>
                                </div>

                                <div className="input-group my-2">

                                    <button className="btn btn-block btn-primary border-dark text-dark" type="button">
                                        <img src="static/img/ico_google.svg" className="px-1"/> Ingresar con Google
                                    </button>

                                </div>
                                <div className="text-center my-4">
                                    <p>¿No tienes una cuenta? <b>Regístrate</b></p>
                                </div>
                                <div className="text-center my-4">
                                    <p>Olvide mi contraseña</p>
                                </div>

                            </div>
                        </div>
                    </div>

                </Modal.Body>
            </Modal>

        </header>

    );

}


export default Navigation;