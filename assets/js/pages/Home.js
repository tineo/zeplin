import React from 'react'
class Home extends React.Component { 
    render() { 
        return (
            
<main role="main" className="pt-50">

<div className="jumbotron jumbotron-fluid container-xl" style={{ backgroundImage: "url('static/img/hero_img.jpg')"}} >
  <div className="container-xl p-0 m-0">
    <div className="row py-0 px-4 m-0">
      <div className="col-xs-11 col-sm-11 col-md-6 col-lg-5  offset-xs-1  offset-sm-1 offset-md-1 offset-lg-1  wrapper ">
        <div className="slogan float-left">
            <img src="static/img/home_jumbo.svg" className="mb-4 d-md-none d-sm-block" />
          <h1 className=" ml3 py5">
              diseña,
              construye y
              retoma
          </h1>
          <h5 className="ml13">
              el control de tu vida financiera.
          </h5>
        </div>
      </div>
    </div>
  </div>
</div>


<div className="container-img-left container-img" style={{ backgroundImage: "url(static/img/home_fin.png)" }}>
  <div className="container-xl px-0 py-5 my-0 mx-auto display-table"  >
    <div className=" container-xl p-0 m-0 display-table-cell vertical-align-middle">
      <div className="row w-100 p-0 m-0  ">
        <div className="col-12 col-xxl-7 col-xl-6 col-lg-6 col-md-6 offset-lg-6 offset-xxl-5 offset-xl-6 offset-md-6 ">
            <p className="subtext">
                FINTUU ha creado productos y servicios  para humanizar y personalizar la banca.
            </p>
            <p>
                <b>Porque el FIN eres TUU.</b> 
            </p>
          </div>

          <div className="col-12 d-md-none">
            <img src="static/img/home_fin.png"  className="img-fluid" />
            
          </div>
        </div>
          
        </div>
  </div>
</div>



<div className="p-2 p-md-0 my-5">
  <div className="container-xl container-hero py-0" style={{ backgroundImage: "url(static/img/home_exchange.jpg)"}} >
    <div className="container-xl px-0 py-0 my-0 mx-auto display-table  h-100"  >
      <div className=" container-xl p-0 m-0 display-table-cell vertical-align-middle">
        <div className="row w-100 p-0 m-0  ">
          <div className="col-xl-6 col-lg-6 col-md-8 col-sm-9 col-xs-12 offset-sm-1 offset-md-1 offset-lg-1 offset-xs-0 wrapper wrapper-dark">
            <div className="slogan float-left">
              <h1 className="text-white py-50">
                exchange.
              </h1>
              <h5 className="text-white">
                “Compra y vende dólares al precio de la calle de una manera segura y sencilla desde cualquier lugar”.
              </h5>
              <h5 className="text-white"><span>Conoce más sobre nuestro servicio de tipo de cambio.</span></h5>
              <div className="row">
                <div className="col-md-4">
                    <a className="btn btn-primary text-white btn-lg btn-b w-100 font-weight-bold" href="exchange.html">IR A EXCHANGE</a>
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
  <div className="container-xl container-hero py-0" style={{ backgroundImage: "url(static/img/home_albus.jpg)"}} >
    <div className="container-xl px-0 py-0 my-0 mx-auto display-table  h-100"  >
      <div className=" container-xl p-0 m-0 display-table-cell vertical-align-middle">
        <div className="row w-100 p-0 m-0  ">
          <div className="col-xl-6 col-lg-6 col-md-7 col-sm-9 col-xs-12 offset-sm-1 offset-md-5 offset-lg-5 offset-xs-0 wrapper wrapper-dark">
            <div className="slogan float-left">
              <h1 className="text-white py-50">
                  albus.
              </h1>
              <h5 className="text-white">
                “El primer programa de educación e inclusión financiera 100% digital para todas las edades”.
              </h5>
              <h5 className="text-white"><span>Consulta de manera inmediata tu nivel de salud financiera aquí.</span></h5>
              
              <div className="row">
                  <div className="col-md-4">
                      <a className="btn btn-primary text-white btn-lg btn-b w-100 font-weight-bold" href="albus.html">IR A ALBUS</a>
                  </div>
                </div>
            </div>
          </div>
        </div>     
      </div>
    </div>
  </div>
</div>
    
<div className="container-img container-img-right" style={{ backgroundImage: "url(static/img/home_nosotros.png)"}}>
  <div className="container-xl p-0 my-0 mx-auto display-table"  >
    <div className=" container-xl p-0 m-0 display-table-cell vertical-align-middle">
      <div className="row w-100 p-0 m-0  ">
        <div className="col-12 col-xxl-8  col-xl-7 col-lg-7 col-md-6 offset-lg-1 offset-xxl-0 offset-md-0 ">
          <h1 className="py-50">nosotros.</h1>
          <h5>
            “Existimos para redefinir el significado de la industria financiera y para retar a lo que está establecido”
          </h5>
          <p className="subtext">
            Por muchas décadas, las personas en Perú y América Latina han pagado tasas de interés altísimas y comisiones excesivas por 
            servicios financieros mediocres. FINTUU a través de un trato humano y con el uso de la tecnología va a resolver este problema.
          </p>
          
          <h5>
            “Juntos estamos construyendo el futuro que nos merecemos”
          </h5>
          <p className="subtext">
            Vamos a darte el control de tus finanzas, tu tiempo y de tu presente y futuro. Tú eres parte de este cambio y de esta nueva comunidad.
          </p>
        </div>

        <div className="col-12 d-md-none">
            <img src="static/img/home_nosotros.png"  className="img-fluid" />  
        </div>
      </div>     
    </div>
  </div>
</div>


<div className="m-auto container-xl align-content-md-between p-0 m-0 ">
    <div className="container-xl m-0 p-0">
        <div className="row m-0 p-0">
            <div className="col-12">
                <h1 className="py-50">blog.</h1>
            </div>
        </div>
      <div className="row m-0 p-0">
          <div id="myCarousel" className="carousel slide w-100" data-ride="carousel">
              <div className="carousel-inner" role="listbox">
                  <div className="carousel-item pb-5 active">
                      <div className="row p-0 m-0 your-class">
                        
                        
                        <div className="post pb-5">
                          <img src="static/img/home_blog1.jpg" 
                          className="img-fluid" />
                          <div className="px-5 pt-5">
                            <time datetime="">
                              21 . 11 . 2019     |     5 min
                            </time>
                            <p className="py-3">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum elit quam.
                            </p>
              
                            <a href="blogpost.html">IR A BLOG</a>
                          </div>
                        </div>  

                        <div className="post pb-5">
                          <img src="static/img/home_blog2.jpg" 
                          className="img-fluid" />
                          <div className="px-5 pt-5">
                            <time datetime="">
                              21 . 11 . 2019     |     5 min
                            </time>
                            <p className="py-3">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum elit quam.
                            </p>
              
                            <a href="blogpost.html">IR A BLOG</a>
                          </div>
                        </div>  

                        <div className="post pb-5">
                          <img src="static/img/home_blog3.jpg" 
                          className="img-fluid" />
                          <div className="px-5 pt-5">
                            <time datetime="">
                              21 . 11 . 2019     |     5 min
                            </time>
                            <p className="py-3">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dictum elit quam.
                            </p>
              
                            <a href="blogpost.html">IR A BLOG</a>
                          </div>
                        </div>  

                      </div>
                  </div>
                  
                  
              </div>
          </div>
      </div>
      <div className="row">
          <div className="col-12">
              <a className="carousel-control-prev text-dark" href="#myCarousel" role="button" data-slide="prev">
                  <span className="fa fa-chevron-left" aria-hidden="true"></span>
                  <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next text-dark" href="#myCarousel" role="button" data-slide="next">
                  <span className="fa fa-chevron-right" aria-hidden="true"></span>
                  <span className="sr-only">Next</span>
              </a>
          </div>
      </div>
  </div>
  
</div>

</main>

        );
    } 
}

export default Home