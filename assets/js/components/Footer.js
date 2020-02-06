import React from 'react'


class Footer extends React.Component { 
  render() { 
    return (

    <footer className="container-fluid py-5">
      <div className="container">
          <div className="row">
              <div className="col-12 col-md-3 order-12 order-md-1">
                <h6>Contáctanos</h6>
                <ul className="list-unstyled text-small">
                  <li><a className="text-muted" href="#">nombre@mail.com</a></li>
                  <li><a className="text-muted" href="#">(+51) 123 456 789</a></li>
                </ul>
                <div className="row">
                    <div className="col-1"><a href="#"><img src="static/img/fb.svg" /></a></div>
                    <div className="col-1"><a href="#"><img src="static/img/ig.svg" /></a></div>
                    <div className="col-1"><a href="#"><img src="static/img/ln.svg" /></a></div>
                </div>
                <div className="row py-4 pr-1">
                    <div className="col-6 mr-0 pr-0"><a href="#"><img src="static/img/app-store.svg" className="img-fluid"  /></a></div>
                    <div className="col-6 mr-0 pr-0"><a href="#"><img src="static/img/google-play.svg" className="img-fluid" /></a></div>
                </div>
              </div>
              <div className="col-12 col-md-2 order-2 order-md-2">
                <h6>Productos</h6>
                <ul className="list-unstyled text-small">
                  <li><a className="text-muted" href="#">Productos</a></li>
                  <li><a className="text-muted" href="exchange.html">Exchange</a></li>
                  <li><a className="text-muted" href="albus.html">Albus</a></li>
                </ul>
              </div>
              <div className="col-12 col-md-2 order-3 order-md-3">
                  <h6>Fintuu</h6>
                <ul className="list-unstyled text-small">
                  <li><a className="text-muted" href="nosotros.html">Sobre nosotros</a></li>
                  <li><a className="text-muted" href="ayuda.html">Preguntas frecuentes</a></li>
                  <li><a className="text-muted" href="#">Contacto</a></li>
                </ul>
              </div>
              <div className="col-12 col-md-2 order-4 order-md-4">
                <h6>Transparencia</h6>
                <ul className="list-unstyled text-small">
                  <li><a className="text-muted" href="#">Transparencia</a></li>
                  <li><a className="text-muted" href="#">Políticas de Privacidad</a></li>
                  <li><a className="text-muted" href="#">Términos y Condiciones</a></li>
                  <li><a className="text-muted" href="#">Licencia SBS</a></li>
                </ul>
              </div>
              <div className="col-12 col-md-3 order-5 order-md-5">
                <h6>Aprende más sobre Fintuu</h6>
                <ul className="list-unstyled text-small">
                  <li><a className="text-muted" href="#">Aprende más sobre Fintuu</a></li>
                  <li><a className="text-muted" href="#">Recibe nuestro newsletter</a></li>
                </ul>
              </div>
            </div>
      </div>
    </footer>

    );
  }
}

export default Footer