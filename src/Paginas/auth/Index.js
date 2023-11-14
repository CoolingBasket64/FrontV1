import React from "react";
import { Link } from 'react-router-dom';


const Index = () => {
  return (
    <div>
      <link rel="stylesheet" href="style.css" />
      
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
      <div className="body-index">
        <nav>
          <input type="checkbox" id="check" />
          <label htmlFor="check" className="checkbtn">
            <i className="fas fa-bars" />
          </label>
          <Link to={"#"} className="enlace">
            <img src="logos.png" alt className="logo" />
          </Link>
          <ul>
            <li><Link to={"#"} className="active" >Inicio</Link></li>
            <li><Link to={"#"}>Nosotros</Link></li>
            <li><Link to={"#"}>Servicios</Link></li>
            <li><Link to={"#"}>Portafolio</Link></li>
            <li><Link to={"#"}>Contacto</Link></li>
          </ul>
        </nav>
        <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="true">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="naruto.png" class="d-block w-100" data-bs-interval="2000"/>
                    <div class="carousel-caption d-none d-md-block">
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="naruto.png" class="d-block w-100" data-bs-interval="2000"/>
                    <div class="carousel-caption d-none d-md-block">
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="naruto.png" class="d-block w-100" data-bs-interval="2000"/>
                    <div class="carousel-caption d-none d-md-block">
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        
      <div className="footer">
      <p> Creado por: Santiago Carreño | Aprendiz Sena </p><strong>©2023</strong>.
      </div>
      </div>
    </div>


  )
}

export default Index;