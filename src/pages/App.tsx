import * as React from 'react';
import '../assets/styles/App.css';
import Layout from './Layout';
import Login from './Login';
import About from './About';
import Home from './Home';
import GeoEjecutivo from './GeoEjecutivo';
import SegEjecutivo from './SegEjecutivo';
import GeoCliente from './geoCliente';
import Cliente from './cliente';
import Usuario from './usuario';
import Tarea from './tarea';
import ResumenTiempo from './resumenTiempo';
import EvolucionGestion from './EvolucionGestion';
import TareaCliente from './TareaCliente';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import { RouterPathEnum } from '../enums/RouterPathEnum';
import {createBrowserHistory } from "history"

// const history = createBrowserHistory({ base:'/web' });

function App() {
  return (
      <BrowserRouter basename={process.env.REACT_APP_PATH || ""}>
      {/* <BrowserRouter basename=""> */}
        <Routes>
          <Route path={RouterPathEnum.LOGIN} element={<Login />} />

          <Route element={<Layout />} >
            <Route path={RouterPathEnum.HOME} element={<Home />} />
            <Route path={RouterPathEnum.ABOUT} element={<About />} />            
            <Route path={RouterPathEnum.USUARIOS} element={<Usuario />} />
            <Route path={RouterPathEnum.GEO_EJECUTIVO} element={<GeoEjecutivo />} />
            <Route path={RouterPathEnum.SEG_EJECUTIVO} element={<SegEjecutivo />} />
            <Route path={RouterPathEnum.CLIENTES} element={<Cliente />} />
            <Route path={RouterPathEnum.GEO_CLIENTES} element={<GeoCliente />} />
            <Route path={RouterPathEnum.TAREA} element={<Tarea />} />
            <Route path={RouterPathEnum.RESUMEN_TIEMPO} element={<ResumenTiempo />} />
            <Route path={RouterPathEnum.EVOLUCION_GESTIONES} element={<EvolucionGestion />} />
            <Route path={RouterPathEnum.TAREA_CLIENTE} element={<TareaCliente />} />
          </Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;