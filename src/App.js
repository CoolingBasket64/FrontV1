import React, {Fragment} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './public/css/Login.css';
import './public/css/Registrar.css';
import './public/css/Index.css';
import Login from './Paginas/auth/login';
import CrearCuenta from './Paginas/auth/CrearCuenta';
import Index from './Paginas/Index';

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path='/login' exact element={<Login/>}/>
          <Route path='/crear-cuenta' exact element={<CrearCuenta/>}/>
          <Route path='/index' exact element={<Index/>}/>
         
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
