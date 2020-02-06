import React, { Fragment } from 'react'
import Calculadora from '../components/Calculadora'

export class Exchange extends React.Component { 
    
    constructor(props) {
        super(props);
        this.state = {
            upCurrency : "PEN",
            downCurrency : "USD",
            upValue : 1000,
            downValue : 3500,
            rate : 3.5,
            saving: 0
        };
    }

    render() { 
        return (

    <main role="main" className="pt-50">

      <div className="jumbotron jumbotron-fluid container-xl" style={{ backgroundImage: "url('static/img/exchange_hero_fx.jpg')" }} >
        <div className="container-xl p-0 m-0">
          <div className="row py-0 px-4 m-0">
            <div className="col-xs-11 col-sm-11 col-md-7 col-lg-7  offset-xs-1  offset-sm-1 offset-md-1 offset-lg-1  wrapper ">
              <div className="slogan float-left ">
                 
                <div className="row py-3">
                  <div className="col-12">

                      <h1 className="line-height-100 py-35">
                          exchange.
                      </h1>
                      <h5 className="fs-35">
                          “Combinamos el tipo de cambio de la calle con la facilidad de las transacciones en línea desde donde estés”
                      </h5>
    
                  </div>
                </div>
                <Calculadora />
              </div>
            </div>
          </div>


        </div>
      </div>

      
      <div className="container-img container-img-right" style={{ backgroundImage: "url(static/img/exchange_bussiness_fx.png)" }}>
        <div className="container-xl p-0 my-0 mx-auto display-table"  >
          <div className=" container-xl p-0 m-0 display-table-cell vertical-align-middle">
            <div className="row w-100 p-0 m-0  ">
              <div className="col-12 col-xxl-8  col-xl-6 col-lg-7 col-md-6 offset-lg-1 offset-xxl-0 offset-md-0 ">
                <h1 className="p-2">exchange.<br/><span className="font-weight-light">para negocios.</span></h1>
                
                
                <h5 className="text-black-50">
                    “Una solución de tipo de cambio para tu negocio 100% online”
                </h5>

                <div className="py-35">

                    <a className="btn btn-primary btn-lg font-weight-bold border-dark border-25 text-dark" href="registrarme.html">REGISTRA TU EMPRESA</a>
                </div>
                
              </div>

              
            </div>     
          </div>
        </div>
      </div>

      
      
      <div className="px-2 p-md-0 mb-5">
        <div className="container-xl container-hero py-0" style={{ backgroundImage: "url(static/img/exchange_how.jpg)" }} >
          <div className="container-xl px-0 py-0 my-0 mx-auto display-table  h-100"  >
            <div className=" container-xl p-0 m-0 display-table-cell vertical-align-middle">
              <div className="row w-100 p-0 m-0  ">
                <div className="col-xl-6 col-lg-7 col-md-8 col-sm-9 col-xs-12 offset-sm-1 offset-md-1 offset-lg-5 offset-xs-0 wrapper wrapper-right wrapper-light">
                  <div className="slogan float-right">
                    <h1 className="py-50">
                        ¿cómo funciona?
                    </h1>
                    <h5 className="text-black-50">
                        ¡Cambia tus dólares en solo 4 pasos!
                    </h5>
                    
                    <div className="row py-2">
                      <div className="col-12 offset-0 offset-md-2">
                          <ul className="list-unstyled">
                            <li>1. Crea tu cuenta en FINTUU</li>
                            <li>2. Registra tu operación</li>
                            <li>3. Transfiere a FINTUU</li>
                            <li>4. Recibe tu cambio</li>
                          </ul>
                      </div>
                    </div>

                  </div>
                </div>
              </div>     
            </div>
          </div>
        </div>
      </div>    

      <div className="p-2 p-md-0 my-5">
        <div className="container-xl container-hero py-0" style={{ backgroundImage: " url(static/img/exchange_benefits_fx.jpg)" }} >
          <div className="container-xl px-0 py-0 my-0 mx-auto display-table  h-100"  >
            <div className=" container-xl p-0 m-0 display-table-cell vertical-align-middle">
              <div className="row w-100 p-0 m-0  ">
                <div className="col-xl-10 col-lg-10 col-md-10 col-sm-10 col-xs-12 offset-sm-1 offset-md-1 offset-lg-1  offset-xs-0 wrapper wrapper-dark wrapper-center">
                  <div className="slogan float-left">
                    <h1 className="text-white  pb-50">
                        beneficios.
                    </h1>
                    
                    <div className="row">

                      <div className="col-md-4">
                        <img src="static/img/exchange_benefits_rate.svg" />
                        <h5 className="text-white font-weight-bold fs-35 py-35">El tipo de cambio
                            de la calle</h5>
                        <p className="text-white">FINTUU te da el tipo de cambio de la calle de manera directa para que 
                          puedas ahorrar en cada transacción en comparación con otras entidades del sector financiero</p>
                      </div>

                      <div className="col-md-4 d-none d-xs-block">
                          <img src="static/img/exchange_benefits_security.svg" />
                          <h5 className="text-white font-weight-bold fs-35 py-35">El tipo de cambio
                              de la calle</h5>
                          <p className="text-white">FINTUU te da el tipo de cambio de la calle de manera directa para que 
                            puedas ahorrar en cada transacción en comparación con otras entidades del sector financiero</p>
                        </div>

                        <div className="col-md-4 d-none d-xs-block">
                            <img src="static/img/exchange_benefits_time.svg" />
                            <h5 className="text-white font-weight-bold fs-35 py-35">El tipo de cambio
                                de la calle</h5>
                            <p className="text-white">FINTUU te da el tipo de cambio de la calle de manera directa para que 
                              puedas ahorrar en cada transacción en comparación con otras entidades del sector financiero</p>
                          </div>

                    </div>
                    
                  </div>
                </div>
              </div>     
            </div>
          </div>
        </div>
      </div>
          
      
    </main>
        ); 
    } 
}

export default Exchange