import React from "react";
import { Link } from 'react-router-dom';


const CrearCuenta = () => {
    return (
<div>
  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" />
  <div className="body-r">
    <nav>
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <i className="fas fa-bars" />
      </label>
      <a href="#" className="enlace">
        <img src="logos.png" alt className="logo" />
      </a>
      <ul>
        <li><Link to={"#"}className="active" >Inicio</Link></li>
        <li><Link to={"/index"}>Nosotros</Link></li>
        <li><Link to={"#"}>Servicios</Link></li>
        <li><Link to={"#"}>Portafolio</Link></li>
        <li><Link to={"#"}>Contacto</Link></li>
      </ul>
    </nav>
    
    <form className="form-l">
      <h2 className="form-title-l">Registrarse</h2>
      <p className="form-texto-l">Registrar un nuevo usuario</p>
      <div className="form-container-l">
        <div className="form-group-l">
          <input type="text" id="nombre" className="form-input-l" placeholder=" " />
          <label htmlFor="nombre" className="form-label-l">Nombres:</label>
          <span className="form-line" />
        </div>
        <div className="form-group-l">
          <input type="text" id="apellido" className="form-input-l" placeholder=" " />
          <label htmlFor="apellido" className="form-label-l">Apellidos:</label>
          <span className="form-line" />
        </div>
        <div className="form-group-l">
          <input type="text" id="usuario" className="form-input-l" placeholder=" " />
          <label htmlFor="usuario" className="form-label-l">Usuario:</label>
          <span className="form-line" />
        </div>
        <div className="form-group-l">
          <input type="password" id="password" className="form-input-l" placeholder=" " />
          <label htmlFor="password" className="form-label-l">Contraseña:</label>
          <span className="form-line-l" />
        </div>
        <div className="form-group-l">
          <input type="text" id="direccion" className="form-input-l" placeholder=" " />
          <label htmlFor="direccion" className="form-label-l">Direccion:</label>
          <span className="form-line" />
        </div>
        <center>
          <input type="submit" className="form-submit-l" defaultValue="Registrarse" />
          <Link to={"/login"}><button className="button-l">Iniciar sesión</button></Link>
        </center>
        
      </div>
    </form>
    
    <div className="footer-r">
      <p> Creado por: Santiago Carreño | Aprendiz Sena </p><strong>©2023</strong>.
      </div>
      </div>
</div>

      

    )
}

export default CrearCuenta;